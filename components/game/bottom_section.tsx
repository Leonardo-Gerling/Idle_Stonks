import { ReactElement, useContext } from "react"

import SavesButton from "@components/game/save_button"
import ShopContext from "@utilities/shop_context"
import { exportSave, importSave } from "@utilities/saves"

export default function BottomSection(): ReactElement {
    const {fromJSON, updateDataCookie} = useContext(ShopContext)

    return (
        <section aria-label="bottom-section" className="grid grid-cols-3 absolute gap-[13rem] bottom-[8rem] w-[50vw] h-[4rem] left-1/2 -translate-x-1/2">
            <SavesButton text="Export save" ariaLabel="Export save" customOnClick={() => {
                updateDataCookie()
                exportSave()
            }} />

            <SavesButton text="Save" ariaLabel="Save" customOnClick={() => updateDataCookie()} />
            
            <SavesButton text="Import save" ariaLabel="Import save" customOnClick={() => importSave(fromJSON)} />
        </section>
    )
}
