"use client";
import { Toaster } from "react-hot-toast";
export default function providers({ children }) {
  return (
    <>
      <Toaster />
      {children}
    </>
  );
}
