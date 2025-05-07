export const getUsers = async () => {
    // No cache.
    const res = await fetch(process.env.API_BASE_URL + '/users', { cache: 'no-store' });
    // Revalidate every 10 secs.
    // const res = await fetch(process.env.API_BASE_URL + '/users', { next: { revalidate: 10 } });

    const result = await res.json();

    if (!res.ok) {
        throw new Error('Unable to get users');
    }

    return result;
}