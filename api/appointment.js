// // import express from "express";
// // import axios from "axios";
// // import nodemailer from "nodemailer";

// // const app = express();
// // app.use(express.json());

// // // ---------------- CONFIG ----------------
// // const ADMIN_EMAIL = "adityaraut4289@gmail.com";
// // const ADMIN_PASS = "yuvrrzcrndilypne"; // Gmail App Password

// // const SMS_USER = "ENTCARE_01";
// // const SMS_PASS = "123456";
// // const SMS_SENDER = "BUZWAP";

// // // ---------------- API ----------------
// // app.post("/api/appointment", async (req, res) => {
// //   const { name, age, sex, phone, date, service } = req.body;

// //   if (!name || !phone || !date || !service) {
// //     return res.status(400).json({
// //       success: false,
// //       message: "Missing required fields",
// //     });
// //   }

// //   try {
// //     // ---------- EMAIL TO ADMIN ----------
// //     const transporter = nodemailer.createTransport({
// //       service: "gmail",
// //       auth: {
// //         user: ADMIN_EMAIL,
// //         pass: ADMIN_PASS,
// //       },
// //     });

// //     await transporter.sendMail({
// //       from: ADMIN_EMAIL,
// //       to: ADMIN_EMAIL,
// //       subject: "New Appointment Request",
// //       html: `
// //         <h3>New Appointment Request</h3>
// //         <p><b>Name:</b> ${name}</p>
// //         <p><b>Phone:</b> ${phone}</p>
// //         <p><b>Date:</b> ${date}</p>
// //         <p><b>Service:</b> ${service}</p>
// //         <p><b>Age:</b> ${age || "N/A"}</p>
// //         <p><b>Sex:</b> ${sex || "N/A"}</p>
// //       `,
// //     });

// //     // ---------- WHATSAPP TO PATIENT ----------
// //     const waResponse = await axios.get(
// //       "http://bhashsms.com/api/sendmsgutil.php",
// //       {
// //         params: {
// //           user: SMS_USER,
// //           pass: SMS_PASS,
// //           sender: SMS_SENDER,
// //           phone: phone, // 91XXXXXXXXXX
// //           text: "ent_care_appointment_update", // EXACT template name
// //           priority: "wa",
// //           stype: "normal",
// //           Params: `${name},Dr. Swati Kodur (Patil),${date},${service}`,
// //         },
// //       }
// //     );

// //     console.log("WHATSAPP RESPONSE:", waResponse.data);

// //     res.json({
// //       success: true,
// //       message: "Appointment request submitted",
// //       whatsapp: waResponse.data,
// //     });

// //   } catch (error) {
// //     console.error("ERROR:", error.message);
// //     res.status(500).json({
// //       success: false,
// //       error: error.message,
// //     });
// //   }
// // });

// // // ---------------- SERVER ----------------
// // app.listen(5000, () => {
// //   console.log("Server running on http://localhost:5000");
// // });
// import express from "express";
// import axios from "axios";
// import nodemailer from "nodemailer";

// const app = express();
// app.use(express.json());

// // ---------------- CONFIG (FROM ENV) ----------------
// const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
// const ADMIN_PASS = process.env.ADMIN_PASS;

// const SMS_USER = process.env.SMS_USER;
// const SMS_PASS = process.env.SMS_PASS;
// const SMS_SENDER = process.env.SMS_SENDER;

// // Google Maps link from production env
// const CLINIC_MAP_LINK = process.env.CLINIC_MAP_LINK;

// // ---------------- API ----------------
// app.post("/api/appointment", async (req, res) => {
//   const { name, age, sex, phone, date, service } = req.body;

//   if (!name || !phone || !date || !service) {
//     return res.status(400).json({
//       success: false,
//       message: "Missing required fields",
//     });
//   }

//   try {
//     // ---------- EMAIL TO ADMIN ----------
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: ADMIN_EMAIL,
//         pass: ADMIN_PASS,
//       },
//     });

