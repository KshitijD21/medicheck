"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ContactFormData, contactFormSchema } from "@/lib/validations/contact";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Loader2, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface ContactFormProps {
  title?: string;
  description?: string;
}

export function ContactForm({
  title = "Get in Touch",
  description = "Fill out the form below and we'll get back to you within 24 hours.",
}: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      // Log the form data (in a real app, you would send 'data' to your API)
      console.log("Form submitted with data:", data);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast.success("Thank you for your inquiry!", {
        description: "We'll get back to you within 24 hours.",
      });

      reset();
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Something went wrong!", {
        description: "Please try again or contact us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Card className="max-w-2xl mx-auto bg-white border-[#E2E8F0]">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-[#1E293B]">
            {title}
          </CardTitle>
          <CardDescription className="text-[#64748B] text-base">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-[#1E293B] font-medium">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  className="bg-[#F1F5F9] border-[#E2E8F0] focus:border-[#1976D2]"
                  {...register("name")}
                />
                {errors.name && (
                  <p className="text-sm text-red-500">{errors.name.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="company" className="text-[#1E293B] font-medium">
                  Company Name *
                </Label>
                <Input
                  id="company"
                  type="text"
                  placeholder="Enter your company name"
                  className="bg-[#F1F5F9] border-[#E2E8F0] focus:border-[#1976D2]"
                  {...register("company")}
                />
                {errors.company && (
                  <p className="text-sm text-red-500">
                    {errors.company.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-[#1E293B] font-medium">
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+91 9876543210"
                  className="bg-[#F1F5F9] border-[#E2E8F0] focus:border-[#1976D2]"
                  {...register("phone")}
                />
                {errors.phone && (
                  <p className="text-sm text-red-500">{errors.phone.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#1E293B] font-medium">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  className="bg-[#F1F5F9] border-[#E2E8F0] focus:border-[#1976D2]"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="requirements"
                className="text-[#1E293B] font-medium"
              >
                Requirements *
              </Label>
              <Textarea
                id="requirements"
                placeholder="Please describe your requirements in detail..."
                rows={5}
                className="bg-[#F1F5F9] border-[#E2E8F0] focus:border-[#1976D2] resize-none"
                {...register("requirements")}
              />
              {errors.requirements && (
                <p className="text-sm text-red-500">
                  {errors.requirements.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#7CB342] hover:bg-[#689F38] text-white py-3 text-lg"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </>
              )}
            </Button>

            <p className="text-xs text-[#64748B] text-center">
              By submitting this form, you agree to our privacy policy and terms
              of service.
            </p>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}
