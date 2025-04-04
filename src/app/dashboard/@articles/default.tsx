import { wait } from "@/utils/utils"

export default async function ArticlesPage() {
    await wait(5000)
    return (
        <div>
            Articles Page
        </div>
    )
}