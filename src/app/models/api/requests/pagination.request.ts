export type PaginationRequestModel = {
    limit: number;
    page: number;
    order: 'ASC' | 'DESC' | 'RANDOM';
};