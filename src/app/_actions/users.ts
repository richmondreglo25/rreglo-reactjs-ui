"use server";
import { getUsers as _getUsers, getUser as _getUser, addUser as _addUser, editUser as _editUser } from "@api"
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

export const getUser = async (id: string) => {
    try {
        return await _getUser(id);
    }
    catch (error: any) {
        return throwErrorMsg(error);
    }
}

export const addUser = async (data: any) => {
    try {
        const res = await _addUser(data);

        // Reload users data.
        revalidateTag('getUsers');

        return res;
    }
    catch (error: any) {
        return throwErrorMsg(error);
    }
}

export const editUser = async (id: string, data: any) => {
    try {
        const res = await _editUser(id, data);

        // Reload users data.
        revalidateTag('getUsers');

        return res;
    }
    catch (error: any) {
        return throwErrorMsg(error);
    }
}