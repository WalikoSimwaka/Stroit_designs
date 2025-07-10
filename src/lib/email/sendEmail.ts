import sgMail from "@sendgrid/mail";

if (!process.env.SENDGRID_API_KEY) {
	throw new Error("SENDGRID_API_KEY is not defined in environment variables");
}

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

interface EmailData {
	name: string;
	email: string;
	message: string;
}

export async function sendEmail(data: EmailData) {
	const msg = {
		to: process.env.CONTACT_EMAIL || "your-email@example.com",
		from: process.env.FROM_EMAIL || "website@example.com",
		subject: `New message from ${data.name}`,
		text: `From: ${data.name} (${data.email})\n\n${data.message}`,
		html: `
      <p><strong>From:</strong> ${data.name} (${data.email})</p>
      <p>${data.message}</p>
    `,
	};

	await sgMail.send(msg);
}
