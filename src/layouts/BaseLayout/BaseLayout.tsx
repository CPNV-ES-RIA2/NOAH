import {PropsWithChildren} from "react";

type BaseLayoutProps = PropsWithChildren
export default function BaseLayout({children}: BaseLayoutProps) {
    return (
        <>
            <header className="w-full h-16 bg-zinc-950 border-b border-b-gray-500">

            </header>
            <main className={"h-full container mx-auto"}>
                {children}
            </main>
        </>
    )
}
