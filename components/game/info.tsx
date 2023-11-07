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
				className="absolute right-5 top-5 h-10 w-10 sm:h-[60px] sm:w-[60px]"
				onClick={() => setCollapsedInfo(false)}
			>
				<InfoIcon
					size={window.screen.width < 640 ? 40 : 60}
					strokeWidth={2}
				/>
			</button>
		</>
	);
}
