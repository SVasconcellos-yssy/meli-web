import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import { errors } from "@/constants/errors";
import { RouterPaths } from "@/constants/routerPaths";
import { APIError } from "@/errors/APIError";


export function useAPIQuery({
  endpoint,
  method = "GET",
  queryKey = [],
  retryDelay = 1000,
  retryTimes = 0,
  enabled = true,
}) {
  const router = useRouter();
  const url = process.env.PUBLIC_API_URL + endpoint;
  const finalQueryKey = queryKey.length > 0 ? queryKey : [endpoint];

  return useQuery({
    queryKey: finalQueryKey,
    queryFn: async () => {
      const response = await fetch(url, {
        method,
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const status = String(response.status);
      if (response.status === 401) {
        const loginPath = RouterPaths.login.path;
        const currentPath = window.location.pathname;
        const callbackUrl = `${loginPath}?callback=${encodeURIComponent(currentPath)}`;
        router.replace(callbackUrl);
        throw new APIError("Não autorizado", { status: response.status });
      } else if (status.slice(0, 2) !== "20") {
        throw new Error(errors[status] || errors["default"]);
      }

      return response.json();
    },
    retry: retryTimes,
    retryDelay,
    enabled,
  });
}
