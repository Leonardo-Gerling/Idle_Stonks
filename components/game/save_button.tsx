import { ReactElement } from "react"

interface SaveButtonProps {
    text: string
    ariaLabel: string
    icon: ReactElement
    customOnClick: () => void
}

export default function SaveButton({text, ariaLabel, icon, customOnClick}: SaveButtonProps): ReactElement {
    return (
        <button aria-label={ariaLabel} onClick={() => customOnClick()} className="bg-brown-600 hover:bg-brown-700 text-white text-md font-normal py-1 px-3 rounded flex flex-row items-center gap-1">
            {icon}
            {text}
        </button>
    )
}
