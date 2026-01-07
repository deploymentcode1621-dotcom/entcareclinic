
// import axios from "axios";
// import nodemailer from "nodemailer";

// export default async function handler(req, res) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ message: "Only POST allowed" });
//   }

//   const { name, age, sex, phone, date, service } = req.body;

//   if (!name || !phone || !date || !service) {
//     return res.status(400).json({ message: "Missing required fields" });
//   }

//   try {
//     // Generate Visit ID
//     const visitId = "ENT" + Math.floor(100000 + Math.random() * 900000);

//     // -----------------------------------------------------
//     // 1️⃣ EMAIL TO ADMIN
//     // -----------------------------------------------------
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.ADMIN_EMAIL,
//         pass: process.env.ADMIN_PASS,
//       },
//     });

//     await transporter.sendMail({
//       from: process.env.ADMIN_EMAIL,
//       to: process.env.ADMIN_EMAIL,
//       subject: "New Appointment Booked",
//       html: `
//         <h2>New Appointment</h2>
//         <p><b>Name:</b> ${name}</p>
//         <p><b>Age:</b> ${age}</p>
//         <p><b>Sex:</b> ${sex}</p>
//         <p><b>Phone:</b> ${phone}</p>
//         <p><b>Date:</b> ${date}</p>
//         <p><b>Service:</b> ${service}</p>
//         <p><b>Visit ID:</b> ${visitId}</p>
        
//       `,
//     });

//     // -----------------------------------------------------
//     // 2️⃣ WHATSAPP MESSAGE TO ADMIN
//     // -----------------------------------------------------
//     await axios.get("http://bhashsms.com/api/sendmsg.php", {
//       params: {
//         user: process.env.SMS_USER,
//         pass: process.env.SMS_PASS,
//         sender: process.env.SMS_SENDER,
//         phone: process.env.ADMIN_PHONE,
//         text: `New Appointment: ${name}, ${phone}, ${service}, ${date}`,
//         priority: "wa",
//         stype: "normal",
//       },
//     });


//     // -----------------------------------------------------
//     // 3️⃣ WHATSAPP TEMPLATE MESSAGE TO PATIENT
//     // Template: entcare_9
//     // Params order: 11 = name , 22 = ENT Care Clinic , 33 = visitId
//     // -----------------------------------------------------
//     await axios.get("http://bhashsms.com/api/sendmsgutil.php", {
//       params: {
//         user: process.env.SMS_USER,
//         pass: process.env.SMS_PASS,
//         sender: process.env.SMS_SENDER,
//         phone,
//         text: "entcare_9",
//         priority: "wa",
//         stype: "normal",
//         Params: `${name},ENT Care Clinic,${visitId}`,
//       },
//     });

//     return res.status(200).json({
//       success: true,
//       visitId,
//       message: "Appointment booked successfully",
//     });
//   } catch (err) {
//     console.error("API Error:", err.message);
//     return res.status(500).json({
//       success: false,
//       message: "Failed to send Email/WhatsApp",
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
    return res.status(400).json({
      success: false,
      message: "Missing required fields",
    });
  }

  try {
    // Generate Visit ID
    const visitId = "ENT" + Math.floor(100000 + Math.random() * 900000);

    // -----------------------------------------------------
    // 1️⃣ EMAIL TO ADMIN
    // -----------------------------------------------------
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
      subject: "New Appointment Request",
      html: `
        <h3>New Appointment Request</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Date:</b> ${date}</p>
        <p><b>Service:</b> ${service}</p>
        <p><b>Age:</b> ${age || "N/A"}</p>
        <p><b>Sex:</b> ${sex || "N/A"}</p>
        <p><b>Visit ID:</b> ${visitId}</p>
      `,
    });

    // -----------------------------------------------------
    // 2️⃣ WHATSAPP MESSAGE TO ADMIN (plain text)
    // -----------------------------------------------------
    await axios.get("http://bhashsms.com/api/sendmsg.php", {
      params: {
        user: process.env.SMS_USER,
        pass: process.env.SMS_PASS,
        sender: process.env.SMS_SENDER,
        phone: process.env.ADMIN_PHONE,
        text: `New Appointment: ${name}, ${phone}, ${service}, ${date}`,
        priority: "wa",
        stype: "normal",
      },
    });

    // -----------------------------------------------------
    // 3️⃣ WHATSAPP TEMPLATE MESSAGE TO PATIENT
    // Template: ent_care_appointment_update
    // Params order:
    // {{1}} name
    // {{2}} doctor
    // {{3}} date
    // {{4}} service
    // -----------------------------------------------------
    await axios.get("http://bhashsms.com/api/sendmsgutil.php", {
      params: {
        user: process.env.SMS_USER,
        pass: process.env.SMS_PASS,
        sender: process.env.SMS_SENDER,
        phone: phone, // 91XXXXXXXXXX
        text: "ent_care_appointment_update",
        priority: "wa",
        stype: "normal",
        Params: `${name},Dr. Swati Kodur (Patil),${date},${service}`,
      },
    });

    return res.status(200).json({
      success: true,
      visitId,
      message: "Appointment request submitted successfully",
    });

  } catch (error) {
    console.error("PRODUCTION ERROR:", error.message);
    return res.status(500).json({
      success: false,
      message: "Failed to process appointment",
    });
  }
}
