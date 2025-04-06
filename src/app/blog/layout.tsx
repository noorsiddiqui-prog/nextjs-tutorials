import { ReactNode } from "react"

export default function BlogLayout({
    children,
    modal
}: {
    children: ReactNode,
    modal?: ReactNode,
}) {
    console.log("blog not getting", children, modal)
    return (
        <>
            <div className="">
                <div className="w-64">
                    Blog Layout
                </div>
                <div className="">
                    {children}
                    {modal}
                </div>
            </div>
        </>
    )
}