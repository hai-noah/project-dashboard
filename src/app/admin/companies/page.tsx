import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import { brandApi } from "@/api/brandApi";
import toast from "react-hot-toast";
import { PackageNavigation } from "@/types/packageNavigation";
import CompanyTable from "@/components/Tables/Company";
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
    link:'/tables/company'
  },
];

async function getAllCompany() {
try {
  const response = await companyApi.getAllCompany();
  return response.data;
} catch (error:any) {
  // console.log(error)
  // toast.error(error.message)
}}

const TablesPage = async () => {
  // const response = await getAllBrands()
  // const brands = response.data.brands
  const companies: any = [{
    _id:1,
    companyName:'com1',
    year:'2002',
    country:'india',
    status:'active',

  }]
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
