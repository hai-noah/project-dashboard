import { axiosClient } from "./config/axiosConfig";

export const certificateApi = {
  createCertificate: async function (body: any) {
    return await axiosClient.post(
      "certificates/",
      body,
      {
        headers: {
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
          "Content-Type": "multipart/form-data",
        },
      },
    );
  },
  deleteCertificate: async function (certificateId: any, body: any) {
    return await axiosClient.put(
      `certificates/delete/${certificateId}`,
      body,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );
  },
  viewCertificate: async function (certificateId: any, body: any) {
    return await axiosClient.put(
      `certificates/view/${certificateId}`,
      body,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );
  },
  getAllCertificate: async function () {
    
    return await axiosClient.get(
      "certificates/getAll/",
    );
  },
};
