// import nodemailer from "nodemailer";
// import dotenv from "dotenv";
// dotenv.config();

// export const sendEmail = async (formData) => {
//   try {
//     const transporter = nodemailer.createTransport({
//       host: "smtp.gmail.com",
//       port: 587,
//       secure: false,
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS
//       },
//     });

//     // Email will be sent ONLY to your Gmail stored inside .env → EMAIL_USER
//     const mailOptions = {
//       from: `"ENT Client" <${process.env.EMAIL_USER}>`,
//       to: process.env.EMAIL_USER,   // ONLY YOUR EMAIL
//       subject: "New Appointment Request",
//       html: `
//         <h2>New Appointment Request</h2>
//         <p><strong>Name:</strong> ${formData.name}</p>
//         <p><strong>Age:</strong> ${formData.age}</p>
//         <p><strong>Sex:</strong> ${formData.sex}</p>
//         <p><strong>Mobile:</strong> ${formData.mobile}</p>
//         <p><strong>Appointment Date:</strong> ${formData.date}</p>
//         <p><strong>Service:</strong> ${formData.service}</p>
//       `
//     };

//     const info = await transporter.sendMail(mailOptions);
//     return info;

//   } catch (error) {
//     console.error("Email Error:", error);
//     throw new Error("Failed to send Email");
//   }
// };

// export default sendEmail;
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

