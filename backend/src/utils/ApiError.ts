export class ApiError extends Error {
    status: number;

    constructor(message: string, status: number = 500) {
        super(message);
        this.status = status;
    }

    static badRequest(message: string) {
        return new ApiError(message, 400);
    }
}
