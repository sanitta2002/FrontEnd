import type { LoginFormData } from "@/utils/validation";

const MOCK_USER = {
  email: "test@hushlush.com",
  password: "Test@123",
};

export const login = async (credentials: LoginFormData): Promise<boolean> => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  return (
    credentials.email === MOCK_USER.email &&
    credentials.password === MOCK_USER.password
  );
};

export const loginAsGuest = async (): Promise<boolean> => {
  await new Promise((resolve) => {
    setTimeout(resolve, 500);
  });

  return true;
};
