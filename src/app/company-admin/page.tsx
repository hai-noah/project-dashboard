import React from "react";
import Form from "../_components/VerificationForm";
import { universityApi } from "@/api/universityApi";
async function getAllUniversity() {
  try {
    const response = await universityApi.getAllUniversity();
    return response.data;
  } catch (error: any) {
    console.log(error)
    // toast.error(error.message)
  }
}

export default async function CertificateVerification() {
  const response = await getAllUniversity()
  const universities = response?.data?.university
  // const [selectedOption, setSelectedOption] = useState<string>("");
  // const [isOptionSelected, setIsOptionSelected] = useState<boolean>(false);

  // const changeTextColor = () => {
  //   setIsOptionSelected(true);
  // };
  return (
    <>
      <Form universities={universities}/>
    </>

  );
}
