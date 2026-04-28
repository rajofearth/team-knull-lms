import { connection } from "next/server";
import { LoginScreen } from "@/components/auth/login-screen";
import { redirectIfAuthenticated } from "@/lib/session";

export default async function LoginPage() {
  await connection();
  await redirectIfAuthenticated("/courses");

  return <LoginScreen />;
}
