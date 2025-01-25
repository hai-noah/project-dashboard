import { axiosClient } from "./config/axiosConfig";

export const universityApi = {
  createUniversity: async function (body: any) {
    return await axiosClient.post(
      "universities/create",
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
  deleteUniversity: async function (universityId: any) {
    return await axiosClient.delete(
      `universities/delete/${universityId}`,

    );
  },
  Approve: async function (universityId: any) {
    return await axiosClient.post(
      `universities/approve/${universityId}`

    );
  },
  Reject: async function (universityId: any) {
    return await axiosClient.post(
      `universities/reject/${universityId}`

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
  getAllRequest: async function () {

    return await axiosClient.get(
      "universities/requests/",
    );
  },
};
