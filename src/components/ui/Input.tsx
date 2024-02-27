import { InputHTMLAttributes, useRef } from "react"
import { twMerge } from "tailwind-merge"
import { v4 as randomUUID } from 'uuid'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    label?: string,
}
export default function Input({children, label, className, type="text", ...props}: InputProps) {
    const style = "flex flex-col w-[185px]"
    const inputId = useRef(randomUUID())
    return <div className={twMerge(style, className)}>
        {(label || children) && <label htmlFor={inputId.current}>{label ? label : children}</label>}
        <input {...props} id={inputId.current} type={type} className="bg-transparent border-b border-b-gray-500 outline-none"/>
    </div>
}