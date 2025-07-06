import { PrismaClient } from "@/generated/prisma";
import { NextResponse } from "next/server";

const prisma = new PrismaClient()

export async function GET(){
    try{
        console.log("api vidoess start");
        
        const videos=await prisma.video.findMany({
            orderBy:{createdAt:"desc"}
            
        })
        console.log("api videos",videos);
        
        return NextResponse.json(videos)
    }
    catch (error){
        console.log(error)
        return NextResponse.json({error:"Error fetching videos"},
            {status:500}
        )
    }
    finally{
        await prisma.$disconnect()
    }
}