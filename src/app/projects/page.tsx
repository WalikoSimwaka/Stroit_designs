import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/home";

export default function ProjectsPage() {
	return (
		<div className="bg-[#1e1e1e] text-[#f4f4f4] min-h-screen py-20 px-6">
			<div className="max-w-6xl mx-auto">
				<h1 className="text-4xl font-bold mb-12 border-b border-[#ccc] pb-4">
					Projects
				</h1>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project) => (
						<Link
							key={project.slug}
							href={`/projects/${project.slug}`}
							className="group bg-[#2c2c2c] hover:bg-[#3a3a3a] transition-colors p-4 rounded-md shadow-md">
							<div className="aspect-[4/3] overflow-hidden rounded-md">
								<Image
									src={project.images[0]}
									alt={project.title}
									width={400}
									height={300}
									className="object-cover w-full h-full rounded-md"
								/>
							</div>
							<h3 className="mt-4 text-xl font-semibold">{project.title}</h3>
							<p className="text-sm text-[#ccc] line-clamp-2">
								{project.description}
							</p>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}
