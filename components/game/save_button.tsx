import { ReactElement } from "react"

interface SaveButtonProps {
    text: string
    ariaLabel: string
    customOnClick: () => void
}

export default function SaveButton({text, ariaLabel, customOnClick}: SaveButtonProps): ReactElement {
    return (
        <button aria-label={ariaLabel} onClick={() => customOnClick()} className="bg-brown-600 hover:bg-brown-700 text-white text-lg font-medium py-1 px-3 rounded">
            {text}
        </button>
    )
}
