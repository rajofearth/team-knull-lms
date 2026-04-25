import { LoginScreen } from "@/components/auth/login-screen";
import { redirectIfAuthenticated } from "@/lib/session";

export default async function LoginPage() {
  await redirectIfAuthenticated("/courses");

  return <LoginScreen />;
}
