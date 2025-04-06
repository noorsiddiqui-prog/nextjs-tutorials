import { ReactNode } from "react"

export default function BlogLayout({
    children
}: {
    children: ReactNode,
}) {
    return (
        <>
            <div className="">
                <div className="w-64">
                    Blog Layout
                </div>
                <div className="">
                    {children}
                </div>
            </div>
        </>
    )
}