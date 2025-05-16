const getUrl = (endpoint: string) => {
    return process.env.API_BASE_URL + endpoint;
}

const getAuth = async () => {
    const token = {
        value: 'cookie'
    };
    return { Authorization: `${token?.value}` }
}

export const get = async (endpoint: string) => {
    return await fetch(getUrl(endpoint), {
        cache: 'no-store',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            ...await getAuth()
        }
    });
}

export const post = async (endpoint: string, data: any) => {
    return await fetch(getUrl(endpoint), {
        ...data,
        cache: 'no-store',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            ...await getAuth()
        }
    });
}

export const postMultipart = async (endpoint: string, data: any) => {
    return await fetch(getUrl(endpoint), {
        ...data,
        cache: 'no-store',
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data',
            ...await getAuth()
        }
    });
}

export const put = async (endpoint: string, data: any) => {
    return await fetch(getUrl(endpoint), {
        ...data,
        cache: 'no-store',
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            ...await getAuth()
        }
    });
}

// 'delete' cannot be called on an identifier in strict mode.
export const remove = async (endpoint: string) => {
    return await fetch(getUrl(endpoint), {
        method: 'DELETE',
        headers: {
            'Content-Type': 'text/plain',
            ...await getAuth()
        }
    });
}