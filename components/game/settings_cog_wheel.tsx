import { ReactElement, useState } from "react"

import CogWheel from "@svgs/cog_wheel"

export default function SettingsCogWheel(): ReactElement {
    const [showSettings, setShowSettings] = useState(false)

    return (
        <button aria-label="settings cog wheel" className="h-10 w-10 absolute top-5 right-8" onClick={() => setShowSettings(!showSettings)}>
            <CogWheel width={50} />
        </button>
    )
}
