import { axiosClient } from "./config/axiosConfig";

export const certificateApi = {
  
  createCertificate: async function (body: any) {
    return await axiosClient.post(
      "certificates/",
      body,
      {
        headers: {
          "Authorization": "bearer " + window.localStorage.accessToken,
          "Content-Type": "multipart/form-data",
        },
      },
    );
  },
  updateCertificate: async function (certificateId: any, body: any) {
    return await axiosClient.put(
      `certificates/update/${certificateId}`,
      body,
      {
        headers: {
          "Authorization": "bearer" + window.localStorage.accessToken,

          "Content-Type": "multipart/form-data",
        },
      },
    );
  },
  deleteCertificate: async function (certificateId: any) {
    return await axiosClient.put(
      `certificates/delete/${certificateId}`,
    
      
      
    );
  },
  viewCertificate: async function (certificateId: string) {
    return await axiosClient.get(
      `certificates/view/${certificateId}`,
    );
  },
  getAllCertificate: async function () {
    
    return await axiosClient.get(
      "certificates/all/",
    );
  },
};
