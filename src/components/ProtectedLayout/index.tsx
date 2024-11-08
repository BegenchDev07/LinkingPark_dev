import { Outlet, Navigate } from "react-router-dom";
import { pb } from "lib/pocketbase";
// import { useEffect } from "react";

export default function ProtectedLayout() {


  // need to check with the server
  // const isAuthenticated = localStorage.getItem("user");
  return (pb.authStore.model ? <Outlet /> : <Navigate to="/login" />);
  // pb.authStore.token
};

