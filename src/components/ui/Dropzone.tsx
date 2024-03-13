import { PropsWithChildren, useCallback, useEffect, useState } from 'react'
import { useDropzone} from 'react-dropzone'
import { twMerge } from 'tailwind-merge'

type DropzoneProps = PropsWithChildren & {
    className?: string,
    onChange?: (file: File | null) => void,
}
export default function Dropzone({children, onChange, className}: DropzoneProps) {
    const style = "w-full h-full border border-gray-500 flex justify-center items-center rounded-lg"

    const [uploadedFile, setUploadedFile] = useState<File | null>(null)

    const onDrop = useCallback((files: File[]) => {
        setUploadedFile(files[0])
    }, [])
    const {getRootProps, getInputProps} = useDropzone({onDrop})

    useEffect(() => {
        if(onChange) {
            onChange(uploadedFile)
        }
    }, [uploadedFile])

    return (
        <div {...getRootProps()} className={twMerge(style, className)}>
            <input {...getInputProps()}/>
            {uploadedFile ? <p className="text-center">{uploadedFile.name}</p> : <p className="text-center">{children || "Drag and drop some file here, or click to select file"}</p>}
        </div>
    )
}