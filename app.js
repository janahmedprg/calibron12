const PUZZLE = {
  width: 56,
  height: 56,
  pieces: [
    [21, 14],
    [17, 14],
    [21, 18],
    [32, 10],
    [21, 14],
    [10, 7],
    [14, 4],
    [21, 18],
    [28, 6],
    [28, 14],
    [32, 11],
    [28, 7],
  ],
  colors: [
    "#E4572E",
    "#2E86AB",
    "#F3A712",
    "#5B8C5A",
    "#A23B72",
    "#3B60E4",
    "#FF7F50",
    "#6D597A",
    "#00A6A6",
    "#c83dc1",
    "#7CB518",
    "#9C6644",
  ],
};

const TRACE_DATA = {
  trace: [
    { type: "start", depth: 0, placedCount: 0 },
    {
      type: "try",
      id: 1,
      row: 0,
      col: 0,
      height: 21,
      width: 14,
      depth: 0,
      placedCount: 0,
    },
    {
      type: "place",
      id: 1,
      row: 0,
      col: 0,
      height: 21,
      width: 14,
      depth: 1,
      placedCount: 1,
    },
    {
      type: "try",
      id: 2,
      row: 0,
      col: 14,
      height: 17,
      width: 14,
      depth: 1,
      placedCount: 1,
    },
    {
      type: "place",
      id: 2,
      row: 0,
      col: 14,
      height: 17,
      width: 14,
      depth: 2,
      placedCount: 2,
    },
    {
      type: "remove",
      id: 2,
      row: 0,
      col: 14,
      height: 17,
      width: 14,
      depth: 1,
      placedCount: 1,
      exploredAttempts: 514788,
      exploredPlacements: 81084,
      exploredBacktracks: 81085,
    },
    {
      type: "try",
      id: -2,
      row: 0,
      col: 14,
      height: 14,
      width: 17,
      depth: 1,
      placedCount: 1,
    },
    {
      type: "place",
      id: -2,
      row: 0,
      col: 14,
      height: 14,
      width: 17,
      depth: 2,
      placedCount: 2,
    },
    {
      type: "remove",
      id: -2,
      row: 0,
      col: 14,
      height: 14,
      width: 17,
      depth: 1,
      placedCount: 1,
      exploredAttempts: 153606,
      exploredPlacements: 21994,
      exploredBacktracks: 21995,
    },
    {
      type: "try",
      id: 3,
      row: 0,
      col: 14,
      height: 21,
      width: 18,
      depth: 1,
      placedCount: 1,
    },
    {
      type: "place",
      id: 3,
      row: 0,
      col: 14,
      height: 21,
      width: 18,
      depth: 2,
      placedCount: 2,
    },
    {
      type: "remove",
      id: 3,
      row: 0,
      col: 14,
      height: 21,
      width: 18,
      depth: 1,
      placedCount: 1,
      exploredAttempts: 582630,
      exploredPlacements: 86595,
      exploredBacktracks: 86596,
    },
    {
      type: "try",
      id: -3,
      row: 0,
      col: 14,
      height: 18,
      width: 21,
      depth: 1,
      placedCount: 1,
    },
    {
      type: "place",
      id: -3,
      row: 0,
      col: 14,
      height: 18,
      width: 21,
      depth: 2,
      placedCount: 2,
    },
    {
      type: "remove",
      id: -3,
      row: 0,
      col: 14,
      height: 18,
      width: 21,
      depth: 1,
      placedCount: 1,
      exploredAttempts: 619126,
      exploredPlacements: 92825,
      exploredBacktracks: 92826,
    },
    {
      type: "try",
      id: 4,
      row: 0,
      col: 14,
      height: 32,
      width: 10,
      depth: 1,
      placedCount: 1,
    },
    {
      type: "place",
      id: 4,
      row: 0,
      col: 14,
      height: 32,
      width: 10,
      depth: 2,
      placedCount: 2,
    },
    {
      type: "try",
      id: 2,
      row: 0,
      col: 24,
      height: 17,
      width: 14,
      depth: 2,
      placedCount: 2,
    },
    {
      type: "place",
      id: 2,
      row: 0,
      col: 24,
      height: 17,
      width: 14,
      depth: 3,
      placedCount: 3,
    },
    {
      type: "remove",
      id: 2,
      row: 0,
      col: 24,
      height: 17,
      width: 14,
      depth: 2,
      placedCount: 2,
      exploredAttempts: 20922,
      exploredPlacements: 2975,
      exploredBacktracks: 2976,
    },
    {
      type: "try",
      id: -2,
      row: 0,
      col: 24,
      height: 14,
      width: 17,
      depth: 2,
      placedCount: 2,
    },
    {
      type: "place",
      id: -2,
      row: 0,
      col: 24,
      height: 14,
      width: 17,
      depth: 3,
      placedCount: 3,
    },
    {
      type: "remove",
      id: -2,
      row: 0,
      col: 24,
      height: 14,
      width: 17,
      depth: 2,
      placedCount: 2,
      exploredAttempts: 3196,
      exploredPlacements: 457,
      exploredBacktracks: 458,
    },
    {
      type: "try",
      id: 3,
      row: 0,
      col: 24,
      height: 21,
      width: 18,
      depth: 2,
      placedCount: 2,
    },
    {
      type: "place",
      id: 3,
      row: 0,
      col: 24,
      height: 21,
      width: 18,
      depth: 3,
      placedCount: 3,
    },
    {
      type: "remove",
      id: 3,
      row: 0,
      col: 24,
      height: 21,
      width: 18,
      depth: 2,
      placedCount: 2,
      exploredAttempts: 48728,
      exploredPlacements: 7113,
      exploredBacktracks: 7114,
    },
    {
      type: "try",
      id: -3,
      row: 0,
      col: 24,
      height: 18,
      width: 21,
      depth: 2,
      placedCount: 2,
    },
    {
      type: "place",
      id: -3,
      row: 0,
      col: 24,
      height: 18,
      width: 21,
      depth: 3,
      placedCount: 3,
    },
    {
      type: "remove",
      id: -3,
      row: 0,
      col: 24,
      height: 18,
      width: 21,
      depth: 2,
      placedCount: 2,
      exploredAttempts: 12670,
      exploredPlacements: 1828,
      exploredBacktracks: 1829,
    },
    {
      type: "try",
      id: 5,
      row: 0,
      col: 24,
      height: 21,
      width: 14,
      depth: 2,
      placedCount: 2,
    },
    {
      type: "place",
      id: 5,
      row: 0,
      col: 24,
      height: 21,
      width: 14,
      depth: 3,
      placedCount: 3,
    },
    {
      type: "remove",
      id: 5,
      row: 0,
      col: 24,
      height: 21,
      width: 14,
      depth: 2,
      placedCount: 2,
      exploredAttempts: 59160,
      exploredPlacements: 8681,
      exploredBacktracks: 8682,
    },
    {
      type: "try",
      id: -5,
      row: 0,
      col: 24,
      height: 14,
      width: 21,
      depth: 2,
      placedCount: 2,
    },
    {
      type: "place",
      id: -5,
      row: 0,
      col: 24,
      height: 14,
      width: 21,
      depth: 3,
      placedCount: 3,
    },
    {
      type: "remove",
      id: -5,
      row: 0,
      col: 24,
      height: 14,
      width: 21,
      depth: 2,
      placedCount: 2,
      exploredAttempts: 15532,
      exploredPlacements: 2317,
      exploredBacktracks: 2318,
    },
    {
      type: "try",
      id: 6,
      row: 0,
      col: 24,
      height: 10,
      width: 7,
      depth: 2,
      placedCount: 2,
    },
    {
      type: "place",
      id: 6,
      row: 0,
      col: 24,
      height: 10,
      width: 7,
      depth: 3,
      placedCount: 3,
    },
    {
      type: "remove",
      id: 6,
      row: 0,
      col: 24,
      height: 10,
      width: 7,
      depth: 2,
      placedCount: 2,
      exploredAttempts: 4954,
      exploredPlacements: 506,
      exploredBacktracks: 507,
    },
    {
      type: "try",
      id: -6,
      row: 0,
      col: 24,
      height: 7,
      width: 10,
      depth: 2,
      placedCount: 2,
    },
    {
      type: "place",
      id: -6,
      row: 0,
      col: 24,
      height: 7,
      width: 10,
      depth: 3,
      placedCount: 3,
    },
    {
      type: "remove",
      id: -6,
      row: 0,
      col: 24,
      height: 7,
      width: 10,
      depth: 2,
      placedCount: 2,
      exploredAttempts: 1174,
      exploredPlacements: 86,
      exploredBacktracks: 87,
    },
    {
      type: "try",
      id: 7,
      row: 0,
      col: 24,
      height: 14,
      width: 4,
      depth: 2,
      placedCount: 2,
    },
    {
      type: "place",
      id: 7,
      row: 0,
      col: 24,
      height: 14,
      width: 4,
      depth: 3,
      placedCount: 3,
    },
    {
      type: "remove",
      id: 7,
      row: 0,
      col: 24,
      height: 14,
      width: 4,
      depth: 2,
      placedCount: 2,
      exploredAttempts: 23274,
      exploredPlacements: 2685,
      exploredBacktracks: 2686,
    },
    {
      type: "try",
      id: -7,
      row: 0,
      col: 24,
      height: 4,
      width: 14,
      depth: 2,
      placedCount: 2,
    },
    {
      type: "place",
      id: -7,
      row: 0,
      col: 24,
      height: 4,
      width: 14,
      depth: 3,
      placedCount: 3,
    },
    {
      type: "remove",
      id: -7,
      row: 0,
      col: 24,
      height: 4,
      width: 14,
      depth: 2,
      placedCount: 2,
      exploredAttempts: 15686,
      exploredPlacements: 2305,
      exploredBacktracks: 2306,
    },
    {
      type: "try",
      id: 8,
      row: 0,
      col: 24,
      height: 21,
      width: 18,
      depth: 2,
      placedCount: 2,
    },
    {
      type: "place",
      id: 8,
      row: 0,
      col: 24,
      height: 21,
      width: 18,
      depth: 3,
      placedCount: 3,
    },
    {
      type: "remove",
      id: 8,
      row: 0,
      col: 24,
      height: 21,
      width: 18,
      depth: 2,
      placedCount: 2,
      exploredAttempts: 48728,
      exploredPlacements: 7113,
      exploredBacktracks: 7114,
    },
    {
      type: "try",
      id: -8,
      row: 0,
      col: 24,
      height: 18,
      width: 21,
      depth: 2,
      placedCount: 2,
    },
    {
      type: "place",
      id: -8,
      row: 0,
      col: 24,
      height: 18,
      width: 21,
      depth: 3,
      placedCount: 3,
    },
    {
      type: "remove",
      id: -8,
      row: 0,
      col: 24,
      height: 18,
      width: 21,
      depth: 2,
      placedCount: 2,
      exploredAttempts: 12670,
      exploredPlacements: 1828,
      exploredBacktracks: 1829,
    },
    {
      type: "try",
      id: 9,
      row: 0,
      col: 24,
      height: 28,
      width: 6,
      depth: 2,
      placedCount: 2,
    },
    {
      type: "place",
      id: 9,
      row: 0,
      col: 24,
      height: 28,
      width: 6,
      depth: 3,
      placedCount: 3,
    },
    {
      type: "remove",
      id: 9,
      row: 0,
      col: 24,
      height: 28,
      width: 6,
      depth: 2,
      placedCount: 2,
      exploredAttempts: 2242,
      exploredPlacements: 167,
      exploredBacktracks: 168,
    },
    {
      type: "try",
      id: -9,
      row: 0,
      col: 24,
      height: 6,
      width: 28,
      depth: 2,
      placedCount: 2,
    },
    {
      type: "place",
      id: -9,
      row: 0,
      col: 24,
      height: 6,
      width: 28,
      depth: 3,
      placedCount: 3,
    },
    {
      type: "remove",
      id: -9,
      row: 0,
      col: 24,
      height: 6,
      width: 28,
      depth: 2,
      placedCount: 2,
      exploredAttempts: 2084,
      exploredPlacements: 183,
      exploredBacktracks: 184,
    },
    {
      type: "try",
      id: 10,
      row: 0,
      col: 24,
      height: 28,
      width: 14,
      depth: 2,
      placedCount: 2,
    },
    {
      type: "place",
      id: 10,
      row: 0,
      col: 24,
      height: 28,
      width: 14,
      depth: 3,
      placedCount: 3,
    },
    {
      type: "remove",
      id: 10,
      row: 0,
      col: 24,
      height: 28,
      width: 14,
      depth: 2,
      placedCount: 2,
      exploredAttempts: 14596,
      exploredPlacements: 1864,
      exploredBacktracks: 1865,
    },
    {
      type: "try",
      id: -10,
      row: 0,
      col: 24,
      height: 14,
      width: 28,
      depth: 2,
      placedCount: 2,
    },
    {
      type: "place",
      id: -10,
      row: 0,
      col: 24,
      height: 14,
      width: 28,
      depth: 3,
      placedCount: 3,
    },
    {
      type: "remove",
      id: -10,
      row: 0,
      col: 24,
      height: 14,
      width: 28,
      depth: 2,
      placedCount: 2,
      exploredAttempts: 11550,
      exploredPlacements: 1435,
      exploredBacktracks: 1436,
    },
    {
      type: "try",
      id: 11,
      row: 0,
      col: 24,
      height: 32,
      width: 11,
      depth: 2,
      placedCount: 2,
    },
    {
      type: "place",
      id: 11,
      row: 0,
      col: 24,
      height: 32,
      width: 11,
      depth: 3,
      placedCount: 3,
    },
    {
      type: "remove",
      id: 11,
      row: 0,
      col: 24,
      height: 32,
      width: 11,
      depth: 2,
      placedCount: 2,
      exploredAttempts: 72504,
      exploredPlacements: 11344,
      exploredBacktracks: 11345,
    },
    {
      type: "try",
      id: -11,
      row: 0,
      col: 24,
      height: 11,
      width: 32,
      depth: 2,
      placedCount: 2,
    },
    {
      type: "place",
      id: -11,
      row: 0,
      col: 24,
      height: 11,
      width: 32,
      depth: 3,
      placedCount: 3,
    },
    {
      type: "try",
      id: 2,
      row: 11,
      col: 24,
      height: 17,
      width: 14,
      depth: 3,
      placedCount: 3,
    },
    {
      type: "place",
      id: 2,
      row: 11,
      col: 24,
      height: 17,
      width: 14,
      depth: 4,
      placedCount: 4,
    },
    {
      type: "remove",
      id: 2,
      row: 11,
      col: 24,
      height: 17,
      width: 14,
      depth: 3,
      placedCount: 3,
      exploredAttempts: 4864,
      exploredPlacements: 662,
      exploredBacktracks: 663,
    },
    {
      type: "try",
      id: -2,
      row: 11,
      col: 24,
      height: 14,
      width: 17,
      depth: 3,
      placedCount: 3,
    },
    {
      type: "place",
      id: -2,
      row: 11,
      col: 24,
      height: 14,
      width: 17,
      depth: 4,
      placedCount: 4,
    },
    {
      type: "remove",
      id: -2,
      row: 11,
      col: 24,
      height: 14,
      width: 17,
      depth: 3,
      placedCount: 3,
      exploredAttempts: 296,
      exploredPlacements: 22,
      exploredBacktracks: 23,
    },
    {
      type: "try",
      id: 3,
      row: 11,
      col: 24,
      height: 21,
      width: 18,
      depth: 3,
      placedCount: 3,
    },
    {
      type: "place",
      id: 3,
      row: 11,
      col: 24,
      height: 21,
      width: 18,
      depth: 4,
      placedCount: 4,
    },
    {
      type: "try",
      id: 2,
      row: 11,
      col: 42,
      height: 17,
      width: 14,
      depth: 4,
      placedCount: 4,
    },
    {
      type: "place",
      id: 2,
      row: 11,
      col: 42,
      height: 17,
      width: 14,
      depth: 5,
      placedCount: 5,
    },
    {
      type: "try",
      id: 5,
      row: 21,
      col: 0,
      height: 21,
      width: 14,
      depth: 5,
      placedCount: 5,
    },
    {
      type: "place",
      id: 5,
      row: 21,
      col: 0,
      height: 21,
      width: 14,
      depth: 6,
      placedCount: 6,
    },
    {
      type: "try",
      id: 6,
      row: 28,
      col: 42,
      height: 10,
      width: 7,
      depth: 6,
      placedCount: 6,
    },
    {
      type: "place",
      id: 6,
      row: 28,
      col: 42,
      height: 10,
      width: 7,
      depth: 7,
      placedCount: 7,
    },
    {
      type: "try",
      id: 7,
      row: 28,
      col: 49,
      height: 14,
      width: 4,
      depth: 7,
      placedCount: 7,
    },
    {
      type: "place",
      id: 7,
      row: 28,
      col: 49,
      height: 14,
      width: 4,
      depth: 8,
      placedCount: 8,
    },
    {
      type: "remove",
      id: 7,
      row: 28,
      col: 49,
      height: 14,
      width: 4,
      depth: 7,
      placedCount: 7,
      exploredAttempts: 8,
      exploredPlacements: 0,
      exploredBacktracks: 1,
    },
    {
      type: "try",
      id: -7,
      row: 28,
      col: 49,
      height: 4,
      width: 14,
      depth: 7,
      placedCount: 7,
    },
    {
      type: "reject",
      id: -7,
      row: 28,
      col: 49,
      height: 4,
      width: 14,
      depth: 7,
      placedCount: 7,
    },
    {
      type: "try",
      id: 8,
      row: 28,
      col: 49,
      height: 21,
      width: 18,
      depth: 7,
      placedCount: 7,
    },
    {
      type: "reject",
      id: 8,
      row: 28,
      col: 49,
      height: 21,
      width: 18,
      depth: 7,
      placedCount: 7,
    },
    {
      type: "try",
      id: -8,
      row: 28,
      col: 49,
      height: 18,
      width: 21,
      depth: 7,
      placedCount: 7,
    },
    {
      type: "reject",
      id: -8,
      row: 28,
      col: 49,
      height: 18,
      width: 21,
      depth: 7,
      placedCount: 7,
    },
    {
      type: "try",
      id: 9,
      row: 28,
      col: 49,
      height: 28,
      width: 6,
      depth: 7,
      placedCount: 7,
    },
    {
      type: "place",
      id: 9,
      row: 28,
      col: 49,
      height: 28,
      width: 6,
      depth: 8,
      placedCount: 8,
    },
    {
      type: "remove",
      id: 9,
      row: 28,
      col: 49,
      height: 28,
      width: 6,
      depth: 7,
      placedCount: 7,
      exploredAttempts: 8,
      exploredPlacements: 0,
      exploredBacktracks: 1,
    },
    {
      type: "try",
      id: -9,
      row: 28,
      col: 49,
      height: 6,
      width: 28,
      depth: 7,
      placedCount: 7,
    },
    {
      type: "reject",
      id: -9,
      row: 28,
      col: 49,
      height: 6,
      width: 28,
      depth: 7,
      placedCount: 7,
    },
    {
      type: "try",
      id: 10,
      row: 28,
      col: 49,
      height: 28,
      width: 14,
      depth: 7,
      placedCount: 7,
    },
    {
      type: "reject",
      id: 10,
      row: 28,
      col: 49,
      height: 28,
      width: 14,
      depth: 7,
      placedCount: 7,
    },
    {
      type: "try",
      id: -10,
      row: 28,
      col: 49,
      height: 14,
      width: 28,
      depth: 7,
      placedCount: 7,
    },
    {
      type: "reject",
      id: -10,
      row: 28,
      col: 49,
      height: 14,
      width: 28,
      depth: 7,
      placedCount: 7,
    },
    {
      type: "try",
      id: 12,
      row: 28,
      col: 49,
      height: 28,
      width: 7,
      depth: 7,
      placedCount: 7,
    },
    {
      type: "place",
      id: 12,
      row: 28,
      col: 49,
      height: 28,
      width: 7,
      depth: 8,
      placedCount: 8,
    },
    {
      type: "try",
      id: 7,
      row: 32,
      col: 14,
      height: 14,
      width: 4,
      depth: 8,
      placedCount: 8,
    },
    {
      type: "place",
      id: 7,
      row: 32,
      col: 14,
      height: 14,
      width: 4,
      depth: 9,
      placedCount: 9,
    },
    {
      type: "remove",
      id: 7,
      row: 32,
      col: 14,
      height: 14,
      width: 4,
      depth: 8,
      placedCount: 8,
      exploredAttempts: 14,
      exploredPlacements: 2,
      exploredBacktracks: 3,
    },
    {
      type: "try",
      id: -7,
      row: 32,
      col: 14,
      height: 4,
      width: 14,
      depth: 8,
      placedCount: 8,
    },
    {
      type: "place",
      id: -7,
      row: 32,
      col: 14,
      height: 4,
      width: 14,
      depth: 9,
      placedCount: 9,
    },
    {
      type: "remove",
      id: -7,
      row: 32,
      col: 14,
      height: 4,
      width: 14,
      depth: 8,
      placedCount: 8,
      exploredAttempts: 6,
      exploredPlacements: 0,
      exploredBacktracks: 1,
    },
    {
      type: "try",
      id: 8,
      row: 32,
      col: 14,
      height: 21,
      width: 18,
      depth: 8,
      placedCount: 8,
    },
    {
      type: "place",
      id: 8,
      row: 32,
      col: 14,
      height: 21,
      width: 18,
      depth: 9,
      placedCount: 9,
    },
    {
      type: "remove",
      id: 8,
      row: 32,
      col: 14,
      height: 21,
      width: 18,
      depth: 8,
      placedCount: 8,
      exploredAttempts: 10,
      exploredPlacements: 1,
      exploredBacktracks: 2,
    },
    {
      type: "try",
      id: -8,
      row: 32,
      col: 14,
      height: 18,
      width: 21,
      depth: 8,
      placedCount: 8,
    },
    {
      type: "place",
      id: -8,
      row: 32,
      col: 14,
      height: 18,
      width: 21,
      depth: 9,
      placedCount: 9,
    },
    {
      type: "remove",
      id: -8,
      row: 32,
      col: 14,
      height: 18,
      width: 21,
      depth: 8,
      placedCount: 8,
      exploredAttempts: 10,
      exploredPlacements: 1,
      exploredBacktracks: 2,
    },
    {
      type: "try",
      id: 9,
      row: 32,
      col: 14,
      height: 28,
      width: 6,
      depth: 8,
      placedCount: 8,
    },
    {
      type: "reject",
      id: 9,
      row: 32,
      col: 14,
      height: 28,
      width: 6,
      depth: 8,
      placedCount: 8,
    },
    {
      type: "try",
      id: -9,
      row: 32,
      col: 14,
      height: 6,
      width: 28,
      depth: 8,
      placedCount: 8,
    },
    {
      type: "place",
      id: -9,
      row: 32,
      col: 14,
      height: 6,
      width: 28,
      depth: 9,
      placedCount: 9,
    },
    {
      type: "try",
      id: 7,
      row: 38,
      col: 14,
      height: 14,
      width: 4,
      depth: 9,
      placedCount: 9,
    },
    {
      type: "place",
      id: 7,
      row: 38,
      col: 14,
      height: 14,
      width: 4,
      depth: 10,
      placedCount: 10,
    },
    {
      type: "remove",
      id: 7,
      row: 38,
      col: 14,
      height: 14,
      width: 4,
      depth: 9,
      placedCount: 9,
      exploredAttempts: 8,
      exploredPlacements: 2,
      exploredBacktracks: 3,
    },
    {
      type: "try",
      id: -7,
      row: 38,
      col: 14,
      height: 4,
      width: 14,
      depth: 9,
      placedCount: 9,
    },
    {
      type: "place",
      id: -7,
      row: 38,
      col: 14,
      height: 4,
      width: 14,
      depth: 10,
      placedCount: 10,
    },
    {
      type: "try",
      id: 8,
      row: 38,
      col: 28,
      height: 21,
      width: 18,
      depth: 10,
      placedCount: 10,
    },
    {
      type: "reject",
      id: 8,
      row: 38,
      col: 28,
      height: 21,
      width: 18,
      depth: 10,
      placedCount: 10,
    },
    {
      type: "try",
      id: -8,
      row: 38,
      col: 28,
      height: 18,
      width: 21,
      depth: 10,
      placedCount: 10,
    },
    {
      type: "place",
      id: -8,
      row: 38,
      col: 28,
      height: 18,
      width: 21,
      depth: 11,
      placedCount: 11,
    },
    {
      type: "try",
      id: 10,
      row: 42,
      col: 0,
      height: 28,
      width: 14,
      depth: 11,
      placedCount: 11,
    },
    {
      type: "reject",
      id: 10,
      row: 42,
      col: 0,
      height: 28,
      width: 14,
      depth: 11,
      placedCount: 11,
    },
    {
      type: "try",
      id: -10,
      row: 42,
      col: 0,
      height: 14,
      width: 28,
      depth: 11,
      placedCount: 11,
    },
    {
      type: "place",
      id: -10,
      row: 42,
      col: 0,
      height: 14,
      width: 28,
      depth: 12,
      placedCount: 12,
    },
    { type: "solution", depth: 12, placedCount: 12 },
  ],
  stats: { attempts: 2245095, placements: 336117, backtracks: 336105 },
};

