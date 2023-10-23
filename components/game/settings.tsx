import { ReactElement, useContext } from "react"

import CogWheel from "@svgs/cog_wheel"
import SettingsView from "@components/game/settings_view"
import ShopContext from "@utilities/shop_context"

export default function Settings(): ReactElement {
    const { setCollapsedSettings } = useContext(ShopContext)

    return (
        <>
            <SettingsView />

            <button aria-label="settings cog wheel" className="h-[50px] w-[50px] absolute top-5 right-5" onClick={() => setCollapsedSettings(false)}>
                <CogWheel width={50} />
            </button>
        </>
    )
}
