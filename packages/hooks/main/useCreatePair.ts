import { useState } from "react";
import { createPairSchema, zodErrorMessage } from "@repo/types/types";
import type { CreatePairProps, Notify } from "@repo/types/types";
import axios from "axios";

export const useCreatePair = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleCreatePair = async ({
    input,
    notify,
    HTTP_URL,
    handleSuccess,
  }: {
    input: CreatePairProps;
    notify: Notify;
    HTTP_URL: string;
    handleSuccess: () => void;
  }) => {
    const { success, data, error } = createPairSchema.safeParse(input);

    if (!success) {
      notify.error(zodErrorMessage({ error }));
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post(`${HTTP_URL}/auth/create-pair`, data);

      if (res.status >= 200) {
        handleSuccess();
        return;
      }

      notify.error(res?.data?.message ?? "Internal server error");
      return;
    } catch (e: any) {
      console.log("error in useCreatePair ", e);
      notify.error(e.response?.data?.message ?? "Internal server error");
      return;
    } finally {
      setLoading(false);
    }
  };

  return { loading, handleCreatePair };
};