const boardElement = document.getElementById("board");
const stepCounter = document.getElementById("stepCounter");
const statusText = document.getElementById("statusText");
const speedText = document.getElementById("speedText");
const depthBadge = document.getElementById("depthBadge");
const modeText = document.getElementById("modeText");
const eventTitle = document.getElementById("eventTitle");
const eventDescription = document.getElementById("eventDescription");
const pieceMeta = document.getElementById("pieceMeta");
const positionMeta = document.getElementById("positionMeta");
const footprintMeta = document.getElementById("footprintMeta");
const placedMeta = document.getElementById("placedMeta");
const eventLog = document.getElementById("eventLog");
const timeline = document.getElementById("timeline");
const showStepsBtn = document.getElementById("showStepsBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");
const pieceTray = document.getElementById("pieceTray");
const pieceSelect = document.getElementById("pieceSelect");
const rotateBtn = document.getElementById("rotateBtn");
const clearSetupBtn = document.getElementById("clearSetupBtn");
const setupHint = document.getElementById("setupHint");
const speedButtons = [...document.querySelectorAll("#speedGrid button")];

const boardState = Array.from({ length: PUZZLE.height }, () =>
  Array(PUZZLE.width).fill(0),
);
const cells = [];
let trace = [];
let traceIndex = 0;
let playbackTimer = null;
let playbackDelay = 550;
let isPlaying = false;
let solutionFound = false;
let solverStats = null;
let selectedPieceId = 1;
let selectedRotated = false;
let setupState = createEmptySetupState();
let traceBaseline = createEmptySetupState();
let usingCustomSetup = false;
let dragContext = null;
let selectedBoardPieceNumber = null;

