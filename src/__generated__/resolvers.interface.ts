/* eslint-disable */ 
// This file was automatically generated (by @graphitaiton/supermassive) and should not be edited.
import type { PromiseOrValue } from "@graphitation/supermassive";
import type { ResolveInfo } from "@graphitation/supermassive";
import type { Channel, Team } from "./models.interface";
export declare namespace Query {
    export interface Resolvers {
        readonly homeChannel?: homeChannel;
    }
    export type homeChannel = (model: unknown, args: {}, context: unknown, info: ResolveInfo) => PromiseOrValue<Channel | null | undefined>;
}
export declare namespace Channel {
    export interface Resolvers {
        readonly id?: id;
        readonly description?: description;
        readonly team?: team;
    }
    export type id = (model: Channel, args: {}, context: unknown, info: ResolveInfo) => PromiseOrValue<string>;
    export type description = (model: Channel, args: {}, context: unknown, info: ResolveInfo) => PromiseOrValue<string | null | undefined>;
    export type team = (model: Channel, args: {}, context: unknown, info: ResolveInfo) => PromiseOrValue<Team | null | undefined>;
}
export declare namespace Team {
    export interface Resolvers {
        readonly id?: id;
        readonly title?: title;
    }
    export type id = (model: Team, args: {}, context: unknown, info: ResolveInfo) => PromiseOrValue<string>;
    export type title = (model: Team, args: {}, context: unknown, info: ResolveInfo) => PromiseOrValue<string | null | undefined>;
}
