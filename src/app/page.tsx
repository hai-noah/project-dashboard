import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import React from "react";
import HomePage from "./_components/home";

export const metadata: Metadata = {
  title:
    "Certify",
  description: "This is Next.js Home page for NextAdmin Dashboard Kit",
};

export default function Home() {
  // const [selectedOption, setSelectedOption] = useState<string>("");
  // const [isOptionSelected, setIsOptionSelected] = useState<boolean>(false);

  // const changeTextColor = () => {
  //   setIsOptionSelected(true);
  // };
  return (
    <>
      <div className="h-[100vh] w-[100vw]">
        <HomePage />
      </div>
    </>

  );
}