function createEmptySetupState() {
  return {
    board: Array.from({ length: PUZZLE.height }, () =>
      Array(PUZZLE.width).fill(0),
    ),
    placements: [],
    placedPieces: Array(PUZZLE.pieces.length + 1).fill(false),
  };
}

function cloneSetupState(state) {
  return {
    board: state.board.map((row) => [...row]),
    placements: state.placements.map((placement) => ({ ...placement })),
    placedPieces: [...state.placedPieces],
  };
}

function buildBoard() {
  const fragment = document.createDocumentFragment();
  for (let row = 0; row < PUZZLE.height; row += 1) {
    const cellRow = [];
    for (let col = 0; col < PUZZLE.width; col += 1) {
      const cell = document.createElement("div");
      cell.className = "cell";
      cell.dataset.row = row;
      cell.dataset.col = col;
      if ((col + 1) % 7 === 0 && col !== PUZZLE.width - 1) {
        cell.style.borderRightWidth = "3px";
        cell.style.borderRightColor = "rgba(83, 60, 38, 0.38)";
      }
      if ((row + 1) % 7 === 0 && row !== PUZZLE.height - 1) {
        cell.style.borderBottomWidth = "3px";
        cell.style.borderBottomColor = "rgba(83, 60, 38, 0.38)";
      }
      cell.addEventListener("click", handleBoardClick);
      cell.addEventListener("dragover", handleBoardDragOver);
      cell.addEventListener("dragleave", handleBoardDragLeave);
      cell.addEventListener("drop", handleBoardDrop);
      cell.addEventListener("dragstart", handleBoardDragStart);
      cell.addEventListener("dragend", handleBoardDragEnd);
      fragment.appendChild(cell);
      cellRow.push(cell);
    }
    cells.push(cellRow);
  }
  boardElement.appendChild(fragment);
}

