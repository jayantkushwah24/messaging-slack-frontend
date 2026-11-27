import { signInRequest } from "@/api/auth";
import { toast } from "@/components/ui/toast-manager";
import { useMutation } from "@tanstack/react-query";

export const useSignin = () => {
  const {
    isSuccess,
    isPending,
    error,
    mutateAsync: signinMutation,
  } = useMutation({
    mutationFn: signInRequest,
    onSuccess: () => {
      toast.add({
        title: "Successfully Signed In",
        description: "You have been signed in successfully.",
        type: "success",
      });
    },
    onError: (error) => {
      toast.add({
        title: "Signin Failed",
        description:
          error?.response?.data?.message ||
          error?.message ||
          "An error occurred during signin.",
        type: "error",
      });
    },
  });

  return {
    isSuccess,
    isPending,
    error,
    signinMutation,
  };
};
