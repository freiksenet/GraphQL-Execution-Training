/* eslint-disable */ 
// This file was automatically generated (by @graphitaiton/supermassive) and should not be edited.
// Base type for all models. Enables automatic resolution of abstract GraphQL types (interfaces, unions)
export interface BaseModel {
    readonly __typename?: string;
}
export interface Channel extends BaseModel {
    readonly __typename?: "Channel";
    readonly id: string;
    readonly description?: string | null;
    readonly team?: Team | null;
}
export interface Team extends BaseModel {
    readonly __typename?: "Team";
    readonly id: string;
    readonly title?: string | null;
}
