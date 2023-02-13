import * as Resolvers from "./__generated__/resolvers.interface";

export const Query: Resolvers.Query.Resolvers = {
  homeChannel: (root, args, context) => {
    const channel = Channels.find(({ id }) => id === "c-1");
    const team = Teams.find(({ id }) => id === channel.teamId);
    return {
      ...channel,
      team: team,
    };
  },
};

export const Channel: Resolvers.Channel.Resolvers = {};

export const resolvers = {
  Query,
};

const Channels = [
  {
    id: "c-1",
    description: "My best channel",
    teamId: "t-1",
  },
];

const Teams = [
  {
    id: "t-1",
    title: "My Best Team",
  },
];
