import { ReactElement, useContext, useEffect } from "react"

import SaveButton from "@components/game/save_button"
import ShopContext from "@utilities/shop_context"
import { exportSave, importSave } from "@utilities/saves"
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
            <div className="flex flex-row gap-2 m-2">
                <SaveButton text="Export save" ariaLabel="Export save" customOnClick={() => {
                    updateDataCookie()
                    exportSave()
                }} />

                <SaveButton text="Save" ariaLabel="Save" customOnClick={() => updateDataCookie()} />
                
                <SaveButton text="Import save" ariaLabel="Import save" customOnClick={() => importSave(fromJSON)} />
            </div>
        </section>
    )
}
