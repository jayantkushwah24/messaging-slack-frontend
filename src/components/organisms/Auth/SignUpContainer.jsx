import { useNavigate } from "react-router";
import { useSignup } from "@/hooks/apis/auth/useSignup";
import { SignupCard } from "./SignupCard";
import { useEffect, useState } from "react";

export const SignupContainer = () => {
  const navigate = useNavigate();

  const [signupForm, setSignupForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
  });

  const [validationError, setValidationError] = useState(null);

  const { isPending, isSuccess, error, signupMutation } = useSignup();

  async function onSignupFormSubmit(e) {
    e.preventDefault();

    const email = signupForm.email.trim();
    const password = signupForm.password;
    const confirmPassword = signupForm.confirmPassword;
    const username = signupForm.username.trim();

    if (!email || !password || !confirmPassword || !username) {
      setValidationError({ message: "All fields are required" });
      return;
    }

    if (password !== confirmPassword) {
      setValidationError({ message: "Passwords do not match" });
      return;
    }

    setValidationError(null);

    try {
      await signupMutation({ email, password, username });
    } catch {
      // The mutation error is rendered by SignupCard.
    }
  }

  useEffect(() => {
    if (!isSuccess) return;

    const redirectTimer = setTimeout(() => {
      navigate("/auth/signin");
    }, 1000);

    return () => clearTimeout(redirectTimer);
  }, [isSuccess, navigate]);

  return (
    <SignupCard
      error={error}
      isPending={isPending}
      isSuccess={isSuccess}
      signupForm={signupForm}
      setSignupForm={setSignupForm}
      validationError={validationError}
      onSignupFormSubmit={onSignupFormSubmit}
    />
  );
};
