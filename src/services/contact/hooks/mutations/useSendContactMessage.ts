"use client";

import { useMutation } from "@tanstack/react-query";
import { contactApi } from "@/lib/api";
import type { ContactPayload } from "@/types";

export function useSendContactMessage() {
  return useMutation({
    mutationFn: async (payload: ContactPayload) => {
      const response = await contactApi.send(payload);

      if (!response.success) {
        throw new Error(response.error);
      }

      return response;
    },
  });
}
