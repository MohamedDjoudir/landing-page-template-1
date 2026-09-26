"use client";

import { useTranslations } from "next-intl";
import { Input, Textarea, Button } from "@/components/ui";
import { useContactForm } from "../hooks";

export function ContactForm() {
  const t = useTranslations("contact.form");
  const { register, errors, onSubmit, isPending, isSuccess, isError } =
    useContactForm();

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6">
      <Input
        id="name"
        label={t("fields.name.label")}
        type="text"
        placeholder={t("fields.name.placeholder")}
        required
        error={errors.name?.message}
        {...register("name")}
      />
      <Input
        id="email"
        label={t("fields.email.label")}
        type="email"
        placeholder={t("fields.email.placeholder")}
        required
        error={errors.email?.message}
        {...register("email")}
      />
      <Textarea
        id="message"
        label={t("fields.message.label")}
        rows={5}
        placeholder={t("fields.message.placeholder")}
        required
        error={errors.message?.message}
        {...register("message")}
      />
      <Button
        type="submit"
        variant="primary"
        className="w-full relative group overflow-hidden"
        disabled={isPending}
      >
        <span className="relative z-10">
          {isPending ? t("sending") : t("submit")}
        </span>
        <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
      </Button>
      {isSuccess && (
        <p role="status" className="text-white/80">
          {t("success")}
        </p>
      )}
      {isError && (
        <p role="alert" className="text-destructive">
          {t("error")}
        </p>
      )}
    </form>
  );
}
