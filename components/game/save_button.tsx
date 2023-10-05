import { ReactElement } from "react"

interface SavesButtonProps {
    text: string
    ariaLabel: string
    customOnClick: () => void
}

export default function SavesButton({text, ariaLabel, customOnClick}: SavesButtonProps): ReactElement {
    return (
        <button aria-label={ariaLabel} onClick={() => customOnClick()} className="bg-blue-500 hover:bg-blue-600 text-white text-2xl font-medium py-2 px-5 rounded">
            {text}
        </button>
    )
}