function getFootprint(id) {
  const [height, width] = PUZZLE.pieces[Math.abs(id) - 1];
  return id < 0 ? { height: width, width: height } : { height, width };
}

function getNextEmptyPos(board) {
  for (let row = 0; row < PUZZLE.height; row += 1) {
    for (let col = 0; col < PUZZLE.width; col += 1) {
      if (board[row][col] === 0) {
        return { row, col };
      }
    }
  }
  return { row: -1, col: -1 };
}

function clearPreviewClasses() {
  cells.flat().forEach((cell) => {
    cell.classList.remove("trying", "rejected", "removing");
    cell.classList.remove("drop-target", "drop-invalid");
  });
}

function clearBoardSelection() {
  selectedBoardPieceNumber = null;
}

function syncBoardFrom(sourceBoard) {
  for (let row = 0; row < PUZZLE.height; row += 1) {
    for (let col = 0; col < PUZZLE.width; col += 1) {
      boardState[row][col] = sourceBoard[row][col];
    }
  }
}

function markRegion(row, col, height, width, className) {
  for (let r = row; r < row + height; r += 1) {
    for (let c = col; c < col + width; c += 1) {
      const cell = cells[r]?.[c];
      if (cell) {
        cell.classList.add(className);
      }
    }
  }
}

function syncBoard() {
  for (let row = 0; row < PUZZLE.height; row += 1) {
    for (let col = 0; col < PUZZLE.width; col += 1) {
      const id = boardState[row][col];
      const cell = cells[row][col];
      if (id === 0) {
        cell.className = "cell";
        cell.style.background = "";
        cell.draggable = false;
      } else {
        cell.className = "cell filled";
        cell.style.background = PUZZLE.colors[id - 1];
        if (selectedBoardPieceNumber === id) {
          cell.classList.add("selected-piece");
        }
        cell.draggable = traceIndex === 0 && !isPlaying;
      }
    }
  }
}

