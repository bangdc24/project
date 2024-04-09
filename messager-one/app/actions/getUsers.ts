import { Prisma } from "@prisma/client/extension";

import getSession from "./getSession";

const getuser = async () => {
    const session = await getSession();

    if (!session?.user?.email){
        return [];
    }

    try{
        const users = await prisma?.user.findMany({
            orderBy: {
                createdAt: 'desc',
            },
            where: {
                NOT:{
                    email: session.user.email
                }
            }
        });
        return users;
    }catch (error: any){
        return [];
    }

}

export default getSession;