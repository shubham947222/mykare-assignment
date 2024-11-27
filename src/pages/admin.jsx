import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/contexts/AuthContext";
import withAuth from "@/hoc/authRoute";

const AdminDashboard = () => {
  const { logout } = useAuth();
  const router = useRouter();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const registeredUsers = JSON.parse(localStorage.getItem("users") || "[]");
    setUsers(registeredUsers);
  }, []);

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="w-full p-4 flex justify-end bg-white shadow-md">
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-red-600 transition"
          onClick={handleLogout}
        >
          Logout
        </button>
      </header>

      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Dashboard</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {users?.map((user, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-gray-800">{user.username}</h2>
              <p className="text-gray-500 text-sm mt-1">
                User ID: {index + 1}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default withAuth(AdminDashboard);
