import { wait } from "@/utils/utils"

export default async function UsersPage() {
    await wait(3000)
    return (
        <div>
            Users Page
        </div>
    )
}