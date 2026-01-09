import {
  createPinSchema,
  zodErrorMessage,
  type CreatePinProps,
  type Notify,
} from "@repo/types/types";
import axios from "axios";
import { useState } from "react";

export const useCreatePin = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleCreatePin = async ({
    input,
    notify,
    HTTP_URL,
    TOKEN,
    handleSuccess,
  }: {
    input: CreatePinProps;
    notify: Notify;
    HTTP_URL: string;
    TOKEN: string;
    handleSuccess: () => void;
  }) => {
    const { success, data, error } = createPinSchema.safeParse(input);

    if (!success) {
      notify.error(zodErrorMessage({ error }));
      return;
    }

    const { pin, confirmedPin } = data;

    if (pin.trim() !== confirmedPin.trim()) {
      notify.error("BOTH PINS are not equal/same");
      return;
    }

    if (!TOKEN) {
      notify.error("Auth token not found, please login or create account");
      return;
    }

    try {
      const res = await axios.post(`${HTTP_URL}/auth/create-pin`, data, {
        headers: {
          Authorization: TOKEN,
        },
      });

      if (res.status > 200) {
        handleSuccess();
        return;
      }

      notify.error(res?.data?.message ?? "Internal server error");
      return;
    } catch (e: any) {
      console.log("error in useCreatePin ", e);
      notify.error(e.response.data.message ?? "Internal server error");
    } finally {
      setLoading(false);
    }
  };

  return { loading, handleCreatePin };
};
