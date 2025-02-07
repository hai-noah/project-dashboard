'use client'
import { companyApi } from '@/api/companyApi';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const Form = ({ universities }: { universities: any }) => {
    const [selectedOption, setSelectedOption] = useState<string>("");
    const [isOptionSelected, setIsOptionSelected] = useState<boolean>(false);
    const [certificateNumber, setCertificateNumber] = useState<string>("");

    const changeTextColor = () => {
        setIsOptionSelected(true);
    };
    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const data = { selectedOption, certificateNumber }

        try {

            const response = await companyApi.certificateVerify(data);
            if (response.data.success == true) {     
                toast.success(response.data.message);
                router.push(`/company-admin/certificate/${response.data.data.certificateId}`);           
            } else if (response.data.success == false) {
                toast.error(response.data.message);
            }

        } catch (error: any) {
            console.log('error', error)
            toast.error(error.response.data.message)
        }

    };

    return (
        <div className="px-[20rem]">
            <div className="rounded-[10px] py-[3rem] border border-stroke bg-white shadow-5 dark:border-dark-10 dark:bg-gray-dark dark:shadow-card">
                <div className="border-b border-stroke px-6.5 py-4 dark:border-dark-1">
                    <center><big className="font-medium text-dark dark:text-white">Verify Certificates</big></center>
                </div>
                <form onSubmit={handleSubmit}>
                    <center>
                        <div>
                            <label className="pt-[2rem] mb-3 block text-body-sm font-medium text-dark dark:text-white">
                                Select University
                            </label>

                            <div className="relative z-20 rounded-[20px]  mx-[15.5rem]  bg-white dark:bg-dark-2">
                                <span className="absolute  left-2 shrink-0 centre-10 top-1/2 z-30 -translate-y-1/2">
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clipPath="url(#clip0_1680_14985)">
                                            <path
                                                d="M9.99935 18.3334C5.39697 18.3334 1.66602 14.6024 1.66602 10.0001C1.66602 5.39771 5.39697 1.66675 9.99935 1.66675C14.6017 1.66675 18.3327 5.39771 18.3327 10.0001C18.3327 14.6024 14.6017 18.3334 9.99935 18.3334ZM8.09103 16.3896C7.28887 14.6883 6.79712 12.8119 6.68877 10.8334H3.38426C3.71435 13.4805 5.59634 15.6457 8.09103 16.3896ZM8.35827 10.8334C8.4836 12.8657 9.06418 14.7748 9.99935 16.4601C10.9345 14.7748 11.5151 12.8657 11.6404 10.8334H8.35827ZM16.6144 10.8334H13.3099C13.2016 12.8119 12.7098 14.6883 11.9077 16.3896C14.4023 15.6457 16.2844 13.4805 16.6144 10.8334ZM3.38426 9.16675H6.68877C6.79712 7.18822 7.28887 5.31181 8.09103 3.61055C5.59634 4.35452 3.71435 6.51966 3.38426 9.16675ZM8.35827 9.16675H11.6404C11.5151 7.13443 10.9345 5.22529 9.99935 3.54007C9.06418 5.22529 8.4836 7.13443 8.35827 9.16675ZM11.9077 3.61055C12.7098 5.31181 13.2016 7.18822 13.3099 9.16675H16.6144C16.2844 6.51966 14.4023 4.35452 11.9077 3.61055Z"
                                                fill="#6B7280"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1680_14985">
                                                <rect width="20" height="20" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </span>

                                <select
                                    value={selectedOption}
                                    onChange={(e) => {
                                        setSelectedOption(e.target.value);
                                        changeTextColor();
                                    }}
                                    className={`relative z-5 w-full px-5 appearance-none text-center rounded-[7px] border border-stroke bg-transparent px-11.5 py-3 outline-none transition focus:border-primary active:border-primary dark:border-dark-3 dark:bg-dark-2 ${isOptionSelected ? "text-dark dark:text-white" : ""}`}
                                >
                                    {universities.map((university: any, index: any) => (
                                        <option value={university._id} className="text-dark-5 dark:text-dark-6" key={index}>
                                            {university.universityName}
                                        </option>
                                    ))}
                                </select>

                                <span className="absolute right-2 shrink-0 centre-10 top-1/2 z-30 -translate-y-1/2 text-dark-4 dark:text-dark-6">
                                    <svg
                                        className="fill-current"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M3.69149 7.09327C3.91613 6.83119 4.31069 6.80084 4.57277 7.02548L9.99936 11.6768L15.4259 7.02548C15.688 6.80084 16.0826 6.83119 16.3072 7.09327C16.5319 7.35535 16.5015 7.74991 16.2394 7.97455L10.4061 12.9745C10.172 13.1752 9.82667 13.1752 9.59261 12.9745L3.75928 7.97455C3.4972 7.74991 3.46685 7.35535 3.69149 7.09327Z"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>

                        <div className="py-[2rem]">
                            <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
                                Certificate number
                            </label>
                            <input
                                type="text"
                                placeholder="Certificate number"
                                className="w-center rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                                value={certificateNumber}
                                onChange={(e) => setCertificateNumber(e.target.value)}  // Store certificate number in state
                            />
                        </div>

                        <button
                            className="h-8 w-[10%] items-start rounded-lg bg-black text-white dark:bg-white dark:text-black"
                            type="submit"
                        >
                            Submit
                        </button>
                    </center>
                </form>
            </div>
        </div>
    )
}

export default Form;
