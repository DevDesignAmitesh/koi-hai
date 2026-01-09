import { useState } from "react";
import { pairingSchema, zodErrorMessage } from "@repo/types/types";
import type { Notify, PairingProps } from "@repo/types/types";
import axios from "axios";

export const useCompletePair = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleCompletePair = async ({
    input,
    notify,
    HTTP_URL,
    handleSuccess,
  }: {
    input: PairingProps;
    notify: Notify;
    HTTP_URL: string;
    handleSuccess: (token: string, redirectUrl: string) => void;
  }) => {
    const { success, data, error } = pairingSchema.safeParse(input);

    if (!success) {
      notify.error(zodErrorMessage({ error }));
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post(`${HTTP_URL}/auth/pairing`, data);

      if (res.status >= 200) {
        handleSuccess(res?.data?.data?.token, res?.data?.data?.redirectUrl);
        return;
      }

      notify.error(res?.data?.message ?? "Internal server error");
      return;
    } catch (e: any) {
      console.log("error in useCompletePair ", e);
      notify.error(e.response?.data?.message ?? "Internal server error");
      return;
    } finally {
      setLoading(false);
    }
  };

  return { loading, handleCompletePair };
};
