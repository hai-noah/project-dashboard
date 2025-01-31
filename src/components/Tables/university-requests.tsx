"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";
import Delete from "@/components/Confirmation/Delete";
import { universityApi } from "@/api/universityApi";

type Props = {
  listOfUniversity: [];
};

const UniversityTable = ({ listOfUniversity: listOfUniversity }: Props) => {
  console.log(listOfUniversity)
  const [searchTerm, setSearchTerm] = useState("");
  let [itemId, setItemId] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // const filteredBrands = listOfUniversity.filter((brandItem: any) =>
  //   brandItem.universityName.toLowerCase().includes(searchTerm.toLowerCase()),
  // );

  // const totalPages = Math.ceil(filteredBrands.length / itemsPerPage);
  // const brandData = filteredBrands.slice(
  //   (currentPage - 1) * itemsPerPage,
  //   currentPage * itemsPerPage,
  // );

  // const handlePageChange = (pageNumber: number) => {
  //   if (pageNumber >= 1 && pageNumber <= totalPages) {
  //     setCurrentPage(pageNumber);
  //   }
  // };

  const router = useRouter();
  // router.refresh();

  async function Approve(id:any) {
    try {
      const isApprove = 'Approve'
      const responseDelete = await universityApi.Approve(id);
      console.log("first", responseDelete.data.response);

      if (responseDelete.data.success == true) {
        toast.success(responseDelete.data.message);
        router.refresh();
      }
    } catch (error: any) {
      toast.error(error.response.data.message);
      console.log(error)
    }
  }
  async function Reject(id:any) {
    try {
      const isApprove = 'Reject'

      const responseDelete = await universityApi.Reject(id);
      console.log("first", responseDelete.data.response);

      if (responseDelete.data.success == true) {
        toast.success(responseDelete.data.message);
        router.refresh();
      }
    } catch (error: any) {
      toast.error(error.response.data.message);
      console.log(error)
    }
  }

  return (
    <>
      <div className="rounded-[10px] border border-stroke bg-white py-4 shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card sm:py-7.5">
        
            <div className="ml-7 flex justify-between">
              <div>
                <form className="mx-auto max-w-md">
                  <label
                    htmlFor="default-search"
                    className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Search
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                      <svg
                        className="h-4 w-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </div>
                    <input
                      type="search"
                      id="default-search"
                      className="block w-full rounded-lg border  border-gray-300 bg-gray-50 p-1 px-20 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      placeholder="Search University"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </form>
              </div> 
            </div>
            <div className="max-w-full overflow-x-auto">
              <table className="w-full ">
                <thead>
                  <tr className="bg-[#F7F9FC] text-left dark:bg-dark-2">
                    <th className="min-w-[150px] px-4 py-4 font-medium text-dark dark:text-white">
                      University Name
                    </th>
                    {/* <th className="min-w-[150px] px-4 py-4 font-medium text-dark dark:text-white">
                    Established Year
                    </th> */}
                    <th className="min-w-[150px] px-4 py-4 font-medium text-dark dark:text-white">
                      Country
                    </th>
                    {/* <th className="min-w-[150px] px-4 py-4 font-medium text-dark dark:text-white">
                      Status
                    </th> */}
                    
                  </tr>
                </thead>
                <tbody>
                  {listOfUniversity?.map((packageItem: any, index:number) => (
                    <tr key={index}>
                      <td
                        className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7.5 ${index === packageItem.length - 1 ? "border-b-0" : "border-b"}`}
                      >
                        <h6 className="text-dark dark:text-white">
                          {packageItem.universityName}
                        </h6>
                        {/* <p className="mt-[3px] text-body-sm font-medium">
                    ${packageItem.price}
                  </p> */}
                      </td>
                      {/* <td
                        className={`border-[#eee] px-4 py-4 dark:border-dark-3 ${index === packageItem.length - 1 ? "border-b-0" : "border-b"}`}
                      >
                        <p className="text-dark dark:text-white">
                          {packageItem.establishedYear}
                        </p>
                      </td> */}
                      <td
                        className={`border-[#eee] px-4 py-4 dark:border-dark-3 ${index === packageItem.length - 1 ? "border-b-0" : "border-b"}`}
                      >
                        <p className="text-dark dark:text-white">
                          {packageItem.country}
                        </p>
                      </td>
                      {/* <td
                        className={`border-[#eee] px-4 py-4 dark:border-dark-3 ${index === packageItem.length - 1 ? "border-b-0" : "border-b"}`}
                      >
                        <p className="text-dark dark:text-white">
                          {packageItem.status}
                        </p>
                      </td> */}
                      <td
                        className={`border-[#eee] px-4 py-4 dark:border-dark-3 ${index === packageItem.length - 1 ? "border-b-0" : "border-b"}`}
                      ></td>
                      <td
                        className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pr-7.5 ${index === packageItem.length - 1 ? "border-b-0" : "border-b"}`}
                      >
                        <div className="flex items-center justify-end space-x-3.5">
                          <button
                            className="hover:text-primary"
                            onClick={()=>(Approve(packageItem._id))}
                          >
                            Approve
                          </button>
                          <button
                            className="hover:text-primary"
                            onClick={()=>(Reject(packageItem._id))}
                          >
                            Reject
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* {brandData.length == 5 ? ( */}
            <div className="mt-4 flex items-center justify-between">
              {/* <button
                className="ml-7 rounded bg-black px-3 pb-1 font-semibold text-white disabled:opacity-50 dark:bg-white dark:text-black"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                &laquo;
              </button> */}

              {/* <span>
                Page {currentPage} of {10}
              </span> */}

              {/* <button
                className="mr-7 rounded bg-black px-3 pb-1 font-semibold text-white disabled:opacity-50 dark:bg-white dark:text-black"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                &raquo;
              </button> */}
         </div>
      </div>
    </>
  );
};

export default UniversityTable;  
