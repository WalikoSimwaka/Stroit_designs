import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

export function generateStaticParams() {
	return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
	const project = projects.find((p) => p.slug === params.slug);
	if (!project) return notFound();

	return (
		<div className="container mx-auto px-6 py-20">
			<h1 className="text-4xl font-bold mb-4">{project.title}</h1>
			<div className="flex flex-wrap gap-4 mb-6">
				{project.categories.map((c) => (
					<span key={c} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
						{c}
					</span>
				))}
			</div>
			<p className="text-gray-600 mb-12">{project.description}</p>
			<div className="grid grid-cols-1 gap-8">
				{project.images.map((img, idx) => (
					<div key={idx} className="relative aspect-video">
						<Image
							src={img}
							alt={`Project ${idx}`}
							fill
							className="object-cover rounded"
						/>
					</div>
				))}
			</div>
		</div>
	);
}
