import React from "react";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import toast from "react-hot-toast";
import UniversityEditForm from "@/components/Form/University-form/Update";
import { universityApi } from "@/api/universityApi";

export const metadata: Metadata = {
  title: "Next.js Form Elements Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Form Elements page for NextAdmin Dashboard Kit",
};

// async function viewUniversity(id:string) {
//   try {
//     const response = await universityApi.viewUniversity(id);
//     // const Products = await response.json();
//     return response.data;
//   } catch (error:any) {
//     toast.error(error.message)
//     console.log(error)

//   }
// }

const FormElementsPage = async ({params}:{params:{id:string}}) => {
  // const response = await getBrand(params.id)
  const brand = {}
  return (
    <DefaultLayout>
      <UniversityEditForm/>
    </DefaultLayout>
  );
};


export default FormElementsPage;
