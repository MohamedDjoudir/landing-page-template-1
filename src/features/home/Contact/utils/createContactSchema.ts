import { z } from "zod";

type Translate = (key: string) => string;

export function createContactSchema(t: Translate) {
  return z.object({
    name: z.string().trim().min(1, t("validation.nameRequired")),
    email: z
      .string()
      .trim()
      .min(1, t("validation.emailRequired"))
      .pipe(z.email(t("validation.emailInvalid"))),
    message: z.string().trim().min(1, t("validation.messageRequired")),
  });
}
