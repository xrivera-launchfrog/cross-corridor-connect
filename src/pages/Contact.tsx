import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const FormSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  organization: z.string().min(2, "Organization is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().optional(),
  inquiryType: z.enum(["Investor", "Media", "Vendor", "General"]),
  message: z.string().min(10, "Message is required"),
  consent: z.literal(true, { errorMap: () => ({ message: "Consent is required" }) }),
});

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: { inquiryType: "Investor" },
  });

  const onSubmit = async () => {
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
  };

  return (
    <main>
      <Helmet>
        <title>Contact | TGP</title>
        <meta name="description" content="Investor relations, media inquiries, and general information contacts for the Trans-Guatemala Inter-Oceanic Pipeline (TGP)." />
        <link rel="canonical" href="/contact" />
      </Helmet>

      <section className="container mx-auto py-12 md:py-20">
        <h1 className="text-3xl md:text-4xl font-semibold">Contact</h1>

        {!submitted ? (
          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 grid gap-6 max-w-2xl">
            <div className="grid gap-2">
              <Label htmlFor="fullName">Full Name *</Label>
              <Input id="fullName" {...register("fullName")} aria-invalid={!!errors.fullName} />
              {errors.fullName && <span className="text-sm text-destructive">{errors.fullName.message}</span>}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="organization">Organization *</Label>
              <Input id="organization" {...register("organization")} aria-invalid={!!errors.organization} />
              {errors.organization && <span className="text-sm text-destructive">{errors.organization.message}</span>}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email *</Label>
              <Input id="email" type="email" {...register("email")} aria-invalid={!!errors.email} />
              {errors.email && <span className="text-sm text-destructive">{errors.email.message}</span>}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="tel" {...register("phone")} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="inquiryType">Inquiry Type</Label>
              <select id="inquiryType" className="h-10 rounded-md border bg-background px-3" {...register("inquiryType")}>
                <option>Investor</option>
                <option>Media</option>
                <option>Vendor</option>
                <option>General</option>
              </select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">Message *</Label>
              <Textarea id="message" rows={6} {...register("message")} aria-invalid={!!errors.message} />
              {errors.message && <span className="text-sm text-destructive">{errors.message.message}</span>}
            </div>
            <div className="flex items-start gap-3">
              <input id="consent" type="checkbox" className="mt-1" {...register("consent")} />
              <Label htmlFor="consent" className="text-sm text-muted-foreground">I acknowledge this inquiry is for information only and not an offer to sell securities.</Label>
            </div>
            {errors.consent && <span className="text-sm text-destructive">{errors.consent.message}</span>}
            <div>
              <Button type="submit" variant="hero" disabled={isSubmitting}>{isSubmitting ? "Sending..." : "Submit"}</Button>
            </div>

            <div className="text-sm text-muted-foreground">
              <p><strong>Investor Relations:</strong> <a href="mailto:investorrelations@tgppipeline.com" className="underline">investorrelations@tgppipeline.com</a></p>
              <p><strong>Media:</strong> <a href="mailto:media@tgppipeline.com" className="underline">media@tgppipeline.com</a></p>
              <p><strong>General:</strong> <a href="mailto:info@tgppipeline.com" className="underline">info@tgppipeline.com</a></p>
            </div>
          </form>
        ) : (
          <div className="mt-8 max-w-2xl rounded-lg border p-6">
            <h2 className="text-2xl font-semibold">Thank you — inquiry received</h2>
            <p className="mt-2 text-muted-foreground">We’ll review your message and respond to the relevant address. Please note this inquiry is for information only and not an offer to sell securities.</p>
          </div>
        )}
      </section>
    </main>
  );
}
