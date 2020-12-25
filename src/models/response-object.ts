

export type Validation = {
    code: string,
    message: string
}

export class ResponseObject<T> {
    code: string;
    data: T | null;
    success: boolean;
    message: string;
    validations: Validation[]
    /**
     *
     */
    constructor() {
        this.code = '';
        this.data = null;
        this.success = false;
        this.message = '';
        this.validations = [];
    }
}