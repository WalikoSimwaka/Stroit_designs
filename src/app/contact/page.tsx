"use client";
import { useState } from "react";

export default function ContactPage() {
	const [form, setForm] = useState({ name: "", email: "", message: "" });

	const handleChange = (e: any) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		alert("Message sent!");
		setForm({ name: "", email: "", message: "" });
	};

	return (
		<div className="bg-[#1e1e1e] text-[#f4f4f4] min-h-screen py-20 px-6">
			<div className="max-w-3xl mx-auto space-y-8">
				<h1 className="text-4xl font-bold border-b border-[#ccc] pb-4">
					Contact Us
				</h1>
				<form onSubmit={handleSubmit} className="space-y-4">
					<input
						type="text"
						name="name"
						value={form.name}
						onChange={handleChange}
						required
						placeholder="Your Name"
						className="w-full px-4 py-2 bg-[#2c2c2c] border border-[#444] text-white placeholder:text-[#aaa] rounded-md focus:outline-none focus:ring-2 focus:ring-[#ddd]"
					/>
					<input
						type="email"
						name="email"
						value={form.email}
						onChange={handleChange}
						required
						placeholder="Your Email"
						className="w-full px-4 py-2 bg-[#2c2c2c] border border-[#444] text-white placeholder:text-[#aaa] rounded-md focus:outline-none focus:ring-2 focus:ring-[#ddd]"
					/>
					<textarea
						name="message"
						value={form.message}
						onChange={handleChange}
						required
						placeholder="Your Message"
						rows={5}
						className="w-full px-4 py-2 bg-[#2c2c2c] border border-[#444] text-white placeholder:text-[#aaa] rounded-md focus:outline-none focus:ring-2 focus:ring-[#ddd]"
					/>
					<button
						type="submit"
						className="bg-white text-black font-semibold px-6 py-2 rounded hover:bg-gray-200 transition">
						Send Message
					</button>
				</form>
			</div>
		</div>
	);
}
