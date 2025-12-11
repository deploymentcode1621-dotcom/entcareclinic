// import axios from "axios";

// // Auto-detect environment
// const API = axios.create({
//   baseURL:
//     import.meta.env.MODE === "development"
//       ? "http://localhost:3000/api/appointment" // Vercel local dev
//       : "https://www.drswatientcare.in/api/appointment" // Live domain
// });

// // Book Appointment
// export const bookAppointment = async (formData) => {
//   try {
//     const { data } = await API.post("", {
//       name: formData.name,
//       age: formData.age,
//       sex: formData.sex,
//       phone: formData.phone,
//       date: formData.date,
//       service: formData.service,
//     });

//     return data;
//   } catch (error) {
//     console.error("API Error:", error.response?.data || error.message);
//     throw error;
//   }
// };
import axios from "axios";

const API = axios.create({
  baseURL: "https://www.drswatientcare.in/api/appointment"
});

// Book Appointment
export const bookAppointment = async (formData) => {
  try {
    const { data } = await API.post("", formData);
    return data;
  } catch (error) {
    console.error("API Error:", error.response?.data || error.message);
    throw error;
  }
};
