import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import { PackageNavigation } from "@/types/packageNavigation";
import VerificationTable from "@/components/Tables/Verification";
import { companyApi } from "@/api/companyApi";

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
    name:'univ ',
    link:'/tables/Verification'
  },
];

// async function getAllCompany() {
// try {
//   const response = await companyApi.getAllCompany();
 
//   return response.data;
// } catch (error:any) {
//   console.log(error)
//   // toast.error(error.message)
// }}

const verification = [{
  name:'hello'
}];

const TablesPage = async () => {

  // const response = await getAllCompany()
  // const univ = response?.data?.univ

   
  return (
    <DefaultLayout>
      <Breadcrumb pageName="univ" navigation={packageData}/>
      <div className="flex flex-col gap-10">
        <VerificationTable listOfVerification={verification}/>
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;
