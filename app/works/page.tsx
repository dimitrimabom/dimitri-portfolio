import { MoveLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import WorkCard from "@/components/WorkCard";

const projects = [
	{
		slug: "test1",
		image:
			"https://images.unsplash.com/photo-1756151224665-eba765e8c3b5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		title: "Billify",
		excerpt: "A digital invoice template for designers.",
		date: "2020-01-01",
	},
	{
		slug: "test2",
		image:
			"https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		title: "Portfolio",
		excerpt: "A modern portfolio website built with Next.js.",
		date: "2022-01-01",
	},
	{
		slug: "test3",
		image:
			"https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		title: "ShopDash",
		excerpt: "An e-commerce analytics dashboard.",
		date: "2021-01-01",
	},
	{
		slug: "test4",
		image:
			"https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		title: "Taskly",
		excerpt: "A productivity app to manage daily tasks.",
		date: "2023-01-01",
	},
];

const Page = () => {
	return (
		<div className="font-raleway max-w-4xl mx-auto">
			<section className="py-12 px-4">
				<Link
					href="/"
					className="m-6 flex items-center gap-2 text-primary hover:underline w-fit"
				>
					<MoveLeft />
					<span>Back</span>
				</Link>

				<h1 className="text-5xl leading-tight text-foreground font-bold px-6 mb-2">
					Projects
				</h1>
				<p className="text-foreground/60 pt-2 text-lg font-medium px-6 mb-8">
					Explore a selection of my recent work, including web apps, templates,
					and tools.
				</p>

						<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
							{projects.map((project, idx) => (
								<WorkCard
									key={project.slug}
									image={project.image}
									title={project.title}
									slug={project.slug}
									date={project.date}
									excerpt={project.excerpt}
									priority={idx === 0}
								/>
							))}
						</div>
			</section>
		</div>
	);
};

export default Page;


