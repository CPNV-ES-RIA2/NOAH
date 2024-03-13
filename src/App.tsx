import LabelDetectorForm from "./forms/LabelDetectorForm.tsx";
import BaseLayout from "./layouts/BaseLayout/BaseLayout.tsx";
import { LabelDetectorFormType } from "./forms/LabelDetectorForm.tsx";
import { useTranslation } from 'react-i18next'
import LabelsDisplay from "./components/LabelsDisplay.tsx";

export default function App() {
    const { t } = useTranslation()

    const handleLabelDetectorFormSubmit = (data: LabelDetectorFormType) => {
        console.log(data)
    }

    return (
        <BaseLayout>
            <h1 className="m-4 text-center text-xl">{t("Label detector")}</h1>
            <LabelDetectorForm onSubmit={handleLabelDetectorFormSubmit}/>
            <LabelsDisplay labels={[]} />
        </BaseLayout>
    )
}
