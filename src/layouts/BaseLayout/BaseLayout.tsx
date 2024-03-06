import {ChangeEvent, PropsWithChildren} from "react";
import Select from "../../components/ui/Select";
import { useTranslation } from 'react-i18next'

type BaseLayoutProps = PropsWithChildren
export default function BaseLayout({children}: BaseLayoutProps) {

    const { i18n } = useTranslation()

    const handleLangueChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const lang = e.target.value
        i18n.changeLanguage(lang)
    }

    return (
        <>
            <header className="flex justify-between items-center w-full h-16 bg-zinc-950 border-b border-b-gray-500 p-4">
                <span className="text-xl">RIA2</span>
                <Select onChange={handleLangueChange}>
                    <option value="fr">FR</option>
                    <option value="en">EN</option>
                    <option value="de">DE</option>
                </Select>
            </header>
            <main className={"h-full container mx-auto"}>
                {children}
            </main>
        </>
    )
}
