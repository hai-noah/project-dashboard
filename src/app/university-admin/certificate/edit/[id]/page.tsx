import React from "react";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import CertificateEditForm from "@/components/Form/Certificate-form/Update";
import { certificateApi } from "@/api/certificateApi";

export const metadata: Metadata = {
  title: "Next.js Form Elements Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Form Elements page for NextAdmin Dashboard Kit",
};

async function viewCertificate(id:string) {
  try {
    const response = await certificateApi.viewCertificate(id);
    console.log('heyyy edit',response.data)

    // const Products = await response.json();
    return response.data;
  } catch (error:any) {
    // toast.error(error.message)
    console.log('error',error)
  }
}
const FormElementsPage = async ({params}:{params:{id:string}}) => {
  const response = await viewCertificate(params.id)
  const certificate= response?.data.certificate
  console.log(certificate)
  return (
    <DefaultLayout>
  
      <CertificateEditForm data={certificate} id={params.id}/>
    </DefaultLayout>
  );
};


export default FormElementsPage;
