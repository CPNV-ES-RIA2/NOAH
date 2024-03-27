import { Label } from "@/models/label"
import { useTranslation } from "react-i18next"

type LabelsDisplayProps = {
    labels: Label[]
}
export default function LabelsDisplay({ labels }: LabelsDisplayProps) {
    const { t } = useTranslation()

    return (
        <table className="table w-full max-w-[750px] mx-auto mt-8 border border-gray-500 rounded-lg">
            <thead>
                <tr className="bg-white text-zinc-950">
                    <th>N°</th>
                    <th>{t('Description')}</th>
                    <th>{t('Score')}</th>
                </tr>
            </thead>
            <tbody>
                {labels.map((label, index) => (
                    <tr key={index}>
                        <td className="p-2 border">{index}</td>
                        <td className="p-2 border">{label.description}</td>
                        <td className="p-2 border">{label.score}%</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
