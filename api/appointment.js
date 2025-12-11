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
import axios from "axios";
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST allowed" });
  }

  const { name, age, sex, phone, date, service } = req.body;

  if (!name || !phone || !date || !service) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    // --------------------------------------------
    // 1️⃣ SEND EMAIL TO ADMIN
    // --------------------------------------------
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.ADMIN_EMAIL,
        pass: process.env.ADMIN_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.ADMIN_EMAIL,
      to: process.env.ADMIN_EMAIL,
      subject: "New Appointment Booked",
      html: `
        <h2>New Appointment</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Age:</b> ${age}</p>
        <p><b>Sex:</b> ${sex}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Date:</b> ${date}</p>
        <p><b>Service:</b> ${service}</p>
      `,
    });

    // --------------------------------------------
    // 2️⃣ SEND SMS TO ADMIN
    // --------------------------------------------
    const adminText = `New Appointment: ${name}, ${phone}, ${service}, ${date}`;

    await axios.get("https://bhashsms.com/api/sendmsg.php", {
      params: {
        user: process.env.SMS_USER,
        pass: process.env.SMS_PASS,
        sender: process.env.SMS_SENDER,
        phone: process.env.ADMIN_PHONE,
        text: adminText,
        priority: "ndnd",
        stype: "normal",
      },
    });

    // --------------------------------------------
    // 3️⃣ SEND AUTO-SMS TO PATIENT
    // --------------------------------------------
    const patientText =
      "Your appointment is booked successfully. Our executive will contact you soon.";

    await axios.get("https://bhashsms.com/api/sendmsg.php", {
      params: {
        user: process.env.SMS_USER,
        pass: process.env.SMS_PASS,
        sender: process.env.SMS_SENDER,
        phone,
        text: patientText,
        priority: "ndnd",
        stype: "normal",
      },
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("API Error:", err.message);
    return res.status(500).json({
      success: false,
      message: "Failed to send Email/SMS",
    });
  }
}
