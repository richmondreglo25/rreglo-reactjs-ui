const getUrl = (endpoint: string) => {
    return process.env.API_BASE_URL + endpoint;
}

export const get = async (endpoint: string) => {
    return await fetch(getUrl(endpoint), {
        cache: 'no-store',
        method: 'GET'
    });
}

export const post = async (endpoint: string, data: any) => {
    return await fetch(getUrl(endpoint), {
        ...data,
        cache: 'no-store',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    });
}