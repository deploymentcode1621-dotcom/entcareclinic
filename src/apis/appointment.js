import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/appointment",
});

export const bookAppointment = async (formData) => {
  try {
    const { data } = await API.post("/book", {
      name: formData.name,
      age: formData.age,
      sex: formData.sex,
      phone: formData.phone,
      date: formData.date,
      service: formData.service,
    });

    return data;
  } catch (error) {
    console.error("API Error:", error.response?.data);
    throw error;
  }
};
