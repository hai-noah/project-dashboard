'use client'
import { useEffect, useState } from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import { PackageNavigation } from "@/types/packageNavigation";
import CertificateTable from "@/components/Tables/Certificate";
import { certificateApi } from "@/api/certificateApi";

const packageData: PackageNavigation[] = [
  {
    name: 'Dashboard / ',
    link: '/'
  },
  {
    name: 'Certificates ',
    link: '/tables/certificate'
  },
];

const TablesPage = () => {
  const [certificates, setCertificates] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const response = await certificateApi.getAllCertificate();
        console.log(response.data)
        setCertificates(response?.data?.data?.certificate || []);
      } catch (err: any) {
        setError("Failed to fetch certificates.");
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCertificates();
  }, []);
  console.log(certificates)
  return (

    <DefaultLayout>
      <Breadcrumb pageName="Certificates" navigation={packageData} />
      <div className="flex flex-col gap-10">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          <CertificateTable listOfCertificate={certificates} />
        )}
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;
