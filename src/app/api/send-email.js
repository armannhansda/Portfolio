// Standalone email sender script - runs in a separate process
// This prevents nodemailer from crashing the Next.js server
const nodemailer = require("nodemailer");

const data = JSON.parse(process.argv[2] || "{}");

async function sendEmail() {
  const { name, email, message } = data;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER || "armanhansda46@gmail.com",
      pass: process.env.EMAIL_APP_PASSWORD || "",
    },
  });

  const result = await transporter.sendMail({
    from: process.env.EMAIL_USER || "armanhansda46@gmail.com",
    to: "armanhansda.work@gmail.com",
    replyTo: email,
    subject: `Portfolio Message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    html: `
      <div style="font-family: 'Press Start 2P', monospace; background: #F5F0DC; border: 4px solid #1A1A1A; padding: 20px; max-width: 500px;">
        <div style="background: #4A7C3F; border-bottom: 4px solid #1A1A1A; padding: 10px; margin: -20px -20px 15px -20px;">
          <span style="color: #F5F0DC; font-size: 12px; letter-spacing: 2px;">◆ NEW MESSAGE</span>
        </div>
        <p style="color: #1A1A1A; font-size: 12px; margin: 10px 0;">
          <strong style="color: #FF6B35;">Name:</strong> ${name}
        </p>
        <p style="color: #1A1A1A; font-size: 12px; margin: 10px 0;">
          <strong style="color: #FF6B35;">Email:</strong> ${email}
        </p>
        <hr style="border: 2px solid #C8C0A4; margin: 15px 0;" />
        <p style="color: #1A1A1A; font-size: 12px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
      </div>
    `,
  });

  console.log(JSON.stringify({ success: true, messageId: result.messageId }));
}

sendEmail().catch((err) => {
  console.error(JSON.stringify({ success: false, error: err.message }));
  process.exit(1);
});
