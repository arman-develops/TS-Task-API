interface TaskAPIResponse<T = any> {
    success: Boolean;
    data?: T;
    message?: string;
    error?: string
}

export {TaskAPIResponse}