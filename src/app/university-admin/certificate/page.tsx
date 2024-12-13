import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import { brandApi } from "@/api/brandApi";
import toast from "react-hot-toast";
import { PackageNavigation } from "@/types/packageNavigation";
import CertificateTable from "@/components/Tables/certificate";
import { Certificate } from "crypto";

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

async function getAllBrands() {
try {
  const response = await brandApi.getAllBrands();
  return response.data;
} catch (error:any) {
  // console.log(error)
  // toast.error(error.message)
}}

const TablesPage = async () => {
  // const response = await getAllBrands()
  // const brands = response.data.brands
  const certificates: any = [{
    certificateNumber:'A1',
    studentId:1,
    studentName:'Abu',
    collegeName:'Wiras',
    universityName:'kannur',

  }]
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
