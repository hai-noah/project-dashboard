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
  certificateVerify: async function (body: any) {
    return await axiosClient.post(
      "companies/certificate-validating",
      body
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
  Approve: async function (companyId: any) {
    return await axiosClient.post(
      `companies/approve/${companyId}`

    );
  },
  Reject: async function (companyId: any) {
    return await axiosClient.post(
      `companies/reject/${companyId}`

    );
  },
  deleteCompany: async function (companyId: any) {
    return await axiosClient.delete(
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
  getAllRequest: async function () {

    return await axiosClient.get(
      "companies/requests/",
    );
  },
};
