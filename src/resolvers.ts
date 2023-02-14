import * as Resolvers from "./__generated__/resolvers.interface";

export const Query: Resolvers.Query.Resolvers = {
  homeChannel: (root, args, context, info) => {
    const channel = Channels.find(({ id }) => id === "c-1");
    return {
      ...channel,
    };
  },
  pinnedChannels: (root, args, context, info) => {
    return [...Channels];
  }
};

export const Channel: Resolvers.Channel.Resolvers = {
  team: (model, args, context, info) => {
    console.log('called team resolver ', model.teamId );
    return Teams.find(({ id }) => id === model.teamId);
  }
};

export const resolvers = {
  Query,
  Channel,
};

const Channels = [
  {
    id: "c-1",
    description: "My best channel",
    teamId: "t-1",
    lastMessageSender: "u-1"
  },
    {
    id: "c-2",
    description: "My best channel",
    teamId: "t-1",
  },
    {
    id: "c-2",
    description: "My best channel",
    teamId: "t-2",
    lastMessageSender: "u-1"
  },
    {
    id: "c-2",
    description: "My best channel",
    teamId: "t-1",
  },
];

const Teams = [
  {
    id: "t-1",
    title: "My Best Team",
  },
    {
    id: "t-2",
    title: "My Second Best Team",
  },
];
