import LabelDetectorForm, {LabelDetectorFormType} from "@/forms/LabelDetectorForm.tsx";
import {useTranslation} from 'react-i18next'
import LabelsDisplay from "@/components/LabelsDisplay.tsx";
import {LabelDetectorService} from "@/services/api/LabelDetectorService.ts";
import {useState} from "react";
import {Label} from "@/models/label.ts";
import Loader from "@/components/ui/Loader.tsx";

export default function Home() {
    const { t } = useTranslation()
    const [labels, setLabels] = useState<Label[]>([])
    const [isLoading, setIsLoading] = useState(false)

    const handleLabelDetectorFormSubmit = async (data: LabelDetectorFormType) => {
        if(data.file) {
            setIsLoading(true)
            const labels = await LabelDetectorService.analyse({ file: data.file, maxResults: data.maxResults, minConfidenceLevel: data.minConfidenceLevel })
            setLabels(labels)
            setIsLoading(false)
        }
    }

    return (
        <>
            <h1 className="m-4 text-center text-xl">{t("Label detector")}</h1>
            <Loader isLoading={isLoading}/>
            <LabelDetectorForm onSubmit={handleLabelDetectorFormSubmit}/>
            <LabelsDisplay labels={labels} />
        </>
    )
}
