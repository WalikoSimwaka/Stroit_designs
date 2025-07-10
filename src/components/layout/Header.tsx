import Image from "next/image";
import Link from "next/link";
import { settings } from "@/data/settings";

export function Header() {
	return (
		<header className="fixed w-full z-50 border-b border-tobacco backdrop-blur-md bg-gradient-to-r from-cardbg/70 via-cardbg/70 to-cardbg/90 shadow-md">
			<div className="container mx-14 py-1 flex justify-between items-center">
				<Link href="/" className="flex items-center space-x-3">
					<Image
						src={settings.logo}
						alt="Stroit Designs Logo"
						width={60}
						height={32}
						className="object-contain"
					/>
					<span className="text-sand text-xl font-bold">STROIT DESIGNS</span>
				</Link>

				<nav className="hidden md:flex space-x-8 font-bold ">
					{settings.navigation.map((item) => (
						<Link
							key={item.url}
							href={item.url}
							className="uppercase tracking-wider text-sm text-mountain hover:text-vanilla">
							{item.label}
						</Link>
					))}
				</nav>
			</div>
		</header>
	);
}
