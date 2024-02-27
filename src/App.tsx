import LabelDetectorForm from "./forms/LabelDetectorForm.tsx";
import BaseLayout from "./layouts/BaseLayout/BaseLayout.tsx";
import { LabelDetectorFormType } from "./forms/LabelDetectorForm.tsx";

export default function App() {
    const handleLabelDetectorFormSubmit = (data: LabelDetectorFormType) => {
        console.log(data)
    }

    return (
        <BaseLayout>
            <h1 className="m-4 text-center text-xl">Label detector</h1>
            <LabelDetectorForm onSubmit={handleLabelDetectorFormSubmit}/>
        </BaseLayout>
    )
}