function getPlacementForCell(state, row, col) {
  const id = state.board[row][col];
  if (id === 0) {
    return null;
  }
  return (
    state.placements.find((placement) => {
      const samePiece = Math.abs(placement.id) === id;
      const inRow =
        row >= placement.row && row < placement.row + placement.height;
      const inCol =
        col >= placement.col && col < placement.col + placement.width;
      return samePiece && inRow && inCol;
    }) ?? null
  );
}

function getPlacementByPiece(state, pieceNumber) {
  return (
    state.placements.find(
      (placement) => Math.abs(placement.id) === pieceNumber,
    ) ?? null
  );
}

function canPlaceOnBoard(board, row, col, id) {
  const { height, width } = getFootprint(id);
  if (row + height > PUZZLE.height || col + width > PUZZLE.width) {
    return { canPlace: false, height, width };
  }
  for (let r = row; r < row + height; r += 1) {
    for (let c = col; c < col + width; c += 1) {
      if (board[r][c] !== 0) {
        return { canPlace: false, height, width };
      }
    }
  }
  return { canPlace: true, height, width };
}

function placeIntoSetup(state, row, col, id) {
  const probe = canPlaceOnBoard(state.board, row, col, id);
  if (!probe.canPlace || state.placedPieces[Math.abs(id)]) {
    return false;
  }

  for (let r = row; r < row + probe.height; r += 1) {
    for (let c = col; c < col + probe.width; c += 1) {
      state.board[r][c] = Math.abs(id);
    }
  }

  state.placements.push({
    id,
    row,
    col,
    height: probe.height,
    width: probe.width,
  });
  state.placedPieces[Math.abs(id)] = true;
  return true;
}

function removeFromSetup(state, pieceNumber) {
  const placementIndex = state.placements.findIndex(
    (placement) => Math.abs(placement.id) === pieceNumber,
  );
  if (placementIndex === -1) {
    return false;
  }

  const placement = state.placements[placementIndex];
  for (let r = placement.row; r < placement.row + placement.height; r += 1) {
    for (let c = placement.col; c < placement.col + placement.width; c += 1) {
      state.board[r][c] = 0;
    }
  }

  state.placements.splice(placementIndex, 1);
  state.placedPieces[pieceNumber] = false;
  return true;
}

function canPlacePlacementAt(state, placement, row, col) {
  const tempBoard = state.board.map((boardRow) => [...boardRow]);
  for (let r = placement.row; r < placement.row + placement.height; r += 1) {
    for (let c = placement.col; c < placement.col + placement.width; c += 1) {
      tempBoard[r][c] = 0;
    }
  }
  return canPlaceOnBoard(tempBoard, row, col, placement.id);
}

function movePlacedPiece(state, pieceNumber, row, col) {
  const placement = getPlacementByPiece(state, pieceNumber);
  if (!placement) {
    return false;
  }

  const probe = canPlacePlacementAt(state, placement, row, col);
  if (!probe.canPlace) {
    return false;
  }

  for (let r = placement.row; r < placement.row + placement.height; r += 1) {
    for (let c = placement.col; c < placement.col + placement.width; c += 1) {
      state.board[r][c] = 0;
    }
  }

  placement.row = row;
  placement.col = col;
  placement.height = probe.height;
  placement.width = probe.width;

  for (let r = row; r < row + placement.height; r += 1) {
    for (let c = col; c < col + placement.width; c += 1) {
      state.board[r][c] = pieceNumber;
    }
  }

  return true;
}

function describeEvent(step) {
  const pieceText = step.id
    ? `Piece ${Math.abs(step.id)}${step.id < 0 ? " rotated" : ""}`
    : "Solver";
  const positionText =
    typeof step.row === "number" && typeof step.col === "number"
      ? `at (${step.row}, ${step.col})`
      : "";

  switch (step.type) {
    case "start":
      return {
        title: "DFS trace ready",
        description:
          "The solver begins exploring piece placements from the first empty square.",
      };
    case "try":
      return {
        title: `Trying ${pieceText}`,
        description: `${pieceText} is being tested ${positionText} with a ${step.height} x ${step.width} footprint.`,
      };
    case "reject":
      return {
        title: `Rejected ${pieceText}`,
        description: `${pieceText} cannot fit ${positionText} because it would overlap an existing piece or leave the board.`,
      };
    case "place":
      return {
        title: `Placed ${pieceText}`,
        description: `${pieceText} was successfully placed ${positionText}. DFS now moves to the next empty cell.`,
      };
    case "remove":
      return {
        title: `Backtracking ${pieceText}`,
        description: `${pieceText} is removed from ${positionText} after deeper DFS branches failed. ${step.exploredAttempts ?? 0} hidden attempts were explored beneath this move.`,
      };
    case "solution":
      return {
        title: "Solution found",
        description: `All 12 rectangles have been placed. The condensed player covers ${solverStats?.attempts ?? 0} total orientation checks and ${solverStats?.backtracks ?? 0} backtracks in a watchable trace.`,
      };
    default:
      return {
        title: "DFS event",
        description: "The solver is exploring the search tree.",
      };
  }
}

function updatePiecePicker() {
  pieceSelect.innerHTML = "";
  for (let id = 1; id <= PUZZLE.pieces.length; id += 1) {
    if (setupState.placedPieces[id]) {
      continue;
    }
    const [height, width] = PUZZLE.pieces[id - 1];
    const option = document.createElement("option");
    option.value = String(id);
    option.textContent = `Piece ${id} (${height}x${width})`;
    if (id === selectedPieceId) {
      option.selected = true;
    }
    pieceSelect.appendChild(option);
  }

  if (!pieceSelect.options.length) {
    const option = document.createElement("option");
    option.textContent = "All pieces placed";
    option.value = "";
    pieceSelect.appendChild(option);
  } else if (
    ![...pieceSelect.options].some(
      (option) => Number(option.value) === selectedPieceId,
    )
  ) {
    selectedPieceId = Number(pieceSelect.options[0].value);
    pieceSelect.value = pieceSelect.options[0].value;
  }
}

