import React from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/contexts/AuthContext";
import withAuth from "@/hoc/authRoute";
import UserDashboard from "@/components/charts/UserDashboard";
const Dashboard = () => {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full sm:w-96 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome, {user}!</h1>
        <p className="text-gray-600 mb-6 text-center">
          You're now logged in. Explore your dashboard or log out.
        </p>
        <button
          className="bg-red-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-red-600 transition duration-300"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default withAuth(Dashboard);
