export const getSuccessMsg = (status: number) => {
    return {
        success: true,
        status: status | 200
    }
}

export const getErrorMsg = (data: any, status: number) => {
    const genericErrMsg = 'Something went wrong.';

    if (status >= 500) {
        return new Error(genericErrMsg);
    }

    if (data?.issues.length) {
        return data.issues[0]?.message;
    }
    else {
        return data?.message;
    }
}

export const throwErrorMsg = (value: any) => {
    if (typeof value === 'object' && value !== null) {
        throw value;
    }
    else {
        return { error: value };
    }
}