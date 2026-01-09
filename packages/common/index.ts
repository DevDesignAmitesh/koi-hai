export interface MessageProps {
  id: string
  senderId: string;
  message: string;
  createdAt: string;
}

export const DEV_HTTP_URL = "http://localhost:4000/api/v1";
export const PROD_HTTP_URL = "";