function renderPieceTray() {
  pieceTray.innerHTML = "";

  for (let id = 1; id <= PUZZLE.pieces.length; id += 1) {
    if (setupState.placedPieces[id]) {
      continue;
    }

    const [baseHeight, baseWidth] = PUZZLE.pieces[id - 1];
    const previewHeight =
      selectedPieceId === id && selectedRotated ? baseWidth : baseHeight;
    const previewWidth =
      selectedPieceId === id && selectedRotated ? baseHeight : baseWidth;
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "piece-chip";
    chip.draggable = true;
    chip.dataset.pieceId = String(id);
    chip.style.color = PUZZLE.colors[id - 1];

    if (id === selectedPieceId) {
      chip.classList.add("selected");
    }

    chip.innerHTML = `
      <div class="piece-chip-label">
        <strong>P${id}</strong>
        <span>${previewHeight}x${previewWidth}</span>
      </div>
    `;

    const preview = document.createElement("div");
    preview.className = "piece-chip-preview";
    preview.style.gridTemplateColumns = `repeat(${Math.min(previewWidth, 8)}, 8px)`;

    const rows = Math.min(previewHeight, 8);
    const cols = Math.min(previewWidth, 8);
    for (let index = 0; index < rows * cols; index += 1) {
      preview.appendChild(document.createElement("span"));
    }
    chip.appendChild(preview);

    chip.addEventListener("click", () => {
      clearBoardSelection();
      selectedPieceId = id;
      pieceSelect.value = String(id);
      renderPieceTray();
      updateSetupHint();
    });

    chip.addEventListener("dragstart", (event) => {
      if (traceIndex !== 0 || isPlaying) {
        event.preventDefault();
        return;
      }
      clearBoardSelection();
      dragContext = { type: "tray", pieceId: id };
      selectedPieceId = id;
      pieceSelect.value = String(id);
      chip.classList.add("dragging");
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text/plain", String(id));
      updateSetupHint(
        `Dragging Piece ${id}${selectedRotated ? " rotated" : ""}. Drop it on a top-left board cell.`,
      );
    });

    chip.addEventListener("dragend", () => {
      dragContext = null;
      chip.classList.remove("dragging");
      clearPreviewClasses();
      updateSetupHint();
    });

    pieceTray.appendChild(chip);
  }
}

function updateSetupHint(message) {
  if (selectedBoardPieceNumber !== null) {
    const placement = getPlacementByPiece(setupState, selectedBoardPieceNumber);
    if (placement) {
      setupHint.textContent =
        message ??
        `Selected placed Piece ${selectedBoardPieceNumber}. Drag it to a new top-left cell, use arrow keys to nudge it, or press Delete to remove it.`;
      return;
    }
  }
  const footprint = getFootprint(
    selectedRotated ? -selectedPieceId : selectedPieceId,
  );
  const orientation = selectedRotated ? "rotated" : "default";
  setupHint.textContent =
    message ??
    `Selected Piece ${selectedPieceId} in ${orientation} orientation (${footprint.height}x${footprint.width}). Click or drop on a top-left board cell to place it. Click a placed piece to select it for moving.`;
}

function refreshSetupUI(message) {
  updatePiecePicker();
  renderPieceTray();
  syncBoardFrom(setupState.board);
  syncBoard();
  clearPreviewClasses();
  placedMeta.textContent = `${setupState.placements.length} / ${PUZZLE.pieces.length}`;
  modeText.textContent = isPlaying ? "Mode: Playback" : "Mode: Setup";
  updateSetupHint(message);
}

function restoreBaselineBoard() {
  syncBoardFrom(traceBaseline.board);
  syncBoard();
  clearPreviewClasses();
}

function getCurrentPlacementId() {
  return selectedRotated ? -selectedPieceId : selectedPieceId;
}

function tryPlaceSelectedPiece(row, col) {
  if (!pieceSelect.value) {
    updateSetupHint(
      "All pieces are already on the board. Remove one to keep editing.",
    );
    return false;
  }

  const id = getCurrentPlacementId();
  if (!placeIntoSetup(setupState, row, col, id)) {
    updateSetupHint(
      `Piece ${selectedPieceId} cannot be placed with its top-left corner at (${row}, ${col}).`,
    );
    return false;
  }

  usingCustomSetup = true;
  clearBoardSelection();
  traceBaseline = cloneSetupState(setupState);
  refreshSetupUI(
    `Placed Piece ${selectedPieceId}${selectedRotated ? " rotated" : ""} at (${row}, ${col}).`,
  );
  return true;
}

function moveSelectedBoardPieceBy(deltaRow, deltaCol) {
  if (selectedBoardPieceNumber === null) {
    return false;
  }

  const placement = getPlacementByPiece(setupState, selectedBoardPieceNumber);
  if (!placement) {
    clearBoardSelection();
    refreshSetupUI();
    return false;
  }

  const nextRow = placement.row + deltaRow;
  const nextCol = placement.col + deltaCol;
  if (
    !movePlacedPiece(setupState, selectedBoardPieceNumber, nextRow, nextCol)
  ) {
    updateSetupHint(
      `Piece ${selectedBoardPieceNumber} cannot move to (${nextRow}, ${nextCol}).`,
    );
    return false;
  }

  usingCustomSetup = true;
  traceBaseline = cloneSetupState(setupState);
  refreshSetupUI(
    `Moved Piece ${selectedBoardPieceNumber} to (${nextRow}, ${nextCol}).`,
  );
  return true;
}

function renderLog(activeIndex) {
  const start = Math.max(0, activeIndex - 5);
  const end = Math.min(trace.length, activeIndex + 1);
  const items = trace.slice(start, end);

  eventLog.innerHTML = "";
  items.forEach((step, offset) => {
    const item = document.createElement("li");
    const actualIndex = start + offset;
    if (actualIndex === activeIndex) {
      item.classList.add("current");
    }
    item.innerHTML = `
      <span class="event-kind">${step.type.toUpperCase()}</span>
      <div>${describeEvent(step).description}</div>
    `;
    eventLog.appendChild(item);
  });
}

function updateMeta(step) {
  const description = describeEvent(step);
  eventTitle.textContent = description.title;
  eventDescription.textContent = description.description;
  pieceMeta.textContent = step.id
    ? `${Math.abs(step.id)}${step.id < 0 ? " (rotated)" : ""}`
    : "-";
  positionMeta.textContent =
    typeof step.row === "number" ? `(${step.row}, ${step.col})` : "-";
  footprintMeta.textContent = step.width
    ? `${step.height} x ${step.width}`
    : "-";
  placedMeta.textContent = `${step.placedCount ?? 0} / ${PUZZLE.pieces.length}`;
  depthBadge.textContent = `Depth ${step.depth ?? 0}`;
}

function applyStep(step) {
  clearPreviewClasses();

  if (step.type === "place") {
    for (let row = step.row; row < step.row + step.height; row += 1) {
      for (let col = step.col; col < step.col + step.width; col += 1) {
        boardState[row][col] = Math.abs(step.id);
      }
    }
  }

  if (step.type === "remove") {
    for (let row = step.row; row < step.row + step.height; row += 1) {
      for (let col = step.col; col < step.col + step.width; col += 1) {
        boardState[row][col] = 0;
      }
    }
  }

  syncBoard();

  if (step.type === "try") {
    markRegion(step.row, step.col, step.height, step.width, "trying");
  }
  if (step.type === "reject") {
    markRegion(step.row, step.col, step.height, step.width, "rejected");
  }
  if (step.type === "remove") {
    markRegion(step.row, step.col, step.height, step.width, "removing");
  }

  stepCounter.textContent = `${traceIndex} / ${trace.length}`;
  statusText.textContent = describeEvent(step).title;
  renderLog(traceIndex - 1);
  updateMeta(step);
  timeline.value = traceIndex;

  if (step.type === "solution") {
    speedText.textContent = "Solved";
  }
}

