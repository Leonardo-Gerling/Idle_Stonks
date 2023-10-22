import { ReactElement, useState } from "react"

import CogWheel from "@svgs/cog_wheel"

export default function SettingsCogWheel(): ReactElement {
    const [showSettings, setShowSettings] = useState(false)

    return (
        <button aria-label="settings cog wheel" className="h-[50px] w-[50px] absolute top-5 right-5" onClick={() => setShowSettings(!showSettings)}>
            <CogWheel width={50} />
        </button>
    )
}
