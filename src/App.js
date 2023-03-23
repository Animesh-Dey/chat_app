import React, { useEffect, useLayoutEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChatHome from "./Pages/ChatHome";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import { useDispatch } from "react-redux";
import { setIsAuthenticated } from "./Reducers/UserSlice";
import Routings from "./Routes";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchLocalData();
  }, []);
  const fetchLocalData = async () => {
    const storedData = await localStorage.getItem("ISAUTHENTICATED");
    if (storedData !== null) {
      dispatch(setIsAuthenticated(storedData));
    }
  };
  return <Routings />;
};

export default App;
