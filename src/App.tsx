import LabelDetectorForm from "./forms/LabelDetectorForm.tsx";
import BaseLayout from "./layouts/BaseLayout/BaseLayout.tsx";
import { LabelDetectorFormType } from "./forms/LabelDetectorForm.tsx";
import { useTranslation } from 'react-i18next'

export default function App() {
    const { t } = useTranslation()

    const handleLabelDetectorFormSubmit = (data: LabelDetectorFormType) => {
        console.log(data)
    }

    return (
        <BaseLayout>
            <h1 className="m-4 text-center text-xl">{t("Label detector")}</h1>
            <LabelDetectorForm onSubmit={handleLabelDetectorFormSubmit}/>
            <table className="table w-full max-w-[750px] mx-auto mt-8 border border-gray-500 rounded-lg">
                <thead>
                    <tr className="bg-white text-zinc-950">
                        <th>N°</th>
                        <th>{t('Description')}</th>
                        <th>{t('Score')}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="p-2 border">1</td>
                        <td className="p-2 border">Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
                        <td className="p-2 border">99%</td>
                    </tr>
                </tbody>
            </table>
        </BaseLayout>
    )
}
