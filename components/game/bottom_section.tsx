import { ReactElement, useContext } from "react";
import { Download, Upload, Save } from "@geist-ui/icons";

import SaveButton from "@components/game/save_button";
import ShopContext from "@utilities/shop_context";
import { exportSave, importSave } from "@utilities/saves";

export default function BottomSection({
	className,
}: {
	className?: string;
}): ReactElement {
	const { fromJSON, updateDataCookie } = useContext(ShopContext);

	return (
		<section
			aria-label="bottom-section"
			className={
				"flex flex-row justify-evenly xs:justify-center items-end xs:gap-2 pb-4 h-full w-full " +
				className
			}
		>
			<SaveButton
				icon={<Download size={20} />}
				text="Download"
				ariaLabel="Export save"
				customOnClick={() => {
					updateDataCookie();
					exportSave();
				}}
			/>

			<SaveButton
				icon={<Save size={20} />}
				text="Save"
				ariaLabel="Save"
				customOnClick={() => updateDataCookie()}
			/>

			<SaveButton
				icon={<Upload size={20} />}
				text="Upload"
				ariaLabel="Import save"
				customOnClick={() => importSave(fromJSON)}
			/>
		</section>
	);
}
