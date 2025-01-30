import React from "react";
import { Metadata } from "next";
// import DefaultLayout from "@/components/Layouts/DefaultLaout";
import CompanyAddForm from "@/components/company-register";

export const metadata: Metadata = {
  title: "Next.js Form Elements Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Form Elements page for NextAdmin Dashboard Kit",
};

const FormElementsPage = () => {
  return (
  
      <CompanyAddForm />
 
  );
};

export default FormElementsPage;
