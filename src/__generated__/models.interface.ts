/* eslint-disable */ 
// This file was automatically generated (by @graphitaiton/supermassive) and should not be edited.
import type { ChannelModel as _Channel } from "../models";
// Base type for all models. Enables automatic resolution of abstract GraphQL types (interfaces, unions)
export interface BaseModel {
    readonly __typename?: string;
}
export interface Channel extends BaseModel, _Channel {
    readonly __typename?: "Channel";
}
export interface Team extends BaseModel {
    readonly __typename?: "Team";
    readonly id: string;
    readonly title?: string | null;
}
