const newTask = {
  id: "1",
  name: "New",
};

const open = {
  id: "2",
  name: "Open",
};

const inProgress = {
  id: "3",
  name: "In Progress",
};

const openDeal = {
  id: "4",
  name: "Open Deal",
};

export const boards = [newTask, open, inProgress, openDeal];

export const quotes = [
  {
    id: "1",
    lead_name: {
      name: "Clifford C. Shultz",
      time: "",
      image: require("../../../../public/images/avatar/yellowdog.jpg"),
    },
    contact: {
      email: "CliffordCShultz@rhyta.com",
      phone: "6970978525",
    },
    lead_status: "New",
    lead_source: "Online Store",
    lead_owner: {
      name: "Friest",
      time: "",
      image: require("../../../../public/images/avatar/yellowdog.jpg"),
    },
    board: open,
  },
  {
    id: "2",
    lead_name: {
      name: "Robert I. Millet",
      time: "",
      image: require("../../../../public/images/avatar/yellowdog.jpg"),
    },
    contact: {
      email: "RobertIMillet@teleworm.us",
      phone: "93316404",
    },

    lead_status: "Open",
    lead_source: "External Link",
    lead_owner: {
      name: "Friest",
      time: "",
      image: require("../../../../public/images/avatar/yellowdog.jpg"),
    },
    board: inProgress,
  },
  {
    id: "3",
    lead_name: {
      name: "Clifford C. Shultz",
      time: "",
      image: require("../../../../public/images/avatar/yellowdog.jpg"),
    },
    contact: {
      email: "JoannTJones@jourrapide.com",
      phone: "3052289483",
    },
    lead_status: "Deal Unqualified",
    lead_source: "Online Store",
    lead_owner: {
      name: "Friest",
      time: "",
      image: require("../../../../public/images/avatar/yellowdog.jpg"),
    },
    board: newTask,
  },
  {
    id: "4",
    lead_name: {
      name: "Glenda W. Webb",
      time: "",
      image: require("../../../../public/images/avatar/yellowdog.jpg"),
    },

    contact: {
      email: "GlendaWWebb@dayrep.com",
      phone: "3287863056",
    },

    lead_status: "Bad Timing",
    lead_source: "External Link",
    lead_owner: {
      name: "Friest",
      time: "",
      image: require("../../../../public/images/avatar/yellowdog.jpg"),
    },
    board: open,
  },
  {
    id: "5",
    lead_name: {
      name: "Reginald C. Bell",
      time: "",
      image: require("../../../../public/images/avatar/yellowdog.jpg"),
    },

    contact: {
      email: "ReginaldCBell@rhyta.com",
      phone: "1918686638",
    },

    lead_status: "Attempt to a contact",
    lead_source: "Online Store",
    lead_owner: {
      name: "Friest",
      time: "",
      image: require("../../../../public/images/avatar/yellowdog.jpg"),
    },
    board: openDeal,
  },
  {
    id: "6",
    lead_name: {
      name: "Verna J. Bonilla",
      time: "",
      image: require("../../../../public/images/avatar/yellowdog.jpg"),
    },

    contact: {
      email: "VernaJBonilla@rhyta.com",
      phone: "0477365158",
    },

    lead_status: "Bad Timing",
    lead_source: "Online Store",
    lead_owner: {
      name: "Friest",
      time: "",
      image: require("../../../../public/images/avatar/yellowdog.jpg"),
    },
    board: inProgress,
  },
];

// So we do not have any clashes with our hardcoded ones
let idCount = quotes.length + 1;

export const getQuotes = (count: number) =>
  Array.from({ length: count }, (v, k) => k).map(() => {
    const random = quotes[Math.floor(Math.random() * quotes.length)];

    const custom = {
      ...random,
      id: `G${idCount++}`,
    };

    return custom;
  });

export const getBoards = (count: number) =>
  Array.from({ length: count }, (v, k) => k).map(() => {
    const random = boards[Math.floor(Math.random() * boards.length)];

    const custom = {
      ...random,
      id: `board-${idCount++}`,
    };

    return custom;
  });

const getByBoard = (board: any, items: any) =>
  items.filter((quote: any) => quote.board === board);

export const boardQuoteMap = boards.reduce(
  (previous, board) => ({
    ...previous,
    [board.name]: getByBoard(board, quotes),
  }),
  {}
);

export const generateQuoteMap = (quoteCount: number) =>
  boards.reduce(
    (previous, board) => ({
      ...previous,
      [board.name]: getQuotes(quoteCount / boards.length),
    }),
    {}
  );
