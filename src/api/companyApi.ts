import { axiosClient } from "./config/axiosConfig";

export const companyApi = {
  createCompany: async function (body: any) {
    return await axiosClient.post(
      "companies/",
      body,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );
  },
  updateCompany: async function (companyId: any, body: any) {
    return await axiosClient.put(
      `companies/update/${companyId}`,
      body,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );
  },
  deleteCompany: async function (companyId: any) {
    return await axiosClient.get(
      `companies/delete/${companyId}`,
     
    );
  },
  viewCompany: async function (companyId: any) {
    return await axiosClient.get(
      `companies/view/${companyId}`,
    
     
    );
  },
  getAllCompany: async function () {
    
    return await axiosClient.get(
      "companies/all/",
    );
  },
};
