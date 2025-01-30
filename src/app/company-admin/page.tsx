import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import React from "react";
import Form from "../_components/VerificationForm";

// export const metadata: Metadata = {
//   title:
//     "Certify",
//   description: "This is Next.js Home page for NextAdmin Dashboard Kit",
// };

export default function Home() {
  // const [selectedOption, setSelectedOption] = useState<string>("");
  // const [isOptionSelected, setIsOptionSelected] = useState<boolean>(false);

  // const changeTextColor = () => {
  //   setIsOptionSelected(true);
  // };
  return (
    <div className="px-[20rem]">
      <div className="rounded-[10px] py-[3rem] border border-stroke bg-white shadow-5 dark:border-dark-10 dark:bg-gray-dark dark:shadow-card">
        <div className="border-b border-stroke px-6.5 py-4 dark:border-dark-1">
         <center><big className="font-medium text-dark dark:text-white">Verify Certificates</big></center> 
        </div>
       
        <Form/>
      </div>
    </div>


  );
}
