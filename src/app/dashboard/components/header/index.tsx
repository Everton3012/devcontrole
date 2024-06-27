import { Container } from "@/components/container"
import Link from "next/link"

export const DashboardHeader = () => {

return (
    <Container>
        <header className="w-full bg-gray-900 my-4 items-center p-3 rounded flex gap-4">
            <Link className="text-white hover:font-bold duration-300" href={"/dashboard"}>
                Chamados
            </Link>
            <Link className="text-white hover:font-bold duration-300" href={"/dashboard/customer"}>
                Clientes
            </Link>
        </header>
    </Container>
)
}