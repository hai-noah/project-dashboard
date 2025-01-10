import axios from "axios";

export const adminApi = {
  adminLogin: async function (body: any) {
    return await axios.post(
      "http://localhost:5000/api/dashboard/auth/login",
      body,
    );
  },
  universityAdminLogin: async function (body: any) {
    return await axios.post(
      "http://localhost:5000/api/dashboard/university-auth/login",
      body,
    );
  },
  PasswordUpdate: async function (body: any) {
    return await axios.post(
      "http://localhost:3010/api/dashboard/tables/updatePassword",
      body,
    );
  },
};
