
export type BreadMetricResponseModel = {
    imperial: string;
    metric: string
};
export type BreadResponseModel = {
    id: number;
    name: string;
    bred_for: string;
    breed_group: string;
    life_span: string;
    temperament: string;
    origin: string;
    reference_image_id: string;
} & Record<"height" | "weight", BreadMetricResponseModel>;
