import { HTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

type SelectProps = HTMLAttributes<HTMLSelectElement>
export default function Select({children,className, ...props}: SelectProps) {
    const style = "bg-zinc-950 p-2 border-b border-b-gray-500"
    return <select {...props} className={twMerge(style, className)}>
        {children}
    </select>
}