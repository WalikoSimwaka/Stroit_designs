import Image from "next/image";

export default function Home() {
	return (
		<div className="relative w-full h-screen overflow-hidden">
			<Image
				src="/10.jpg"
				alt="Light Houses Space By Life SAOTA Monograph"
				fill
				className="object-cover"
				priority
			/>

			{/* Blurred background only for text area */}
			<div className="absolute inset-y-0 left-0 w-1/2 pointer-events-none">
				<div
					className="h-full w-full backdrop-blur-sm bg-black/20"
					style={{
						WebkitMaskImage:
							"linear-gradient(to right, black 50%, transparent 100%)",
						maskImage: "linear-gradient(to right, black 40%, transparent 100%)",
						WebkitMaskRepeat: "no-repeat",
						maskRepeat: "no-repeat",
					}}></div>
			</div>

			<div className="absolute inset-y-0 left-6 w-1/2 flex flex-col justify-center px-16 z-10">
				<h1 className="text-4xl text-vanilla md:text-5xl font-bold mb-4 tracking-tight">
					OUR FIRST MONOGRAPH AVAILABLE
				</h1>
				<p className="text-xl mb-8 text-white font-bold">
					ONLINE & IN BOOKSTORES
				</p>
				<button className="flex items-center bg-transparent border border-white text-white px-6 py-3 text-lg transition-colors duration-300 hover:bg-white hover:text-black w-fit">
					PURCHASE ONLINE
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5 ml-2"
						viewBox="0 0 20 20"
						fill="currentColor">
						<path
							fillRule="evenodd"
							d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
							clipRule="evenodd"
						/>
					</svg>
				</button>
			</div>

			{/* Navigation Arrows */}
			<div className="absolute left-4 top-1/2 -translate-y-1/2 text-white cursor-pointer p-2 z-10">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-8 w-8"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth={2}>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M15 19l-7-7 7-7"
					/>
				</svg>
			</div>
			<div className="absolute right-4 top-1/2 -translate-y-1/2 text-white cursor-pointer p-2 z-10">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-8 w-8"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth={2}>
					<path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
				</svg>
			</div>

			{/* Pagination Dots */}
			<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
				<span className="h-2 w-2 bg-white rounded-full"></span>
				<span className="h-2 w-2 bg-gray-500 rounded-full"></span>
				<span className="h-2 w-2 bg-gray-500 rounded-full"></span>
			</div>
		</div>
	);
}