function playNextStep() {
  if (!isPlaying) {
    return;
  }

  if (traceIndex >= trace.length) {
    isPlaying = false;
    speedText.textContent = solutionFound ? "Solved" : "Paused";
    showStepsBtn.textContent = "Replay DFS Steps";
    return;
  }

  const step = trace[traceIndex];
  traceIndex += 1;
  applyStep(step);
  solutionFound = step.type === "solution";
  playbackTimer = window.setTimeout(playNextStep, playbackDelay);
}

function startPlayback() {
  if (!isPlaying) {
    const generated = usingCustomSetup
      ? generateTraceFromSetup(setupState)
      : { trace: TRACE_DATA.trace, stats: TRACE_DATA.stats };
    if (!generated.trace.length) {
      statusText.textContent = "No solution from this setup";
      eventTitle.textContent = "Dead end";
      eventDescription.textContent =
        "The current manual placement blocks all remaining DFS branches. Remove or rotate a piece and try again.";
      return;
    }
    trace = generated.trace;
    solverStats = generated.stats;
    traceBaseline = cloneSetupState(setupState);
    timeline.max = trace.length;
    stepCounter.textContent = `0 / ${trace.length}`;
  }

  if (traceIndex >= trace.length) {
    resetPlayback();
  }
  if (isPlaying) {
    return;
  }
  isPlaying = true;
  clearBoardSelection();
  syncBoard();
  speedText.textContent = `${playbackDelay}ms / step`;
  modeText.textContent = "Mode: Playback";
  showStepsBtn.textContent =
    traceIndex === 0 ? "Playing DFS Steps" : "Resume DFS Steps";
  playNextStep();
}

function pausePlayback() {
  isPlaying = false;
  window.clearTimeout(playbackTimer);
  speedText.textContent = solutionFound ? "Solved" : "Paused";
  showStepsBtn.textContent =
    traceIndex === 0 ? "Show DFS Steps" : "Resume DFS Steps";
  modeText.textContent = "Mode: Setup";
}

function resetPlayback() {
  pausePlayback();
  traceIndex = 0;
  solutionFound = false;
  restoreBaselineBoard();
  timeline.value = 0;
  stepCounter.textContent = `0 / ${trace.length}`;
  statusText.textContent = "Trace reset";
  speedText.textContent = "Paused";
  depthBadge.textContent = "Depth 0";
  eventTitle.textContent = "Ready to replay";
  eventDescription.textContent =
    "Press the button to animate the DFS search from the current setup board.";
  pieceMeta.textContent = "-";
  positionMeta.textContent = "-";
  footprintMeta.textContent = "-";
  placedMeta.textContent = `${traceBaseline.placements.length} / ${PUZZLE.pieces.length}`;
  renderLog(-1);
}

function loadTrace() {
  solverStats = TRACE_DATA.stats;
  return TRACE_DATA.trace;
}

function generateTraceFromSetup(initialState) {
  const board = initialState.board.map((row) => [...row]);
  const placedPieces = [...initialState.placedPieces];
  const placedOrder = initialState.placements.map((placement) => ({
    ...placement,
  }));

  const introStep = {
    type: "start",
    depth: placedOrder.length,
    placedCount: placedOrder.length,
  };

  function makeStep(type, id, row, col, height, width, extra = {}) {
    return {
      type,
      id,
      row,
      col,
      height,
      width,
      depth: placedOrder.length,
      placedCount: placedOrder.length,
      ...extra,
    };
  }

  function canPlace(row, col, id) {
    return canPlaceOnBoard(board, row, col, id);
  }

  function placePiece(row, col, id, height, width) {
    for (let r = row; r < row + height; r += 1) {
      for (let c = col; c < col + width; c += 1) {
        board[r][c] = Math.abs(id);
      }
    }
    placedOrder.push({ id, row, col, height, width });
    placedPieces[Math.abs(id)] = true;
  }

  function removeLastPiece() {
    const last = placedOrder.pop();
    for (let r = last.row; r < last.row + last.height; r += 1) {
      for (let c = last.col; c < last.col + last.width; c += 1) {
        board[r][c] = 0;
      }
    }
    placedPieces[Math.abs(last.id)] = false;
    return last;
  }

  function searchAt(xy) {
    const localTrace = [];
    let attempts = 0;
    let placements = 0;
    let backtracks = 0;

    for (let i = 1; i < placedPieces.length; i += 1) {
      if (placedPieces[i]) {
        continue;
      }

      for (const id of [i, -i]) {
        const probe = canPlace(xy.row, xy.col, id);
        const tryStep = makeStep(
          "try",
          id,
          xy.row,
          xy.col,
          probe.height,
          probe.width,
        );
        attempts += 1;

        if (!probe.canPlace) {
          localTrace.push(
            tryStep,
            makeStep("reject", id, xy.row, xy.col, probe.height, probe.width),
          );
          continue;
        }

        placePiece(xy.row, xy.col, id, probe.height, probe.width);
        placements += 1;

        const placeStep = {
          type: "place",
          id,
          row: xy.row,
          col: xy.col,
          height: probe.height,
          width: probe.width,
          depth: placedOrder.length,
          placedCount: placedOrder.length,
        };

        if (placedOrder.length === PUZZLE.pieces.length) {
          return {
            success: true,
            trace: [
              ...localTrace,
              tryStep,
              placeStep,
              {
                type: "solution",
                depth: placedOrder.length,
                placedCount: placedOrder.length,
              },
            ],
            attempts,
            placements,
            backtracks,
          };
        }

        const child = searchAt(getNextEmptyPos(board));
        attempts += child.attempts;
        placements += child.placements;
        backtracks += child.backtracks;

        if (child.success) {
          return {
            success: true,
            trace: [...localTrace, tryStep, placeStep, ...child.trace],
            attempts,
            placements,
            backtracks,
          };
        }

        const removed = removeLastPiece();
        backtracks += 1;
        localTrace.push(
          tryStep,
          placeStep,
          makeStep(
            "remove",
            removed.id,
            removed.row,
            removed.col,
            removed.height,
            removed.width,
            {
              exploredAttempts: child.attempts,
              exploredPlacements: child.placements,
              exploredBacktracks: child.backtracks + 1,
            },
          ),
        );
      }
    }

    return { success: false, trace: [], attempts, placements, backtracks };
  }

  if (placedOrder.length === PUZZLE.pieces.length) {
    return {
      trace: [
        introStep,
        {
          type: "solution",
          depth: placedOrder.length,
          placedCount: placedOrder.length,
        },
      ],
      stats: { attempts: 0, placements: placedOrder.length, backtracks: 0 },
    };
  }

  const result = searchAt(getNextEmptyPos(board));
  if (!result.success) {
    return {
      trace: [],
      stats: {
        attempts: result.attempts,
        placements: result.placements,
        backtracks: result.backtracks,
      },
    };
  }

  return {
    trace: [introStep, ...result.trace],
    stats: {
      attempts: result.attempts,
      placements: result.placements,
      backtracks: result.backtracks,
    },
  };
}

