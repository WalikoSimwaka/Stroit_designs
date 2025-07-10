// app/content.ts
export const content = {
	siteSettings: {
		title: "STROIT DESIGNS",
		logo: "/logo.png", // Place your logo in public folder
		navigation: [
			{ label: "Home", url: "/" },
			{ label: "Projects", url: "/projects" },
			{ label: "Contact", url: "/contact" },
		],
	},
	homePage: {
		title: "Architectural Excellence",
		heroImage: "/hero.jpg", // Place in public folder
		featuredProjects: [
			{
				id: 1,
				title: "Modern Villa",
				slug: "modern-villa",
				description: "A contemporary residential design",
				images: ["/projects/villa1.jpg", "/projects/villa2.jpg"],
				categories: ["Residential", "Modern"],
			},
			// Add more projects...
		],
	},
	contactPage: {
		title: "Get in Touch",
		email: "contact@example.com",
		phone: "+1 (555) 123-4567",
		address: "123 Design Street\nCreative City, CC 10001",
		socialLinks: [
			{ platform: "Instagram", url: "https://instagram.com" },
			{ platform: "LinkedIn", url: "https://linkedin.com" },
		],
	},
	projects: [
		{
			id: 1,
			title: "Modern Villa",
			slug: "modern-villa",
			description: "Full project description...",
			images: ["/projects/villa1.jpg", "/projects/villa2.jpg"],
			categories: ["Residential", "Modern"],
			date: "2023",
			location: "California, USA",
		},
		// Add more projects...
	],
};
