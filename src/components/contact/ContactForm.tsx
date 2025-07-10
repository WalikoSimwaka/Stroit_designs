"use client";

import { useState } from "react";
import { sendEmail } from "@/lib/email/sendEmail";

export default function ContactForm() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(
		null
	);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitStatus(null);

		try {
			await sendEmail(formData);
			setSubmitStatus("success");
			setFormData({ name: "", email: "", message: "" });
		} catch (error) {
			console.error("Error sending email:", error);
			setSubmitStatus("error");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-4">
			<div>
				<label htmlFor="name" className="block mb-1">
					Name
				</label>
				<input
					type="text"
					id="name"
					name="name"
					value={formData.name}
					onChange={handleChange}
					required
					className="w-full px-4 py-2 border border-gray-300 rounded"
				/>
			</div>

			<div>
				<label htmlFor="email" className="block mb-1">
					Email
				</label>
				<input
					type="email"
					id="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
					required
					className="w-full px-4 py-2 border border-gray-300 rounded"
				/>
			</div>

			<div>
				<label htmlFor="message" className="block mb-1">
					Message
				</label>
				<textarea
					id="message"
					name="message"
					value={formData.message}
					onChange={handleChange}
					required
					rows={5}
					className="w-full px-4 py-2 border border-gray-300 rounded"
				/>
			</div>

			<button
				type="submit"
				disabled={isSubmitting}
				className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors disabled:opacity-50">
				{isSubmitting ? "Sending..." : "Send Message"}
			</button>

			{submitStatus === "success" && (
				<p className="text-green-600">Thank you! Your message has been sent.</p>
			)}
			{submitStatus === "error" && (
				<p className="text-red-600">Something went wrong. Please try again.</p>
			)}
		</form>
	);
}
