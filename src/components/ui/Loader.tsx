import {useTranslation} from "react-i18next";

type LoaderProps = {
    isLoading: boolean
}
export default function Loader({ isLoading }: LoaderProps) {
    const { t } = useTranslation()

    if(!isLoading) return null
    return (
        <div className={"w-full h-[100vh] bg-white bg-opacity-40 absolute top-0 left-0 flex justify-center items-center"}>
            <span className={"text-3xl text-black font-bold"}>{t('Loading...')}</span>
        </div>
    )
}
