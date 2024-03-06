import Input from "../components/ui/Input.tsx";
import Button from "../components/ui/Button.tsx";
import { FormEvent } from "react";
import Dropzone from "../components/ui/Dropzone.tsx"
import { useState, ChangeEvent } from "react";
import { useTranslation } from 'react-i18next'

export type LabelDetectorFormType = {
    file: File | null,
    maxLabels: number,
    minConfidenceLevel: number
}


type LabelDetectorFormProps = {
    onSubmit?: (data: LabelDetectorFormType) => void
}
export default function LabelDetectorForm({onSubmit}: LabelDetectorFormProps) {

    const { t } = useTranslation()

    const [formData, setFormData] = useState<LabelDetectorFormType>({
        file: null,
        maxLabels: 8,
        minConfidenceLevel: 60
    })

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        if(onSubmit) {
            onSubmit(formData)
        }
    }

    const handleFileChange = (file: File | null) => {
        setFormData((data) => ({...data, file: file}))
    }

    const handleInputChange = (e: ChangeEvent, key: string) => {
        const value = (e.target as HTMLInputElement).value
        setFormData((data) => ({...data, [key]: value}))
    }

    return <form onSubmit={handleSubmit} className="w-full h-full grid grid-cols-2 gap-4">
        <div className="flex justify-center items-center">
            <Dropzone className="max-w-[500px]" onChange={handleFileChange}>
                {t('Drag and drop some file here, or click to select file')}
            </Dropzone>
        </div>
        <div className="flex justify-center">
            <div className="flex gap-4 flex-col max-w-[500px] w-full">
                <Input 
                    className="w-full" 
                    type="number" 
                    value={formData.maxLabels} 
                    onChange={(e) => handleInputChange(e, "maxLabels")}
                >{t('Max labels')}: </Input>
                <Input 
                    className="w-full" 
                    type="number" 
                    value={formData.minConfidenceLevel} 
                    onChange={(e) => handleInputChange(e, "minConfidenceLevel")}
                >{t('Min confidence level')}: </Input>
                <Button>{t('Analyse')}</Button>
            </div>
        </div>
    </form>
}