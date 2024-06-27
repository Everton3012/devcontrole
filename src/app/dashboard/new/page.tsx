import { Container } from "@/components/container";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const NewTicket = async () => {

    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
        redirect("/");
    }

    return(
        <Container>
            <main></main>
        </Container>
    )
}

export default NewTicket;