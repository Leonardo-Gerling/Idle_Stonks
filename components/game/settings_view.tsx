import { ReactElement, useContext } from "react"

import XMark from "@svgs/x_mark"
import ShopContext from "@utilities/shop_context"

export default function SettingsView(): ReactElement {
    const { collapsedSettings, setCollapsedSettings } = useContext(ShopContext)

    return (
        <div aria-label="settings-view" className={`absolute top-0 h-[20rem] inset-x-4 bg-green-700 z-20 transition-transform duration-700 ease-in-out rounded-b-lg ${collapsedSettings ? "translate-y-[-20rem]": ""}`}>
            <div className="relative h-full w-full">
                <button className="absolute top-0 right-0" onClick={() => setCollapsedSettings(true)}>
                    <XMark width={50} height={50} />
                </button>
            </div>
        </div>
    )
}
