import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router";

export const SignInCard = ({
  signinForm,
  setSigninForm,
  validationError,
  error,
  isPending,
  onSigninFormSubmit,
}) => {
  const navigate = useNavigate();

  return (
    <Card className="w-full max-w-md text-center">
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
        <CardDescription>Sign in to access your account</CardDescription>
        {validationError && (
          <p className="bg-destructive/15 p-4 rounded-md text-sm text-destructive">
            {validationError.message}
          </p>
        )}
        {error && (
          <p className="bg-destructive/15 p-4 rounded-md text-sm text-destructive">
            {error.message}
          </p>
        )}
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-2" onSubmit={onSigninFormSubmit}>
          <Input
            placeholder="Email"
            required
            onChange={(e) =>
              setSigninForm({ ...signinForm, email: e.target.value })
            }
            value={signinForm.email}
            type="email"
            disabled={isPending}
          />
          <Input
            placeholder="Password"
            required
            onChange={(e) =>
              setSigninForm({ ...signinForm, password: e.target.value })
            }
            value={signinForm.password}
            type="password"
            disabled={isPending}
          />
          <Button disabled={isPending} size="lg" type="submit" className="w-full">
            {isPending ? "Signing in..." : "Continue"}
          </Button>
        </form>

        <Separator className="my-5" />

        <p>
          Don't have an account?{" "}
          <button
            type="button"
            className="text-sky-600 hover:underline cursor-pointer"
            onClick={() => navigate("/auth/signup")}
          >
            Sign Up
          </button>
        </p>
      </CardContent>
    </Card>
  );
};
