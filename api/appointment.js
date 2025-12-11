// import nodemailer from "nodemailer";

// export default async function handler(req, res) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ message: "Only POST allowed" });
//   }

//   try {
//     const { name, age, sex, phone, date, service } = req.body;

//     if (!name || !phone || !date || !service) {
//       return res.status(400).json({ message: "Please fill all required fields" });
//     }

//     // Email Transporter (Gmail)
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     // Email Content
//     await transporter.sendMail({
//       from: process.env.EMAIL_USER,
//       to: process.env.EMAIL_USER, // send to yourself
//       subject: "New Appointment Booking",
//       html: `
//         <h2>New Appointment Details</h2>
//         <p><b>Name:</b> ${name}</p>
//         <p><b>Age:</b> ${age}</p>
//         <p><b>Sex:</b> ${sex}</p>
//         <p><b>Phone:</b> ${phone}</p>
//         <p><b>Date:</b> ${date}</p>
//         <p><b>Service:</b> ${service}</p>
//       `,
//     });

//     return res.status(200).json({
//       success: true,
//       message: "Appointment email sent successfully!",
//     });

//   } catch (error) {
//     console.error("Email error:", error.message);
//     return res.status(500).json({
//       success: false,
//       message: "Email sending failed",
//       error: error.message,
//     });
//   }
// }
import nodemailer from "nodemailer";
import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST allowed" });
  }

  try {
    const { name, age, sex, phone, date, service } = req.body;

    if (!name || !phone || !date || !service) {
      return res.status(400).json({ message: "Please fill all required fields" });
    }

    // 1️⃣ Email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Appointment Booking",
      html: `
        <h2>New Appointment Details</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Age:</b> ${age}</p>
        <p><b>Sex:</b> ${sex}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Date:</b> ${date}</p>
        <p><b>Service:</b> ${service}</p>
      `,
    });

    // 2️⃣ SMS
    await axios.get("https://bhashsms.com/api/sendmsg.php", {
      params: {
        user: process.env.SMS_USER,
        pass: process.env.SMS_PASS,
        sender: process.env.SMS_SENDER,
        phone,
        text: `Dear ${name}, your appointment is booked for ${date} - ${service}.`,
        priority: "ndnd",
        stype: "normal",
      },
    });

    // 3️⃣ WhatsApp Free Click-to-Chat
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(
      `Hello ${name}, your appointment for ${service} on ${date} is confirmed.`
    )}`;

    return res.status(200).json({
      success: true,
      message: "Email, SMS & WhatsApp Link Sent!",
      whatsapp: whatsappURL,
    });
  } catch (error) {
    console.error("API Error:", error.message);
    return res.status(500).json({
      success: false,
      message: "Failed to send email/SMS/WhatsApp",
      error: error.message,
    });
  }
}
