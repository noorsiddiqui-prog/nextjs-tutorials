import { wait } from "@/utils/utils"
import { ReactNode } from "react"

export default async function DashboardPage({
}: {}) {
    await wait(2000)
    return (
        <>
            <div className="">
                <div className="w-64">
                    Dashboard Page
                </div>
            </div>
        </>
    )
}