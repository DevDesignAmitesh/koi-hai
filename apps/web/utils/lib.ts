import { DEV_HTTP_URL, PROD_HTTP_URL } from "@repo/common/common";
import { Notify } from "@repo/types/types";
import { toast } from "sonner";

export const HTTP_URL =
  process.env.NODE_ENV === "development" ? DEV_HTTP_URL : PROD_HTTP_URL;

export const notify: Notify = {
  error: (val) => toast.error(val),
  success: (val) => toast.success(val),
};
