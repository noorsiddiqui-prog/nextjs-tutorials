import { ReactNode } from "react"

export default function DashboardLayout({
    children,
    articles,
    users
}: {
    children: ReactNode,
    articles: ReactNode,
    users: ReactNode
}) {
    return (
        <>
            <div className="">
                <div className="w-64">
                    Dashboard Layout
                </div>
                <div className="">
                    {children}
                </div>
                <div className="">
                    {articles}
                </div>
                <div className="">
                    {users}
                </div>
            </div>
        </>
    )
}