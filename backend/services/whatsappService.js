import axios from "axios";

const sendWhatsAppMessage = async (phone, message) => {
  try {
    const response = await axios.post(
      "https://api.fonnte.com/send",
      {
        target: phone,
        message: message,
      },
      {
        headers: {
          Authorization: process.env.FONNTE_API_KEY,
        },
      }
    );

    console.log("WhatsApp sent:", response.data);
    return response.data;
  } catch (error) {
    console.error("WhatsApp Error:", error.response?.data || error);
    throw new Error("Failed to send WhatsApp message");
  }
};

export default sendWhatsAppMessage;
