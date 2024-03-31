import { BreadResponseModel } from "./breed.response";

export type ImageMetricResponseModel = {
    imperial: string;
    metric: string;
};


export type ImageResponseModel = {
    id: string;
    url: string;
    width: number;
    height: number;
    breeds: BreadResponseModel[]
};