function jumpToStep(targetIndex) {
  pausePlayback();
  restoreBaselineBoard();

  traceIndex = 0;
  for (let i = 0; i < targetIndex; i += 1) {
    const step = trace[i];
    traceIndex = i + 1;
    applyStep(step);
  }

  if (targetIndex === 0) {
    resetPlayback();
  }
}

function handleBoardClick(event) {
  if (isPlaying) {
    return;
  }

  if (traceIndex !== 0) {
    updateSetupHint("Reset the playback before editing the board setup.");
    return;
  }

  const row = Number(event.currentTarget.dataset.row);
  const col = Number(event.currentTarget.dataset.col);
  const existingPlacement = getPlacementForCell(setupState, row, col);

  if (existingPlacement) {
    const pieceNumber = Math.abs(existingPlacement.id);
    if (selectedBoardPieceNumber === pieceNumber) {
      removeFromSetup(setupState, pieceNumber);
      clearBoardSelection();
      usingCustomSetup = setupState.placements.length > 0;
      traceBaseline = cloneSetupState(setupState);
      refreshSetupUI(`Removed Piece ${pieceNumber} from the setup board.`);
      return;
    }

    selectedBoardPieceNumber = pieceNumber;
    updateSetupHint(
      `Selected placed Piece ${pieceNumber}. Drag it, use arrow keys to move it, or click it again to remove it.`,
    );
    syncBoard();
    boardElement.focus();
    return;
  }

  clearBoardSelection();
  tryPlaceSelectedPiece(row, col);
}

function handleBoardDragOver(event) {
  if (traceIndex !== 0 || isPlaying || dragContext === null) {
    return;
  }

  event.preventDefault();
  const row = Number(event.currentTarget.dataset.row);
  const col = Number(event.currentTarget.dataset.col);
  let probe;

  if (dragContext.type === "board") {
    const placement = getPlacementByPiece(setupState, dragContext.pieceNumber);
    if (!placement) {
      return;
    }
    probe = canPlacePlacementAt(setupState, placement, row, col);
  } else {
    const id = getCurrentPlacementId();
    probe = canPlaceOnBoard(setupState.board, row, col, id);
  }

  clearPreviewClasses();
  markRegion(
    row,
    col,
    probe.height,
    probe.width,
    probe.canPlace ? "drop-target" : "drop-invalid",
  );
}

function handleBoardDragLeave() {
  clearPreviewClasses();
}

function handleBoardDrop(event) {
  if (traceIndex !== 0 || isPlaying || dragContext === null) {
    return;
  }

  event.preventDefault();
  clearPreviewClasses();

  const row = Number(event.currentTarget.dataset.row);
  const col = Number(event.currentTarget.dataset.col);
  if (dragContext.type === "board") {
    const moved = movePlacedPiece(
      setupState,
      dragContext.pieceNumber,
      row,
      col,
    );
    if (moved) {
      selectedBoardPieceNumber = dragContext.pieceNumber;
      usingCustomSetup = true;
      traceBaseline = cloneSetupState(setupState);
      refreshSetupUI(
        `Moved Piece ${dragContext.pieceNumber} to (${row}, ${col}).`,
      );
    } else {
      refreshSetupUI(
        `Piece ${dragContext.pieceNumber} cannot be moved to (${row}, ${col}).`,
      );
    }
  } else {
    tryPlaceSelectedPiece(row, col);
  }
  dragContext = null;
}

function handleBoardDragStart(event) {
  if (traceIndex !== 0 || isPlaying) {
    event.preventDefault();
    return;
  }

  const row = Number(event.currentTarget.dataset.row);
  const col = Number(event.currentTarget.dataset.col);
  const placement = getPlacementForCell(setupState, row, col);
  if (!placement) {
    event.preventDefault();
    return;
  }

  const pieceNumber = Math.abs(placement.id);
  selectedBoardPieceNumber = pieceNumber;
  dragContext = { type: "board", pieceNumber };
  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.setData("text/plain", `board:${pieceNumber}`);
  syncBoard();
  updateSetupHint(
    `Dragging placed Piece ${pieceNumber}. Drop it on a new top-left cell.`,
  );
}

function handleBoardDragEnd() {
  dragContext = null;
  clearPreviewClasses();
  updateSetupHint();
}

function handleBoardKeydown(event) {
  if (traceIndex !== 0 || isPlaying || selectedBoardPieceNumber === null) {
    return;
  }

  const moves = {
    ArrowUp: [-1, 0],
    ArrowDown: [1, 0],
    ArrowLeft: [0, -1],
    ArrowRight: [0, 1],
  };

  if (event.key in moves) {
    event.preventDefault();
    const [deltaRow, deltaCol] = moves[event.key];
    moveSelectedBoardPieceBy(deltaRow, deltaCol);
    return;
  }

  if (event.key === "Delete" || event.key === "Backspace") {
    event.preventDefault();
    const pieceNumber = selectedBoardPieceNumber;
    if (removeFromSetup(setupState, pieceNumber)) {
      clearBoardSelection();
      usingCustomSetup = setupState.placements.length > 0;
      traceBaseline = cloneSetupState(setupState);
      refreshSetupUI(`Removed Piece ${pieceNumber} from the setup board.`);
    }
    return;
  }

  if (event.key === "Escape") {
    clearBoardSelection();
    syncBoard();
    updateSetupHint("Piece selection cleared.");
  }
}

function bindEvents() {
  showStepsBtn.addEventListener("click", startPlayback);
  pauseBtn.addEventListener("click", pausePlayback);
  resetBtn.addEventListener("click", resetPlayback);
  pieceSelect.addEventListener("change", (event) => {
    clearBoardSelection();
    selectedPieceId = Number(event.target.value || 1);
    renderPieceTray();
    updateSetupHint();
  });
  rotateBtn.addEventListener("click", () => {
    clearBoardSelection();
    selectedRotated = !selectedRotated;
    renderPieceTray();
    updateSetupHint();
  });
  clearSetupBtn.addEventListener("click", () => {
    pausePlayback();
    setupState = createEmptySetupState();
    traceBaseline = cloneSetupState(setupState);
    usingCustomSetup = false;
    trace = loadTrace();
    timeline.max = trace.length;
    traceIndex = 0;
    clearBoardSelection();
    refreshSetupUI("Manual setup cleared. You are back to the empty board.");
    resetPlayback();
  });

  speedButtons.forEach((button) => {
    button.addEventListener("click", () => {
      speedButtons.forEach((candidate) => candidate.classList.remove("active"));
      button.classList.add("active");
      playbackDelay = Number(button.dataset.speed);
      speedText.textContent = isPlaying
        ? `${playbackDelay}ms / step`
        : "Paused";
    });
  });

  timeline.addEventListener("input", (event) => {
    jumpToStep(Number(event.target.value));
  });

  boardElement.addEventListener("keydown", handleBoardKeydown);
}

function init() {
  boardElement.tabIndex = 0;
  buildBoard();
  trace = loadTrace();
  traceBaseline = cloneSetupState(setupState);
  timeline.max = trace.length;
  stepCounter.textContent = `0 / ${trace.length}`;
  statusText.textContent = `Trace computed (${solverStats.attempts.toLocaleString()} attempts)`;
  eventTitle.textContent = "Ready to replay";
  eventDescription.textContent =
    "Place pieces manually, or press the button to animate the condensed DFS search from the current board.";
  refreshSetupUI();
  renderLog(-1);
  bindEvents();
}

init();
