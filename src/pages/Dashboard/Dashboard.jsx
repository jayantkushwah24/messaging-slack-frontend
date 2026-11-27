import { Link } from "react-router";

const Dashboard = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4 text-center">
      <section className="w-full max-w-lg space-y-3 rounded-xl border bg-card p-8 text-card-foreground shadow-sm">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="text-muted-foreground">
          Your workspace dashboard will appear here.
        </p>
        <Link
          to="/auth/signin"
          className="inline-block text-sm text-primary underline-offset-4 hover:underline"
        >
          Return to sign in
        </Link>
      </section>
    </main>
  );
};

export default Dashboard;
