
import { getErrorMessage } from '@utils/helper';
import { get, post } from '../core';

export const getUsers = async () => {
    const res = await get('/users');
    const result = await res.json();

    if (!res.ok) {
        const message = getErrorMessage(result, res.status);
        return message;
    }

    return result;
}

export const addUser = async (data: any) => {
    const res = await post('/users/add', {
        body: JSON.stringify(data)
    });

    const result = await res.json();

    if (!res.ok) {
        const message = getErrorMessage(result, res.status);
        return message;
    }

    return result;
}