import { PaginationRequestModel } from "./pagination.request";

export type ImageSearchRequestModel = Partial<PaginationRequestModel & {
    has_breeds: boolean;
    include_categories: boolean;
    include_breeds: boolean;
}>;

