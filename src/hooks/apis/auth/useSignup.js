import { signInRequest } from "@/api/auth";
import { useMutation } from "@tanstack/react-query";

export const useSignup = () => {
  const {
    isSuccess,
    isError,
    error,
    mutate: singupMutation,
  } = useMutation({
    mutationFn: signInRequest,
    onSuccess: (data) => {
      console.log("successfully signed up: ", data);
    },
    onError: (error) => {
      console.error("failed to signup: ", error);
    },
  });

  return {
    isSuccess,
    isError,
    error,
    singupMutation,
  };
};
