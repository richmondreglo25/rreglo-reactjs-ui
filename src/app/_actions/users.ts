"use server";
import { getUsers as _getUsers, addUser as _addUser } from "@api"
import { revalidateTag } from "next/cache";
import { throwErrorMsg } from "@utils/helper";

export const getUsers = async () => {
    try {
        return await _getUsers();
    }
    catch (error: any) {
        return throwErrorMsg(error);
    }
}

export const addUser = async (data: any) => {

    try {
        const res = await _addUser({
            firstname: data.get('firstname'),
            lastname: data.get('lastname')
        });

        // Reload users data.
        revalidateTag('getUsers');

        return res;
    }
    catch (error: any) {
        console.log('34543535353535');
        console.log(error);
        console.log('34543535353535');
        return throwErrorMsg(error);
    }
}