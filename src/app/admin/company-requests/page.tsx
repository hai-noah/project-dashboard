import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import { brandApi } from "@/api/brandApi";
import toast from "react-hot-toast";
import { PackageNavigation } from "@/types/packageNavigation";
import CompanyTable from "@/components/Tables/company-requests";
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
    name:'Companies ',
    link:'/admin/companies'
  },
];

async function getAllCompany() {
try {
  const response = await companyApi.getAllRequest();
 
  return response.data;
} catch (error:any) {
  console.log(error)
  // toast.error(error.message)
}}
const TablesPage = async () => {

  const response = await getAllCompany()
  const companies = response?.data?.company


  
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Companies" navigation={packageData}/>
      <div className="flex flex-col gap-10">
        <CompanyTable listOfCompany={companies}/>
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;
