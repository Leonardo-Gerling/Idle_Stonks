import { ReactElement, useContext } from "react";
import { Info as InfoIcon } from "@geist-ui/icons";

import InfoView from "@components/game/info_view";
import ShopContext from "@utilities/shop_context";

export default function Info(): ReactElement {
	const { setCollapsedInfo } = useContext(ShopContext);

	return (
		<>
			<InfoView />

			<button
				className="absolute right-5 top-5 h-10 w-10 sm:h-[60px] sm:w-[60px] 2xl:h-20 2xl:w-20"
				onClick={() => setCollapsedInfo(false)}
			>
				<InfoIcon className="h-full w-full" strokeWidth={2} />
			</button>
		</>
	);
}
