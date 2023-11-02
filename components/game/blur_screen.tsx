import { ReactElement, useContext } from "react";

import ShopContext from "@utilities/shop_context";

export default function BlurScreen(): ReactElement {
	const { collapsedShop, collapsedInfo } = useContext(ShopContext);

	return (
		<div
			aria-label="blur-screen"
			className={`absolute inset-0 z-10 h-screen w-screen backdrop-blur-[2px] transition-opacity duration-700 ease-in-out ${
				collapsedShop && collapsedInfo
					? "pointer-events-none opacity-0"
					: "opacity-100"
			}`}
		/>
	);
}
