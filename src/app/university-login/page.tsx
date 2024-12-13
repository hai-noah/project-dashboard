

import UniversityLoginPage from "@/components/UniversityLoginPage";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Next.js Settings Page | NextAdmin - Next.js Dashboard c",
  description: "This is Next.js Settings page for NextAdmin Dashboard Kit",
};

const Login = () => {
  return (
    <>
    <UniversityLoginPage/>
    </>
  );
};

export default Login;