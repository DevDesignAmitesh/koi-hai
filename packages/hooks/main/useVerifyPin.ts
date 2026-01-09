import {
  pinSchema,
  zodErrorMessage,
  type Notify,
  type PinProps,
} from "@repo/types/types";
import axios from "axios";
import { useState } from "react";

export const useVerifyPin = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleVerifyPin = async ({
    input,
    notify,
    HTTP_URL,
    TOKEN,
    handleSuccess,
  }: {
    input: PinProps;
    notify: Notify;
    HTTP_URL: string;
    TOKEN: string;
    handleSuccess: () => void;
  }) => {
    const { success, data, error } = pinSchema.safeParse(input);

    if (!success) {
      notify.error(zodErrorMessage({ error }));
      return;
    }

    try {
      const res = await axios.post(`${HTTP_URL}/auth/verify-pin`, data, {
        headers: {
          Authorization: TOKEN,
        },
      });

      if (res.status >= 200) {
        handleSuccess();
        return;
      }

      notify.error(res?.data?.message ?? "Internal server error");
      return;
    } catch (e: any) {
      console.log("error in useVerifyPin ", e);
      notify.error(e.response.data.message ?? "Internal server error");
    } finally {
      setLoading(false);
    }
  };

  return { loading, handleVerifyPin };
};
