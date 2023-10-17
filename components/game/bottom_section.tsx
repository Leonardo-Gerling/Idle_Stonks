import { ReactElement, useContext, useEffect } from "react"

import SaveButton from "@components/game/save_button"
import ShopContext from "@utilities/shop_context"
import { exportSave, importSave } from "@utilities/saves"
import ArrowDownTray from "@svgs/arrow_down_tray"
import ArrowUpTray from "@svgs/arrow_up_tray"
import Floppy from "@svgs/floppy"
import fetchWeather from "@utilities/fetch_weather"

interface BottomSectionProps {
    className?:string
}

export default function BottomSection({className}: BottomSectionProps): ReactElement {

    const {fromJSON, updateDataCookie} = useContext(ShopContext)

    useEffect(() => {
        // fetchWeather("New York")
    }, [])

    return (
        <section aria-label="bottom-section" className={`absolute bottom-0 w-full`}>
            <div className="flex flex-row justify-center gap-2 m-2">
                <SaveButton icon={<ArrowDownTray width={20} />} text="Download" ariaLabel="Export save" customOnClick={() => {
                    updateDataCookie()
                    exportSave()
                }} />

                <SaveButton icon={<Floppy width={20} />} text="Save" ariaLabel="Save" customOnClick={() => updateDataCookie()} />
                
                <SaveButton icon={<ArrowUpTray width={20} />} text="Upload" ariaLabel="Import save" customOnClick={() => importSave(fromJSON)} />
            </div>
        </section>
    )
}