//     await transporter.sendMail({
//       from: ADMIN_EMAIL,
//       to: ADMIN_EMAIL,
//       subject: "New Appointment Request",
//       html: `
//         <h3>New Appointment Request</h3>
//         <p><b>Name:</b> ${name}</p>
//         <p><b>Phone:</b> ${phone}</p>
//         <p><b>Date:</b> ${date}</p>
//         <p><b>Service:</b> ${service}</p>
//         <p><b>Age:</b> ${age || "N/A"}</p>
//         <p><b>Sex:</b> ${sex || "N/A"}</p>
//         <p>
//           <b>Clinic Location:</b><br/>
//           <a href="${CLINIC_MAP_LINK}" target="_blank">
//             View on Google Maps
//           </a>
//         </p>
//       `,
//     });

//     // ---------- WHATSAPP TO PATIENT ----------
//     const waResponse = await axios.get(
//       "http://bhashsms.com/api/sendmsgutil.php",
//       {
//         params: {
//           user: SMS_USER,
//           pass: SMS_PASS,
//           sender: SMS_SENDER,
//           phone: phone, // 91XXXXXXXXXX
//           text: "enr_new_template", // APPROVED TEMPLATE
//           priority: "wa",
//           stype: "normal",
//           Params: `${name},Dr. Swati Kodur (Patil),${date},${service},${CLINIC_MAP_LINK}`,
//         },
//       }
//     );

//     console.log("WHATSAPP RESPONSE:", waResponse.data);

//     res.json({
//       success: true,
//       message: "Appointment request submitted successfully",
//       whatsapp: waResponse.data,
//     });

//   } catch (error) {
//     console.error("ERROR:", error.message);
//     res.status(500).json({
//       success: false,
//       error: error.message,
//     });
//   }
// });

// // ---------------- SERVER ----------------
// app.listen(5000, () => {
//   console.log("Server running on http://localhost:5000");
// });
import express from "express";
import axios from "axios";
import nodemailer from "nodemailer";

const app = express();
app.use(express.json());

// ---------------- CONFIG (ENV + FALLBACK) ----------------
const ADMIN_EMAIL =
  process.env.ADMIN_EMAIL || "entcareclinicpune717@gmail.com";

const ADMIN_PASS =
  process.env.ADMIN_PASS || "";

const SMS_USER =
  process.env.SMS_USER || "ENTCARE_01";

const SMS_PASS =
  process.env.SMS_PASS || "123456";

const SMS_SENDER =
  process.env.SMS_SENDER || "BUZWAP";

const CLINIC_MAP_LINK =
  process.env.CLINIC_MAP_LINK ||
  "https://maps.app.goo.gl/1QDi9bPMMaVAh2oH9";

// ---------------- API ----------------
app.post("/api/appointment", async (req, res) => {
  const { name, age, sex, phone, date, service } = req.body;

  if (!name || !phone || !date || !service) {
    return res.status(400).json({
      success: false,
      message: "Missing required fields",
    });
  }

  try {
    // ---------- EMAIL TO ADMIN ----------
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: ADMIN_EMAIL,
        pass: ADMIN_PASS,
      },
    });

    await transporter.sendMail({
      from: ADMIN_EMAIL,
      to: ADMIN_EMAIL,
      subject: "New Appointment Request",
      html: `
        <h3>New Appointment Request</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Date:</b> ${date}</p>
        <p><b>Service:</b> ${service}</p>
        <p><b>Age:</b> ${age || "N/A"}</p>
        <p><b>Sex:</b> ${sex || "N/A"}</p>
        <p>
          <b>Clinic Location:</b><br/>
          <a href="${CLINIC_MAP_LINK}" target="_blank">
            View on Google Maps
          </a>
        </p>
      `,
    });

    // ---------- WHATSAPP TO PATIENT ----------
    const waResponse = await axios.get(
      "http://bhashsms.com/api/sendmsgutil.php",
      {
        params: {
          user: SMS_USER,
          pass: SMS_PASS,
          sender: SMS_SENDER,
          phone: phone, // 91XXXXXXXXXX
          text: "enr_new_template",
          priority: "wa",
          stype: "normal",
          Params: `${name},Dr. Swati Kodur (Patil),${date},${service},${CLINIC_MAP_LINK}`,
        },
      }
    );

    console.log("WHATSAPP RESPONSE:", waResponse.data);

    res.json({
      success: true,
      message: "Appointment request submitted successfully",
      whatsapp: waResponse.data,
    });

  } catch (error) {
    console.error("SERVER ERROR:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

// ---------------- SERVER ----------------
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
