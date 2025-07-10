import Image from "next/image";

export default function AboutPage() {
	return (
		<div className="bg-[#1e1e1e] text-[#f5f5f5] min-h-screen py-20 px-6">
			<div className="max-w-6xl mx-auto space-y-20">
				{/* Header Section */}
				<section className="grid md:grid-cols-2 gap-10 items-center">
					<div>
						<h1 className="text-4xl font-bold mb-4 border-b border-[#ccc] pb-2">
							About Us
						</h1>
						<p className="text-lg leading-relaxed">
							At <span className="font-semibold">Stroit Designs</span>, we craft
							timeless spaces that blend innovation with elegance. From luxury
							homes to collaborative urban spaces, our design philosophy
							revolves around simplicity, functionality, and bold creativity.
						</p>
					</div>
					<div className="rounded-lg overflow-hidden shadow-lg">
						<Image
							src="/7.jpg"
							alt="Our Team"
							width={600}
							height={400}
							className="object-cover w-full h-full"
						/>
					</div>
				</section>

				{/* Mission Section */}
				<section className="grid md:grid-cols-2 gap-10 items-center">
					<div className="rounded-lg overflow-hidden shadow-lg order-2 md:order-1">
						<Image
							src="/12.jpg"
							alt="Design Philosophy"
							width={600}
							height={400}
							className="object-cover w-full h-full"
						/>
					</div>
					<div className="order-1 md:order-2">
						<h2 className="text-3xl font-semibold mb-4 text-vanilla">
							Our Mission
						</h2>
						<p className="text-lg leading-relaxed">
							To push boundaries in architecture through modern, eco-conscious,
							and culturally grounded designs. We believe in the power of space
							to transform lives and inspire generations.
						</p>
					</div>
				</section>

				{/* Fun Meet the Team Section */}
				<section className="text-center">
					<h2 className="text-3xl font-semibold mb-6">Meet the Dreamers</h2>
					<p className="max-w-3xl mx-auto mb-10 text-lg text-[#ccc]">
						Our diverse team of architects, designers, and strategists blend
						aesthetics with practical solutions—because every masterpiece begins
						with a daring mind.
					</p>

					<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
						{[
							{ name: "Waliko", role: "Lead Architect", img: "/human5.jpg" },
							{ name: "Zama", role: "Creative Director", img: "/human2.jpg" },
							{ name: "Chika", role: "Project Manager", img: "/human3.jpg" },
						].map((person) => (
							<div
								key={person.name}
								className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition">
								<Image
									src={person.img}
									alt={person.name}
									width={300}
									height={200}
									className="rounded-lg object-cover w-full h-48 mb-4"
								/>
								<h3 className="text-xl font-medium">{person.name}</h3>
								<p className="text-sm text-[#bbb]">{person.role}</p>
							</div>
						))}
					</div>
				</section>
			</div>
		</div>
	);
}
