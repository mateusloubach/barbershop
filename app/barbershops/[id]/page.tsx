import { db } from "@/app/_lib/prisma";
import BarbershopInfo from "./_components/barbershop-info";
import ServiceItem from "./_components/service-item";
import { Key } from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

interface BarbershopDetailsPageProps {
    params: {
        id?: string;
    }
}

const BarbershopDetailsPage = async ({params}: BarbershopDetailsPageProps) => {
        const session = await getServerSession(authOptions)
        
        if (!params.id) {
            //TO DO - Redirect to 404
            return null;
        };
    const barbershop = await db.barbershop.findUnique({
        where: {
            id: params.id,
        },
        include: {
            services: true,
        }
    });
        if (!barbershop) {
            //TO DO - Redirect to 404
            return null;
        }
        return ( 
            <div>
                <BarbershopInfo barbershop={barbershop} />

                <div className="px-5 flex flex-col gap-4 py-6">
                    {barbershop.services.map((service: { id: Key | null | undefined; }) => (
                        <ServiceItem key={service.id} barbershop={barbershop} service={service} isAuthenticated={!!session?.user} />

                    ))}
                </div>
            </div>
        )
};
 
export default BarbershopDetailsPage;