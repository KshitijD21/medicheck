import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  email: z.string().email("Invalid email address"),
  requirements: z.string().min(10, "Requirements must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
