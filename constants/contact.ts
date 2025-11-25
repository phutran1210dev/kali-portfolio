import { Mail, MapPin, Calendar, Terminal } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ContactInfo {
  icon: LucideIcon;
  label: string;
  value: string;
  link?: string;
}

export const contactInfo: ContactInfo[] = [
  {
    icon: Mail,
    label: "Email",
    value: "phutran1210.dev@gmail.com",
    link: "mailto:phutran1210.dev@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "HCM City, Tân Phú District",
  },
  {
    icon: Calendar,
    label: "Availability",
    value: "Available for consulting",
  },
  {
    icon: Terminal,
    label: "PGP Key",
    value: "4096R/0x1234ABCD",
    link: "/pgp-key.txt",
  },
];