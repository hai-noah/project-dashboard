import { axiosClient } from "./config/axiosConfig";

export const universityApi = {
  createUniversity: async function (body: any) {
    console.log(body)
    return await axiosClient.post(
      "universities/",
      body
    //   {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //   },
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
  deleteUniversity: async function (universityId: any) {
    return await axiosClient.delete(
      `universities/delete/${universityId}`,
   
    );
  },
  viewUniversity: async function (universityId: any) {
    return await axiosClient.get(
      `universities/view/${universityId}`,

    );
  },
  getAllUniversity: async function () {
    
    return await axiosClient.get(
      "universities/all/",
    );
  },
};
