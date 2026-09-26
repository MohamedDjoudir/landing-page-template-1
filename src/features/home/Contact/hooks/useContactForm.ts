"use client";

import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useSendContactMessage } from "@/services/contact";
import type { ContactFormValues } from "../types";
import { createContactSchema } from "../utils";

export function useContactForm() {
  const t = useTranslations("contact.form");
  const schema = useMemo(() => createContactSchema(t), [t]);
  const sendMessage = useSendContactMessage();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = form.handleSubmit((values) => {
    sendMessage.mutate(values, { onSuccess: () => form.reset() });
  });

  return {
    register: form.register,
    errors: form.formState.errors,
    onSubmit,
    isPending: sendMessage.isPending,
    isSuccess: sendMessage.isSuccess,
    isError: sendMessage.isError,
  };
}
