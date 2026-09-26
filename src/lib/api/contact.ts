import type { ApiResponse, ContactPayload } from "@/types";
import { apiRequest, isApiConfigured } from "./client";

const SIMULATED_LATENCY_MS = 600;

export const contactApi = {
  async send(payload: ContactPayload): Promise<ApiResponse> {
    if (!isApiConfigured) {
      // No back-end configured: accept the message locally so the form flow can be tried out.
      await new Promise((resolve) => setTimeout(resolve, SIMULATED_LATENCY_MS));
      return { success: true };
    }

    return apiRequest("/contact", {
      method: "POST",
      body: JSON.stringify(payload),
    });
  },
};
