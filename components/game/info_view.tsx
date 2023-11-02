import { ReactElement, useContext, useRef } from "react";
import { Github, Mail, X } from "@geist-ui/icons";
import { useOnClickOutside } from "usehooks-ts";

import ShopContext from "@utilities/shop_context";
import NextJS from "@components/game/nextjs";
import Tailwind from "@components/game/tailwind";

export default function InfoView(): ReactElement {
	const { collapsedInfo, setCollapsedInfo } = useContext(ShopContext);

	const ref = useRef<HTMLDivElement | null>(null);

	useOnClickOutside(ref, () => setCollapsedInfo(true));

	return (
		<section
			ref={ref}
			aria-label="info-view"
			className={`absolute inset-x-4 top-0 z-20 h-[20rem] rounded-b-lg bg-green-700 text-white transition-transform duration-700 ease-in-out ${
				collapsedInfo ? "translate-y-[-20rem]" : ""
			}`}
		>
			<div className="relative h-full w-full">
				<button
					className="absolute right-3 top-2"
					onClick={() => setCollapsedInfo(true)}
				>
					<X size={50} color="black" strokeWidth={2} />
				</button>
				<div className="flex h-full w-full flex-col pb-2 pt-16">
					<div className="flex h-full w-full flex-row justify-between pr-3 text-center">
						<div
							aria-label="socials"
							className="flex h-full w-full flex-col items-center justify-start gap-2"
						>
							<p className="mb-1 text-xl">Socials</p>
							<div className="flex flex-row items-center gap-1">
								<Mail size={22} />
								<button
									onClick={async () =>
										await navigator.clipboard.writeText(
											"leonardodag123456@gmail.com",
										)
									}
								>
									Email
								</button>
							</div>
							<div className="flex flex-row items-center gap-1">
								<Github size={22} />
								<a
									href="https://github.com/Leonardo-Gerling/Idle_Stonks"
									target="_blank"
								>
									Github
								</a>
							</div>
						</div>
						<div
							aria-label="attribution"
							className="flex h-full w-full flex-col items-center justify-start gap-1"
						>
							<p className="mb-1 text-xl">Attribution</p>
							<a
								href="https://mit-license.org/"
								title="geist-ui license"
								target="_blank"
							>
								geist-ui MIT License
							</a>
							<a
								href="https://www.flaticon.com/free-icon/apple-tree_1676863?related_id=1676812&origin=search"
								title="apple tree icon"
								target="_blank"
							>
								Apple tree icon by Flatpik - Flaticon
							</a>
						</div>
					</div>
					<div
						aria-label="build-with"
						className="flex h-full w-full flex-col items-center justify-center gap-4"
					>
						<p className="mb-1 text-xl">Build With</p>
						<div className="flex w-full flex-row justify-evenly">
							<a href="https://nextjs.org/">
								<NextJS height={15} />
							</a>
							<a href="https://tailwindcss.com/">
								<Tailwind height={15} />
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
