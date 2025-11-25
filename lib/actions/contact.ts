"use server";

export interface FormState {
  success: boolean;
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
}

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  // Validate form data
  const errors: FormState["errors"] = {};

  if (!name || name.trim().length < 2) {
    errors.name = ["Name must be at least 2 characters long"];
  }

  if (!email || !email.includes("@")) {
    errors.email = ["Please enter a valid email address"];
  }

  if (!message || message.trim().length < 10) {
    errors.message = ["Message must be at least 10 characters long"];
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: "Please fix the errors below",
      errors,
    };
  }

  // Simulate sending email (replace with actual email service)
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Here you would integrate with an email service like:
    // - Resend
    // - SendGrid
    // - Nodemailer
    // - etc.

    console.log("Contact form submission:", { name, email, message });

    return {
      success: true,
      message: "Message sent successfully! I'll get back to you soon.",
    };
  } catch {
    return {
      success: false,
      message: "Failed to send message. Please try again later.",
    };
  }
}