import { HTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

type ButtonProps = HTMLAttributes<HTMLButtonElement>
export default function Button({children,className, ...props}: ButtonProps) {
    const style = "px-2 py-1 bg-white rounded-lg text-zinc-950 active:bg-zinc-300"
    return <button {...props} className={twMerge(style, className)}>{children}</button>
}