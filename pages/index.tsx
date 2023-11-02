import { ReactElement } from "react";

import Shop from "@components/game/shop";
import TreeSection from "@components/game/tree_section";
import BottomSection from "@components/game/bottom_section";
import Info from "@components/game/info";
import BlurScreen from "@components/game/blur_screen";

export default function Game(): ReactElement {
	return (
		<div aria-label="game" className="h-screen w-screen bg-brown-200">
			<Shop />
			<section
				aria-label="mid-section"
				className="mx-auto flex h-full w-full flex-col items-center"
			>
				<TreeSection className="flex-[3]" />
				<BottomSection className="flex-1" />
			</section>
			<Info />
			<BlurScreen />
		</div>
	);
}
