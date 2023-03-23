import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Signin from "../Pages/Signin";
import Signup from "../Pages/Signup";
import ChatHome from "../Pages/ChatHome";
import { useSelector } from "react-redux";
import NotFound from "../Pages/NotFound";

const Routings = () => {
  const isAuthenticated = useSelector(
    (state) => state?.UserAuth?.isAuthenticated
  );
  return (
    <BrowserRouter>
      <Routes>
        {!isAuthenticated && <Route path="/" element={<Signin />} />}
        {!isAuthenticated && <Route path="/Signup" element={<Signup />} />}
        {isAuthenticated && (
          <Route path="/chat-home/:receiverId" element={<ChatHome />} />
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routings;
