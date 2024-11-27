import React, { useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/contexts/AuthContext";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const router = useRouter();

  const handleRegister = () => {
    if(username.length==0){
      alert("Username required")
      return
    }
    if(password.length==0){
      alert("Passworrd required")
      return
    }
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.some((user) => user.username === username)) {
      alert("User already exists!");
      return;
    }
    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration successful!");
  };

  const handleLogin = () => {
    if(username.length==0){
      alert("Username required")
      return
    }
    if(password.length==0){
      alert("Passwprrd required")
      return
    }
    const users = JSON?.parse(localStorage.getItem("users") || "[]");
    if (username === "admin" && password === "admin") {
      login("admin");
      router.push("/admin");
    } else if (
      users.some((user) => user.username === username && user.password === password)
    ) {
      login(username);
      router.push("/dashboard");
    } else {
      alert("Invalid credentials, Kindly Register first😊");
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 p-8 sm:p-12 bg-white rounded-xl shadow-lg w-full max-w-sm">
      <h1 className="text-3xl font-bold text-gray-800 tracking-tight">Welcome Back</h1>
      <p className="text-sm text-gray-500 text-center">
        Login or Register to access your dashboard.
      </p>
      <input
        type="text"
        placeholder="Username"
        required
        className="w-full p-3 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        required
        className="w-full p-3 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="w-full text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white py-2 rounded-lg font-semibold transition"
        onClick={handleLogin}
      >
        Login
      </button>
      <button
        className="w-full bg-gray-100 border border-gray-100 hover:bg-gray-200 text-gray-400 hover:text-gray-600 py-2 rounded-lg font-semibold transition"
        onClick={handleRegister}
      >
        Register
      </button>
    </div>
  );
};

export default LoginPage;
