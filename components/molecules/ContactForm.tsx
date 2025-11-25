"use client";

import { useRef, useEffect } from "react";
import { Button } from "@/components/atoms/Button";
import { Input } from "@/components/atoms/Input";
import { Typography } from "@/components/atoms/Typography";
import { Card } from "@/components/atoms/Card";
import { Icon } from "@/components/atoms/Icon";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitContactForm } from "@/lib/actions/contact";

interface ContactFormProps {
  variant?: "default" | "hacker" | "matrix";
  className?: string;
}

function SubmitButton({ variant }: { variant: ContactFormProps["variant"] }) {
  const { pending } = useFormStatus();
  
  return (
    <Button
      type="submit"
      variant={variant === "default" ? "default" : variant}
      disabled={pending}
      className="w-full"
    >
      {pending ? (
        <>
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2" />
          Sending...
        </>
      ) : (
        <>
          <Icon icon={Send} className="h-4 w-4 mr-2" />
          Send Message
        </>
      )}
    </Button>
  );
}

export function ContactForm({ variant = "hacker", className }: ContactFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction] = useActionState(submitContactForm, {
    success: false,
    message: "",
  });

  // Reset form on success
  useEffect(() => {
    if (state.success && formRef.current) {
      formRef.current.reset();
    }
  }, [state.success]);



  if (state.success) {
    return (
      <Card variant={variant} className={cn("text-center py-12", className)}>
        <Icon icon={CheckCircle} className="h-12 w-12 mx-auto mb-4 text-green-400" />
        <Typography variant="h3" className="text-green-400 mb-2">
          Message Sent Successfully!
        </Typography>
        <Typography variant="small" className="opacity-70">
          {state.message}
        </Typography>
      </Card>
    );
  }

  return (
    <Card variant={variant} className={className}>
      <form ref={formRef} action={formAction} className="space-y-6">
        <Typography variant="h3" className="font-mono mb-6">
          {"// Send Message"}
        </Typography>
        
        {!state.success && state.message && (
          <div className="flex items-center gap-2 p-3 rounded-md bg-red-500/10 border border-red-500/30">
            <Icon icon={AlertCircle} className="h-4 w-4 text-red-400" />
            <Typography variant="small" className="text-red-400">
              {state.message}
            </Typography>
          </div>
        )}
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-mono text-green-400 mb-2">
              name:
            </label>
            <Input
              type="text"
              name="name"
              variant={variant === "default" ? "default" : "hacker"}
              placeholder="your_name"
              required
            />
            {state.errors?.name && (
              <Typography variant="small" className="text-red-400 mt-1">
                {state.errors.name[0]}
              </Typography>
            )}
          </div>
          
          <div>
            <label className="block text-sm font-mono text-green-400 mb-2">
              email:
            </label>
            <Input
              type="email"
              name="email"
              variant={variant === "default" ? "default" : "hacker"}
              placeholder="your.email@domain.com"
              required
            />
            {state.errors?.email && (
              <Typography variant="small" className="text-red-400 mt-1">
                {state.errors.email[0]}
              </Typography>
            )}
          </div>
          
          <div>
            <label className="block text-sm font-mono text-green-400 mb-2">
              message:
            </label>
            <textarea
              name="message"
              rows={4}
              className={cn(
                "flex w-full rounded-md border px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-mono transition-all resize-none",
                variant === "hacker"
                  ? "border-green-500/50 bg-black/50 text-green-400 placeholder:text-green-400/50 focus:border-green-400 focus:ring-green-400/20"
                  : "border-input bg-background",
                state.errors?.message && "border-red-500/50"
              )}
              placeholder="Your message here..."
              required
            />
            {state.errors?.message && (
              <Typography variant="small" className="text-red-400 mt-1">
                {state.errors.message[0]}
              </Typography>
            )}
          </div>
        </div>
        
        <SubmitButton variant={variant} />
      </form>
    </Card>
  );
}