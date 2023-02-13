import * as Resolvers from "./__generated__/resolvers.interface";
import { Types } from './__generated__/legacy-types.interface';

export const Query: Resolvers.Query.Resolvers = {
  homeChannel: (root, args, context) => {
    const channel = Channels.find(({ id }) => id === "c-1");
    return toChannelSchema(channel);
  },
};

export const toChannelSchema = (channel: { id: string, skypeDescription: string, teamId: string}): Types["Channel"] => {
  return {
    id: channel.id, 
    description: channel.skypeDescription,
    team: Teams.find(({ id }) => id === channel.teamId),
  }
}

export const resolvers = {
  Query,
};

const Channels = [
  {
    id: "c-1",
    skypeDescription: "My best channel",
    teamId: "t-1",
  },
];

const Teams = [
  {
    id: "t-1",
    title: "My Best Team",
  },
];
