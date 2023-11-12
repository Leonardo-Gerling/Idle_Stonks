import { ReactElement, useContext } from "react";
import { Download, Upload, Save } from "@geist-ui/icons";

import SaveButton from "@components/game/save_button";
import ShopContext from "@utilities/shop_context";
import { exportSave, importSave } from "@utilities/saves";
import useMediaQuery from "@utilities/use_media_query";

export default function BottomSection({
	className,
}: {
	className?: string;
}): ReactElement {
	const { fromJSON, updateDataCookie } = useContext(ShopContext);

	const matchSm = useMediaQuery("(min-width: 640px)");
	const matchThreeXl = useMediaQuery("(min-width: 2200px)");

	let size;

	if (matchThreeXl) size = 35;
	else if (matchSm) size = 25;
	else size = 20;

	return (
		<section
			aria-label="bottom-section"
			className={
				"flex flex-row justify-evenly gap-2 items-end pb-4 h-full w-full md:justify-center md:gap-4 3xl:gap-10 " +
				className
			}
		>
			<SaveButton
				icon={<Download size={size} />}
				text="Download"
				ariaLabel="Export save"
				customOnClick={() => {
					updateDataCookie();
					exportSave();
				}}
			/>

			<SaveButton
				icon={<Save size={size} />}
				text="Save"
				ariaLabel="Save"
				customOnClick={() => updateDataCookie()}
			/>

			<SaveButton
				icon={<Upload size={size} />}
				text="Upload"
				ariaLabel="Import save"
				customOnClick={() => importSave(fromJSON)}
			/>
		</section>
	);
}