export const sendEmail = async (formData) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
    });

    // Professional HTML Email Template
    const emailTemplate = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Appointment</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f7fa;">
        <table role="presentation" style="width: 100%; border-collapse: collapse;">
          <tr>
            <td align="center" style="padding: 40px 0;">
              
              <!-- Main Container -->
              <table role="presentation" style="width: 600px; max-width: 100%; border-collapse: collapse; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);">
                
                <!-- Header with Gradient -->
                <tr>
                  <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
                    <div style="background-color: rgba(255, 255, 255, 0.2); width: 80px; height: 80px; margin: 0 auto 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16 2V6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8 2V6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3 10H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
                    <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">New Appointment Request</h1>
                    <p style="margin: 10px 0 0; color: rgba(255, 255, 255, 0.9); font-size: 14px;">Dr. Swati Kodur (Patil) - ENT Specialist</p>
                  </td>
                </tr>

                <!-- Alert Banner -->
                <tr>
                  <td style="padding: 0;">
                    <div style="background: linear-gradient(90deg, #ffd89b 0%, #19547b 100%); padding: 12px 30px; text-align: center;">
                      <p style="margin: 0; color: #ffffff; font-size: 13px; font-weight: 600;">
                        ⚡ Action Required: Please review and confirm this appointment
                      </p>
                    </div>
                  </td>
                </tr>

                <!-- Patient Information Section -->
                <tr>
                  <td style="padding: 40px 30px;">
                    
                    <!-- Section Title -->
                    <h2 style="margin: 0 0 25px; color: #2d3748; font-size: 20px; font-weight: 600; border-bottom: 3px solid #667eea; display: inline-block; padding-bottom: 8px;">
                      Patient Details
                    </h2>

                    <!-- Info Cards -->
                    <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
                      
                      <!-- Name -->
                      <tr>
                        <td style="padding: 18px 20px; background: linear-gradient(135deg, #f6f8fb 0%, #f0f4f8 100%); border-radius: 12px; margin-bottom: 12px; display: block;">
                          <table role="presentation" style="width: 100%; border-collapse: collapse;">
                            <tr>
                              <td style="width: 40px; vertical-align: top;">
                                <div style="width: 36px; height: 36px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                                  <span style="color: white; font-size: 18px;">👤</span>
                                </div>
                              </td>
                              <td style="padding-left: 15px; vertical-align: middle;">
                                <p style="margin: 0; color: #718096; font-size: 12px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px;">Full Name</p>
                                <p style="margin: 4px 0 0; color: #2d3748; font-size: 16px; font-weight: 600;">${formData.name}</p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>

                      <!-- Age & Sex Row -->
                      <tr>
                        <td style="padding-top: 12px;">
                          <table role="presentation" style="width: 100%; border-collapse: collapse;">
                            <tr>
                              <!-- Age -->
                              <td style="width: 48%; padding: 18px 20px; background: linear-gradient(135deg, #f6f8fb 0%, #f0f4f8 100%); border-radius: 12px;">
                                <table role="presentation" style="width: 100%;">
                                  <tr>
                                    <td style="width: 36px; vertical-align: top;">
                                      <div style="width: 36px; height: 36px; background: linear-gradient(135deg, #48bb78 0%, #38a169 100%); border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                                        <span style="color: white; font-size: 18px;">🎂</span>
                                      </div>
                                    </td>
                                    <td style="padding-left: 12px; vertical-align: middle;">
                                      <p style="margin: 0; color: #718096; font-size: 11px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px;">Age</p>
                                      <p style="margin: 2px 0 0; color: #2d3748; font-size: 15px; font-weight: 600;">${formData.age || 'N/A'} years</p>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                              <td style="width: 4%;"></td>
                              <!-- Sex -->
                              <td style="width: 48%; padding: 18px 20px; background: linear-gradient(135deg, #f6f8fb 0%, #f0f4f8 100%); border-radius: 12px;">
                                <table role="presentation" style="width: 100%;">
                                  <tr>
                                    <td style="width: 36px; vertical-align: top;">
                                      <div style="width: 36px; height: 36px; background: linear-gradient(135deg, #ed8936 0%, #dd6b20 100%); border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                                        <span style="color: white; font-size: 18px;">⚧</span>
                                      </div>
                                    </td>
                                    <td style="padding-left: 12px; vertical-align: middle;">
                                      <p style="margin: 0; color: #718096; font-size: 11px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px;">Sex</p>
                                      <p style="margin: 2px 0 0; color: #2d3748; font-size: 15px; font-weight: 600;">${formData.sex || 'N/A'}</p>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>

                      <!-- Mobile -->
                      <tr>
                        <td style="padding: 12px 0 0;">
                          <div style="padding: 18px 20px; background: linear-gradient(135deg, #f6f8fb 0%, #f0f4f8 100%); border-radius: 12px;">
                            <table role="presentation" style="width: 100%;">
                              <tr>
                                <td style="width: 40px; vertical-align: top;">
                                  <div style="width: 36px; height: 36px; background: linear-gradient(135deg, #4299e1 0%, #3182ce 100%); border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                                    <span style="color: white; font-size: 18px;">📱</span>
                                  </div>
                                </td>
                                <td style="padding-left: 15px; vertical-align: middle;">
                                  <p style="margin: 0; color: #718096; font-size: 12px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px;">Mobile Number</p>
                                  <p style="margin: 4px 0 0; color: #2d3748; font-size: 16px; font-weight: 600;">
                                    <a href="tel:${formData.phone}" style="color: #4299e1; text-decoration: none;">${formData.phone}</a>
                                  </p>
                                </td>
                              </tr>
                            </table>
                          </div>
                        </td>
                      </tr>

                    </table>

                    <!-- Appointment Details Section -->
                    <h2 style="margin: 35px 0 25px; color: #2d3748; font-size: 20px; font-weight: 600; border-bottom: 3px solid #48bb78; display: inline-block; padding-bottom: 8px;">
                      Appointment Information
                    </h2>

                    <!-- Date & Service Cards -->
                    <table role="presentation" style="width: 100%; border-collapse: collapse;">
                      
                      <!-- Date -->
                      <tr>
                        <td style="padding: 18px 20px; background: linear-gradient(135deg, #fef5e7 0%, #fdebd0 100%); border-radius: 12px; border-left: 4px solid #f59e0b;">
                          <table role="presentation" style="width: 100%;">
                            <tr>
                              <td style="width: 40px; vertical-align: top;">
                                <div style="width: 36px; height: 36px; background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                                  <span style="color: white; font-size: 18px;">📅</span>
                                </div>
                              </td>
                              <td style="padding-left: 15px; vertical-align: middle;">
                                <p style="margin: 0; color: #92400e; font-size: 12px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px;">Appointment Date</p>
                                <p style="margin: 4px 0 0; color: #78350f; font-size: 16px; font-weight: 700;">${new Date(formData.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>

                      <!-- Service -->
                      <tr>
                        <td style="padding: 12px 0 0;">
                          <div style="padding: 18px 20px; background: linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%); border-radius: 12px; border-left: 4px solid #0ea5e9;">
                            <table role="presentation" style="width: 100%;">
                              <tr>
                                <td style="width: 40px; vertical-align: top;">
                                  <div style="width: 36px; height: 36px; background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%); border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                                    <span style="color: white; font-size: 18px;">🏥</span>
                                  </div>
                                </td>
                                <td style="padding-left: 15px; vertical-align: middle;">
                                  <p style="margin: 0; color: #075985; font-size: 12px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px;">Service Requested</p>
                                  <p style="margin: 4px 0 0; color: #0c4a6e; font-size: 16px; font-weight: 700;">${formData.service} Treatment</p>
                                </td>
                              </tr>
                            </table>
                          </div>
                        </td>
                      </tr>

                    </table>

                  </td>
                </tr>

                <!-- Action Button -->
                <tr>
                  <td style="padding: 0 30px 40px;">
                    <div style="background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%); border-radius: 12px; padding: 20px; text-align: center; border: 2px dashed #22c55e;">
                      <p style="margin: 0 0 15px; color: #166534; font-size: 14px; font-weight: 600;">
                        ✅ Next Steps: Please contact the patient to confirm the appointment
                      </p>
                      <a href="tel:${formData.phone}" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: 600; font-size: 14px; box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);">
                        📞 Call Patient Now
                      </a>
                    </div>
                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); padding: 30px; text-align: center;">
                    <p style="margin: 0 0 10px; color: #cbd5e1; font-size: 14px; font-weight: 600;">Dr. Swati Kodur (Patil)</p>
                    <p style="margin: 0 0 15px; color: #94a3b8; font-size: 12px;">ENT Specialist Clinic</p>
                    <div style="border-top: 1px solid rgba(255, 255, 255, 0.1); padding-top: 15px; margin-top: 15px;">
                      <p style="margin: 0; color: #64748b; font-size: 11px;">
                        This is an automated notification from your appointment booking system.
                      </p>
                      <p style="margin: 8px 0 0; color: #64748b; font-size: 11px;">
                        © ${new Date().getFullYear()} ENT Specialist Clinic. All rights reserved.
                      </p>
                    </div>
                  </td>
                </tr>

              </table>
              
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    // Email options with the beautiful template
    const mailOptions = {
      from: `"ENT Appointment System" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `🔔 New Appointment Request - ${formData.name} | ${formData.service}`,
      html: emailTemplate,
      // Plain text fallback for email clients that don't support HTML
      text: `
New Appointment Request

Patient Details:
- Name: ${formData.name}
- Age: ${formData.age || 'N/A'}
- Sex: ${formData.sex || 'N/A'}
- Mobile: ${formData.phone}

Appointment Information:
- Date: ${new Date(formData.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
- Service: ${formData.service}

Please contact the patient to confirm the appointment.
      `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully:", info.messageId);
    return info;

  } catch (error) {
    console.error("❌ Email Error:", error);
    throw new Error("Failed to send Email");
  }
};

export default sendEmail;