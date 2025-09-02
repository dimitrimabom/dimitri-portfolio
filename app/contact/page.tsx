"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function validate() {
    const newErrors: { [key: string]: string } = {};
    if (!form.name.trim()) newErrors.name = "Le nom est requis.";
    if (!form.email.trim()) newErrors.email = "L’email est requis.";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Email invalide.";
    if (!form.message.trim()) newErrors.message = "Le message est requis.";
    return newErrors;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrors({});
    const validation = validate();
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }
    setLoading(true);
    // Simule l’envoi (remplace par ton API si besoin)
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <main className="max-w-md mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">Contactez-moi</h1>
      {submitted && (
        <Alert className="mb-6" variant="default">
          <AlertTitle>Merci !</AlertTitle>
          <AlertDescription>
            Votre message a bien été envoyé. Je vous répondrai rapidement.
          </AlertDescription>
        </Alert>
      )}
      <form className="space-y-6" onSubmit={handleSubmit} noValidate>
        <div>
          <Label htmlFor="name">Nom</Label>
          <Input
            id="name"
            name="name"
            placeholder="Votre nom"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            disabled={loading}
            required
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Votre email"
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            disabled={loading}
            required
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        <div>
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Votre message"
            value={form.message}
            onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
            disabled={loading}
            required
            rows={5}
          />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>
        <Button type="submit" className="w-full" disabled={loading}>

  )          {loading ? "Envoi..." : "Envoyer"}
        </Button>
      </form>
    </main>
  );
}