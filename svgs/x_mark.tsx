import { ReactElement, SVGProps } from "react"

export default function XMark(props: SVGProps<SVGSVGElement>): ReactElement {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 100 100" 
            strokeWidth="15" 
            strokeLinecap="round"
            stroke="black"
            {...props}
        >
            <line x1="10" y1="10" x2="90" y2="90" />
            <line x1="90" y1="10" x2="10" y2="90" />
        </svg>
    )
}