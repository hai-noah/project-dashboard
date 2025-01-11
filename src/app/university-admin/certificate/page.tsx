import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import { PackageNavigation } from "@/types/packageNavigation";
import CertificateTable from "@/components/Tables/Certificate";
import { certificateApi } from "@/api/certificateApi";

export const metadata: Metadata = {
  title: "Next.js Tables Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Tables page for NextAdmin Dashboard Kit",
};

const packageData: PackageNavigation[] = [
  {
    name:'Dashboard / ',
    link:'/'
  },
  {
    name:'Certificates ',
    link:'/tables/certificate'
  },
];

async function getAllCertificate() {
try {
  const response = await certificateApi.getAllCertificate();
  return response.data;
} catch (error:any) {
  console.log(error)
  // toast.error(error.message)
}}


// const certificates = [{
//   name:'hello'
// }];

const TablesPage = async () => {

  const response = await getAllCertificate()
  const certificates = response.data.certificate

  
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Certificates" navigation={packageData}/>
      <div className="flex flex-col gap-10">
        <CertificateTable listOfCertificate={certificates}/>
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;
