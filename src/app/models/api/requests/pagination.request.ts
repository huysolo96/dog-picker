export type PaginationOrderRequestModel = 'ASC' | 'DESC' | 'RANDOM';

export type PaginationRequestModel = {
    limit: number;
    page: number;
    order: PaginationOrderRequestModel;
};