import { ReactElement, useContext, useEffect } from "react";

import ShopContext from "@utilities/shop_context";

export default function BlurScreen(): ReactElement {
	const { collapsedShop, collapsedInfo } = useContext(ShopContext);

	useEffect(() => {
		console.log("Collapsed shop: ", collapsedShop);
		console.log("Collapsed info: ", collapsedInfo);
	}, [collapsedShop, collapsedInfo]);

	return (
		<div
			aria-label="blur-screen"
			className={`absolute inset-0 z-10 h-screen w-screen backdrop-blur-[8px] transition-opacity duration-700 ease-in-out xl:hidden ${
				collapsedShop && collapsedInfo
					? "pointer-events-none opacity-0"
					: "opacity-100"
			}`}
		/>
	);
}
