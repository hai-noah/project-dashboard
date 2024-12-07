import { axiosClient } from "./config/axiosConfig";

export const universityApi = {
  createUniversity: async function (body: any) {
    return await axiosClient.post(
      "universities/",
      body,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );
  },
  updateUniversity: async function (universityId: any, body: any) {
    return await axiosClient.put(
      `universities/update/${universityId}`,
      body,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );
  },
  deleteUniversity: async function (universityId: any, body: any) {
    return await axiosClient.put(
      `universities/delete/${universityId}`,
      body,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );
  },
  viewUniversity: async function (universityId: any, body: any) {
    return await axiosClient.put(
      `universities/view/${universityId}`,
      body,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );
  },
  getAllUniversity: async function () {
    
    return await axiosClient.get(
      "universities/getAll/",
    );
  },
};
