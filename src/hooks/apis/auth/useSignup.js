import { signUpRequest } from "@/api/auth";
import { toast } from "@/components/ui/toast-manager";
import { useMutation } from "@tanstack/react-query";

export const useSignup = () => {
  const {
    isSuccess,
    isPending,
    error,
    mutateAsync: signupMutation,
  } = useMutation({
    mutationFn: signUpRequest,
    onSuccess: () => {
      toast.add({
        title: "Successfully Signed Up",
        description: "You will be redirected to the login page.",
        type: "success",
      });
    },
    onError: (error) => {
      toast.add({
        title: "Signup Failed",
        description:
          error?.response?.data?.message ||
          error?.message ||
          "An error occurred during signup.",
        type: "error",
      });
    },
  });

  return {
    isSuccess,
    isPending,
    error,
    signupMutation,
  };
};
