import type { ApiResponse } from "@/types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "";

export const isApiConfigured = API_BASE_URL !== "";

export async function apiRequest<T = unknown>(
  endpoint: string,
  init?: RequestInit
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...init?.headers,
      },
    });
    const body = (await response.json().catch(() => null)) as ApiResponse<T> | null;

    if (!response.ok) {
      return { success: false, error: body?.error ?? response.statusText };
    }

    return body ?? { success: true };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Network error",
    };
  }
}
