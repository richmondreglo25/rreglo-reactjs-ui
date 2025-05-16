
import { getSuccessMsg, getErrorMsg, throwErrorMsg } from '@utils/helper';
import { get, post, put, remove } from '../core';

interface UserData {
    firstname: string,
    lastname: string
}

export const getUsers = async () => {
    const res = await get('/users');
    const result = await res.json();

    if (!res.ok) {
        return getErrorMsg(result, res.status);
    }

    return result;
}

export const getUser = async (id: string) => {
    const res = await get(`/users/${id}`);
    const result = await res.json();

    if (!res.ok) {
        return getErrorMsg(result, res.status);
    }

    return result;
}

export const addUser = async (data: UserData) => {
    const res = await post('/users/add', {
        body: JSON.stringify(data)
    });

    const result = await res.json();

    if (!res.ok) {
        return getErrorMsg(result, res.status);
    }

    return result;
}

export const editUser = async (id: string, data: UserData) => {
    const res = await put(`/users/update/${id}`, {
        body: JSON.stringify(data)
    })
        .then((res) => getSuccessMsg(res.status))
        .catch((error) => throwErrorMsg(error));

    return res;
}

export const deleteUser = async (id: string) => {
    const res = await remove(`/users/delete/${id}`).
        then((res) => getSuccessMsg(res.status))
        .catch((error) => throwErrorMsg(error));

    return res;
}