import React from "react";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import CompanyEditForm from "@/components/Form/Company-form/Update";
import { companyApi } from "@/api/companyApi";

export const metadata: Metadata = {
  title: "Next.js Form Elements Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Form Elements page for NextAdmin Dashboard Kit",
};

async function viewCompany(id:string) {
  try {
    const response = await companyApi.viewCompany(id);

    // const Products = await response.json();
    return response.data;
  } catch (error:any) {
    // toast.error(error.message)
    console.log(error)
  }
}

const FormElementsPage = async ({params}:{params:{id:string}}) => {
  const response = await viewCompany(params.id)
  const company= response?.data?.company
  return (
    <DefaultLayout>
      <CompanyEditForm  data={company} id={params.id}/>
    </DefaultLayout>
  );
};


export default FormElementsPage;
