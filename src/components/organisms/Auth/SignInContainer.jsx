import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { useSignin } from "@/hooks/apis/auth/useSignin";
import { SignInCard } from "./SignInCard";

export const SigninContainer = () => {
  const navigate = useNavigate();

  const [signinForm, setSigninForm] = useState({
    email: "",
    password: "",
  });

  const [validationError, setValidationError] = useState(null);

  const { isPending, isSuccess, error, signinMutation } = useSignin();

  async function onSigninFormSubmit(e) {
    e.preventDefault();

    const email = signinForm.email.trim();
    const password = signinForm.password;

    if (!email || !password) {
      setValidationError({ message: "All fields are required" });
      return;
    }

    setValidationError(null);

    try {
      await signinMutation({ email, password });
    } catch {
      // The mutation error is rendered by SigninCard.
    }
  }

  useEffect(() => {
    if (!isSuccess) return;

    const redirectTimer = setTimeout(() => {
      navigate("/home");
    }, 1000);

    return () => clearTimeout(redirectTimer);
  }, [isSuccess, navigate]);

  return (
    <SignInCard
      error={error}
      isPending={isPending}
      isSuccess={isSuccess}
      signinForm={signinForm}
      setSigninForm={setSigninForm}
      validationError={validationError}
      onSigninFormSubmit={onSigninFormSubmit}
    />
  );
};
