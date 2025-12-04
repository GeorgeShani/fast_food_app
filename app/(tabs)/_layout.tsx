import React from "react";
import { Redirect, Slot } from "expo-router";

export default function HomeLayout() {
  const isAuthenticated = true;

  if (!isAuthenticated) {
    return <Redirect href="/sign-in" />;
  }

  return <Slot />;
}
