import { Route, Routes } from "react-router";
import { SignupContainer } from "@/components/organisms/Auth/SignUpContainer";
import NotFound from "@/pages/Not found/NotFound";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toast";
import { SigninContainer } from "./components/organisms/Auth/SignInContainer";
import { Auth } from "@/pages/Auth/Auth";
import Dashboard from "@/pages/Dashboard/Dashboard";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route
          path="/auth/signin"
          element={
            <Auth>
              <SigninContainer />
            </Auth>
          }
        />
        <Route
          path="/auth/signup"
          element={
            <Auth>
              <SignupContainer />
            </Auth>
          }
        />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </QueryClientProvider>
  );
};

export default App;
