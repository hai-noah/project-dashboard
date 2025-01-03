import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import BrandTable from "@/components/Tables/Brand";
import { brandApi } from "@/api/brandApi";
import toast from "react-hot-toast";
import { PackageNavigation } from "@/types/packageNavigation";
import UniversityTable from "@/components/Tables/university";
import { universityApi } from "@/api/universityApi";

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
    name:'Universities ',
    link:'/universities'
  },
];

async function getAllUniversity() {
try {
  const response = await universityApi.getAllUniversity();
  console.log('heyyy',response.data)
  return response.data;
} catch (error:any) {
  console.log(error)
  // toast.error(error.message)
}}

const TablesPage = async () => {

  const response = await getAllUniversity()
  const universities = response?.data?.university




  return (
    <DefaultLayout>
      <Breadcrumb pageName="Universities" navigation={packageData}/>
      <div className="flex flex-col gap-10">
        <UniversityTable listOfUniversity={universities}/>
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;
