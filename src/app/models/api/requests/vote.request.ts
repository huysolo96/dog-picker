export enum VoteRequestModel {
    LIKE = 1,
    DISLIKE = -1,
    SUPERLIKE = 2
}

export const VoteRequestDictionary = {
    [VoteRequestModel.LIKE]: "like",
    [VoteRequestModel.DISLIKE]: "dislike",
    [VoteRequestModel.SUPERLIKE]: "super like"
}
