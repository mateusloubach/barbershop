"use server"

import { db } from "@/app/_lib/prisma";
import { revalidatePath } from "next/cache";

interface SaveBookingParams {
    userId: string;
    barbershopId: string;
    serviceId: string;
    date: Date;
    
}

export const saveBooking = async (params: SaveBookingParams) => {
    await db.booking.create({
        data: {
            serviceId: params.serviceId,
            userId: params.userId,
            barbershopId: params.barbershopId,
            date: params.date,

        }
    });
    revalidatePath("/");
    revalidatePath("/bookings");
};