import { sendEmail } from "../services/emailService.js";

export const bookAppointment = async (req, res) => {
  try {
    const formData = req.body;

    await sendEmail(formData);

    res.status(200).json({
      success: true,
      message: "Appointment submitted! Email sent successfully."
    });

  } catch (error) {
    res.status(500).json({ success: false, message: "Email sending failed" });
  }
};
