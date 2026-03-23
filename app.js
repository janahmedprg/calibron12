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
    "#C8553D",
    "#7CB518",
    "#9C6644",
  ],
};

const TRACE_DATA = {"trace":[{"type":"start","depth":0,"placedCount":0},{"type":"try","id":1,"row":0,"col":0,"height":21,"width":14,"depth":0,"placedCount":0},{"type":"place","id":1,"row":0,"col":0,"height":21,"width":14,"depth":1,"placedCount":1},{"type":"try","id":2,"row":0,"col":14,"height":17,"width":14,"depth":1,"placedCount":1},{"type":"place","id":2,"row":0,"col":14,"height":17,"width":14,"depth":2,"placedCount":2},{"type":"remove","id":2,"row":0,"col":14,"height":17,"width":14,"depth":1,"placedCount":1,"exploredAttempts":514788,"exploredPlacements":81084,"exploredBacktracks":81085},{"type":"try","id":-2,"row":0,"col":14,"height":14,"width":17,"depth":1,"placedCount":1},{"type":"place","id":-2,"row":0,"col":14,"height":14,"width":17,"depth":2,"placedCount":2},{"type":"remove","id":-2,"row":0,"col":14,"height":14,"width":17,"depth":1,"placedCount":1,"exploredAttempts":153606,"exploredPlacements":21994,"exploredBacktracks":21995},{"type":"try","id":3,"row":0,"col":14,"height":21,"width":18,"depth":1,"placedCount":1},{"type":"place","id":3,"row":0,"col":14,"height":21,"width":18,"depth":2,"placedCount":2},{"type":"remove","id":3,"row":0,"col":14,"height":21,"width":18,"depth":1,"placedCount":1,"exploredAttempts":582630,"exploredPlacements":86595,"exploredBacktracks":86596},{"type":"try","id":-3,"row":0,"col":14,"height":18,"width":21,"depth":1,"placedCount":1},{"type":"place","id":-3,"row":0,"col":14,"height":18,"width":21,"depth":2,"placedCount":2},{"type":"remove","id":-3,"row":0,"col":14,"height":18,"width":21,"depth":1,"placedCount":1,"exploredAttempts":619126,"exploredPlacements":92825,"exploredBacktracks":92826},{"type":"try","id":4,"row":0,"col":14,"height":32,"width":10,"depth":1,"placedCount":1},{"type":"place","id":4,"row":0,"col":14,"height":32,"width":10,"depth":2,"placedCount":2},{"type":"try","id":2,"row":0,"col":24,"height":17,"width":14,"depth":2,"placedCount":2},{"type":"place","id":2,"row":0,"col":24,"height":17,"width":14,"depth":3,"placedCount":3},{"type":"remove","id":2,"row":0,"col":24,"height":17,"width":14,"depth":2,"placedCount":2,"exploredAttempts":20922,"exploredPlacements":2975,"exploredBacktracks":2976},{"type":"try","id":-2,"row":0,"col":24,"height":14,"width":17,"depth":2,"placedCount":2},{"type":"place","id":-2,"row":0,"col":24,"height":14,"width":17,"depth":3,"placedCount":3},{"type":"remove","id":-2,"row":0,"col":24,"height":14,"width":17,"depth":2,"placedCount":2,"exploredAttempts":3196,"exploredPlacements":457,"exploredBacktracks":458},{"type":"try","id":3,"row":0,"col":24,"height":21,"width":18,"depth":2,"placedCount":2},{"type":"place","id":3,"row":0,"col":24,"height":21,"width":18,"depth":3,"placedCount":3},{"type":"remove","id":3,"row":0,"col":24,"height":21,"width":18,"depth":2,"placedCount":2,"exploredAttempts":48728,"exploredPlacements":7113,"exploredBacktracks":7114},{"type":"try","id":-3,"row":0,"col":24,"height":18,"width":21,"depth":2,"placedCount":2},{"type":"place","id":-3,"row":0,"col":24,"height":18,"width":21,"depth":3,"placedCount":3},{"type":"remove","id":-3,"row":0,"col":24,"height":18,"width":21,"depth":2,"placedCount":2,"exploredAttempts":12670,"exploredPlacements":1828,"exploredBacktracks":1829},{"type":"try","id":5,"row":0,"col":24,"height":21,"width":14,"depth":2,"placedCount":2},{"type":"place","id":5,"row":0,"col":24,"height":21,"width":14,"depth":3,"placedCount":3},{"type":"remove","id":5,"row":0,"col":24,"height":21,"width":14,"depth":2,"placedCount":2,"exploredAttempts":59160,"exploredPlacements":8681,"exploredBacktracks":8682},{"type":"try","id":-5,"row":0,"col":24,"height":14,"width":21,"depth":2,"placedCount":2},{"type":"place","id":-5,"row":0,"col":24,"height":14,"width":21,"depth":3,"placedCount":3},{"type":"remove","id":-5,"row":0,"col":24,"height":14,"width":21,"depth":2,"placedCount":2,"exploredAttempts":15532,"exploredPlacements":2317,"exploredBacktracks":2318},{"type":"try","id":6,"row":0,"col":24,"height":10,"width":7,"depth":2,"placedCount":2},{"type":"place","id":6,"row":0,"col":24,"height":10,"width":7,"depth":3,"placedCount":3},{"type":"remove","id":6,"row":0,"col":24,"height":10,"width":7,"depth":2,"placedCount":2,"exploredAttempts":4954,"exploredPlacements":506,"exploredBacktracks":507},{"type":"try","id":-6,"row":0,"col":24,"height":7,"width":10,"depth":2,"placedCount":2},{"type":"place","id":-6,"row":0,"col":24,"height":7,"width":10,"depth":3,"placedCount":3},{"type":"remove","id":-6,"row":0,"col":24,"height":7,"width":10,"depth":2,"placedCount":2,"exploredAttempts":1174,"exploredPlacements":86,"exploredBacktracks":87},{"type":"try","id":7,"row":0,"col":24,"height":14,"width":4,"depth":2,"placedCount":2},{"type":"place","id":7,"row":0,"col":24,"height":14,"width":4,"depth":3,"placedCount":3},{"type":"remove","id":7,"row":0,"col":24,"height":14,"width":4,"depth":2,"placedCount":2,"exploredAttempts":23274,"exploredPlacements":2685,"exploredBacktracks":2686},{"type":"try","id":-7,"row":0,"col":24,"height":4,"width":14,"depth":2,"placedCount":2},{"type":"place","id":-7,"row":0,"col":24,"height":4,"width":14,"depth":3,"placedCount":3},{"type":"remove","id":-7,"row":0,"col":24,"height":4,"width":14,"depth":2,"placedCount":2,"exploredAttempts":15686,"exploredPlacements":2305,"exploredBacktracks":2306},{"type":"try","id":8,"row":0,"col":24,"height":21,"width":18,"depth":2,"placedCount":2},{"type":"place","id":8,"row":0,"col":24,"height":21,"width":18,"depth":3,"placedCount":3},{"type":"remove","id":8,"row":0,"col":24,"height":21,"width":18,"depth":2,"placedCount":2,"exploredAttempts":48728,"exploredPlacements":7113,"exploredBacktracks":7114},{"type":"try","id":-8,"row":0,"col":24,"height":18,"width":21,"depth":2,"placedCount":2},{"type":"place","id":-8,"row":0,"col":24,"height":18,"width":21,"depth":3,"placedCount":3},{"type":"remove","id":-8,"row":0,"col":24,"height":18,"width":21,"depth":2,"placedCount":2,"exploredAttempts":12670,"exploredPlacements":1828,"exploredBacktracks":1829},{"type":"try","id":9,"row":0,"col":24,"height":28,"width":6,"depth":2,"placedCount":2},{"type":"place","id":9,"row":0,"col":24,"height":28,"width":6,"depth":3,"placedCount":3},{"type":"remove","id":9,"row":0,"col":24,"height":28,"width":6,"depth":2,"placedCount":2,"exploredAttempts":2242,"exploredPlacements":167,"exploredBacktracks":168},{"type":"try","id":-9,"row":0,"col":24,"height":6,"width":28,"depth":2,"placedCount":2},{"type":"place","id":-9,"row":0,"col":24,"height":6,"width":28,"depth":3,"placedCount":3},{"type":"remove","id":-9,"row":0,"col":24,"height":6,"width":28,"depth":2,"placedCount":2,"exploredAttempts":2084,"exploredPlacements":183,"exploredBacktracks":184},{"type":"try","id":10,"row":0,"col":24,"height":28,"width":14,"depth":2,"placedCount":2},{"type":"place","id":10,"row":0,"col":24,"height":28,"width":14,"depth":3,"placedCount":3},{"type":"remove","id":10,"row":0,"col":24,"height":28,"width":14,"depth":2,"placedCount":2,"exploredAttempts":14596,"exploredPlacements":1864,"exploredBacktracks":1865},{"type":"try","id":-10,"row":0,"col":24,"height":14,"width":28,"depth":2,"placedCount":2},{"type":"place","id":-10,"row":0,"col":24,"height":14,"width":28,"depth":3,"placedCount":3},{"type":"remove","id":-10,"row":0,"col":24,"height":14,"width":28,"depth":2,"placedCount":2,"exploredAttempts":11550,"exploredPlacements":1435,"exploredBacktracks":1436},{"type":"try","id":11,"row":0,"col":24,"height":32,"width":11,"depth":2,"placedCount":2},{"type":"place","id":11,"row":0,"col":24,"height":32,"width":11,"depth":3,"placedCount":3},{"type":"remove","id":11,"row":0,"col":24,"height":32,"width":11,"depth":2,"placedCount":2,"exploredAttempts":72504,"exploredPlacements":11344,"exploredBacktracks":11345},{"type":"try","id":-11,"row":0,"col":24,"height":11,"width":32,"depth":2,"placedCount":2},{"type":"place","id":-11,"row":0,"col":24,"height":11,"width":32,"depth":3,"placedCount":3},{"type":"try","id":2,"row":11,"col":24,"height":17,"width":14,"depth":3,"placedCount":3},{"type":"place","id":2,"row":11,"col":24,"height":17,"width":14,"depth":4,"placedCount":4},{"type":"remove","id":2,"row":11,"col":24,"height":17,"width":14,"depth":3,"placedCount":3,"exploredAttempts":4864,"exploredPlacements":662,"exploredBacktracks":663},{"type":"try","id":-2,"row":11,"col":24,"height":14,"width":17,"depth":3,"placedCount":3},{"type":"place","id":-2,"row":11,"col":24,"height":14,"width":17,"depth":4,"placedCount":4},{"type":"remove","id":-2,"row":11,"col":24,"height":14,"width":17,"depth":3,"placedCount":3,"exploredAttempts":296,"exploredPlacements":22,"exploredBacktracks":23},{"type":"try","id":3,"row":11,"col":24,"height":21,"width":18,"depth":3,"placedCount":3},{"type":"place","id":3,"row":11,"col":24,"height":21,"width":18,"depth":4,"placedCount":4},{"type":"try","id":2,"row":11,"col":42,"height":17,"width":14,"depth":4,"placedCount":4},{"type":"place","id":2,"row":11,"col":42,"height":17,"width":14,"depth":5,"placedCount":5},{"type":"try","id":5,"row":21,"col":0,"height":21,"width":14,"depth":5,"placedCount":5},{"type":"place","id":5,"row":21,"col":0,"height":21,"width":14,"depth":6,"placedCount":6},{"type":"try","id":6,"row":28,"col":42,"height":10,"width":7,"depth":6,"placedCount":6},{"type":"place","id":6,"row":28,"col":42,"height":10,"width":7,"depth":7,"placedCount":7},{"type":"try","id":7,"row":28,"col":49,"height":14,"width":4,"depth":7,"placedCount":7},{"type":"place","id":7,"row":28,"col":49,"height":14,"width":4,"depth":8,"placedCount":8},{"type":"remove","id":7,"row":28,"col":49,"height":14,"width":4,"depth":7,"placedCount":7,"exploredAttempts":8,"exploredPlacements":0,"exploredBacktracks":1},{"type":"try","id":-7,"row":28,"col":49,"height":4,"width":14,"depth":7,"placedCount":7},{"type":"reject","id":-7,"row":28,"col":49,"height":4,"width":14,"depth":7,"placedCount":7},{"type":"try","id":8,"row":28,"col":49,"height":21,"width":18,"depth":7,"placedCount":7},{"type":"reject","id":8,"row":28,"col":49,"height":21,"width":18,"depth":7,"placedCount":7},{"type":"try","id":-8,"row":28,"col":49,"height":18,"width":21,"depth":7,"placedCount":7},{"type":"reject","id":-8,"row":28,"col":49,"height":18,"width":21,"depth":7,"placedCount":7},{"type":"try","id":9,"row":28,"col":49,"height":28,"width":6,"depth":7,"placedCount":7},{"type":"place","id":9,"row":28,"col":49,"height":28,"width":6,"depth":8,"placedCount":8},{"type":"remove","id":9,"row":28,"col":49,"height":28,"width":6,"depth":7,"placedCount":7,"exploredAttempts":8,"exploredPlacements":0,"exploredBacktracks":1},{"type":"try","id":-9,"row":28,"col":49,"height":6,"width":28,"depth":7,"placedCount":7},{"type":"reject","id":-9,"row":28,"col":49,"height":6,"width":28,"depth":7,"placedCount":7},{"type":"try","id":10,"row":28,"col":49,"height":28,"width":14,"depth":7,"placedCount":7},{"type":"reject","id":10,"row":28,"col":49,"height":28,"width":14,"depth":7,"placedCount":7},{"type":"try","id":-10,"row":28,"col":49,"height":14,"width":28,"depth":7,"placedCount":7},{"type":"reject","id":-10,"row":28,"col":49,"height":14,"width":28,"depth":7,"placedCount":7},{"type":"try","id":12,"row":28,"col":49,"height":28,"width":7,"depth":7,"placedCount":7},{"type":"place","id":12,"row":28,"col":49,"height":28,"width":7,"depth":8,"placedCount":8},{"type":"try","id":7,"row":32,"col":14,"height":14,"width":4,"depth":8,"placedCount":8},{"type":"place","id":7,"row":32,"col":14,"height":14,"width":4,"depth":9,"placedCount":9},{"type":"remove","id":7,"row":32,"col":14,"height":14,"width":4,"depth":8,"placedCount":8,"exploredAttempts":14,"exploredPlacements":2,"exploredBacktracks":3},{"type":"try","id":-7,"row":32,"col":14,"height":4,"width":14,"depth":8,"placedCount":8},{"type":"place","id":-7,"row":32,"col":14,"height":4,"width":14,"depth":9,"placedCount":9},{"type":"remove","id":-7,"row":32,"col":14,"height":4,"width":14,"depth":8,"placedCount":8,"exploredAttempts":6,"exploredPlacements":0,"exploredBacktracks":1},{"type":"try","id":8,"row":32,"col":14,"height":21,"width":18,"depth":8,"placedCount":8},{"type":"place","id":8,"row":32,"col":14,"height":21,"width":18,"depth":9,"placedCount":9},{"type":"remove","id":8,"row":32,"col":14,"height":21,"width":18,"depth":8,"placedCount":8,"exploredAttempts":10,"exploredPlacements":1,"exploredBacktracks":2},{"type":"try","id":-8,"row":32,"col":14,"height":18,"width":21,"depth":8,"placedCount":8},{"type":"place","id":-8,"row":32,"col":14,"height":18,"width":21,"depth":9,"placedCount":9},{"type":"remove","id":-8,"row":32,"col":14,"height":18,"width":21,"depth":8,"placedCount":8,"exploredAttempts":10,"exploredPlacements":1,"exploredBacktracks":2},{"type":"try","id":9,"row":32,"col":14,"height":28,"width":6,"depth":8,"placedCount":8},{"type":"reject","id":9,"row":32,"col":14,"height":28,"width":6,"depth":8,"placedCount":8},{"type":"try","id":-9,"row":32,"col":14,"height":6,"width":28,"depth":8,"placedCount":8},{"type":"place","id":-9,"row":32,"col":14,"height":6,"width":28,"depth":9,"placedCount":9},{"type":"try","id":7,"row":38,"col":14,"height":14,"width":4,"depth":9,"placedCount":9},{"type":"place","id":7,"row":38,"col":14,"height":14,"width":4,"depth":10,"placedCount":10},{"type":"remove","id":7,"row":38,"col":14,"height":14,"width":4,"depth":9,"placedCount":9,"exploredAttempts":8,"exploredPlacements":2,"exploredBacktracks":3},{"type":"try","id":-7,"row":38,"col":14,"height":4,"width":14,"depth":9,"placedCount":9},{"type":"place","id":-7,"row":38,"col":14,"height":4,"width":14,"depth":10,"placedCount":10},{"type":"try","id":8,"row":38,"col":28,"height":21,"width":18,"depth":10,"placedCount":10},{"type":"reject","id":8,"row":38,"col":28,"height":21,"width":18,"depth":10,"placedCount":10},{"type":"try","id":-8,"row":38,"col":28,"height":18,"width":21,"depth":10,"placedCount":10},{"type":"place","id":-8,"row":38,"col":28,"height":18,"width":21,"depth":11,"placedCount":11},{"type":"try","id":10,"row":42,"col":0,"height":28,"width":14,"depth":11,"placedCount":11},{"type":"reject","id":10,"row":42,"col":0,"height":28,"width":14,"depth":11,"placedCount":11},{"type":"try","id":-10,"row":42,"col":0,"height":14,"width":28,"depth":11,"placedCount":11},{"type":"place","id":-10,"row":42,"col":0,"height":14,"width":28,"depth":12,"placedCount":12},{"type":"solution","depth":12,"placedCount":12}],"stats":{"attempts":2245095,"placements":336117,"backtracks":336105}};

const boardElement = document.getElementById("board");
const stepCounter = document.getElementById("stepCounter");
const statusText = document.getElementById("statusText");
const speedText = document.getElementById("speedText");
const depthBadge = document.getElementById("depthBadge");
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
const speedButtons = [...document.querySelectorAll("#speedGrid button")];

const boardState = Array.from({ length: PUZZLE.height }, () => Array(PUZZLE.width).fill(0));
const cells = [];
let trace = [];
let traceIndex = 0;
let playbackTimer = null;
let playbackDelay = 550;
let isPlaying = false;
let solutionFound = false;
let solverStats = null;

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
  });
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
      } else {
        cell.className = "cell filled";
        cell.style.background = PUZZLE.colors[id - 1];
      }
    }
  }
}

function describeEvent(step) {
  const pieceText = step.id ? `Piece ${Math.abs(step.id)}${step.id < 0 ? " rotated" : ""}` : "Solver";
  const positionText = typeof step.row === "number" && typeof step.col === "number"
    ? `at (${step.row}, ${step.col})`
    : "";

  switch (step.type) {
    case "start":
      return {
        title: "DFS trace ready",
        description: "The solver begins exploring piece placements from the first empty square.",
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
  pieceMeta.textContent = step.id ? `${Math.abs(step.id)}${step.id < 0 ? " (rotated)" : ""}` : "-";
  positionMeta.textContent = typeof step.row === "number" ? `(${step.row}, ${step.col})` : "-";
  footprintMeta.textContent = step.width ? `${step.height} x ${step.width}` : "-";
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
  if (traceIndex >= trace.length) {
    resetPlayback();
  }
  if (isPlaying) {
    return;
  }
  isPlaying = true;
  speedText.textContent = `${playbackDelay}ms / step`;
  showStepsBtn.textContent = traceIndex === 0 ? "Playing DFS Steps" : "Resume DFS Steps";
  playNextStep();
}

function pausePlayback() {
  isPlaying = false;
  window.clearTimeout(playbackTimer);
  speedText.textContent = solutionFound ? "Solved" : "Paused";
  showStepsBtn.textContent = traceIndex === 0 ? "Show DFS Steps" : "Resume DFS Steps";
}

function resetPlayback() {
  pausePlayback();
  traceIndex = 0;
  solutionFound = false;
  for (let row = 0; row < PUZZLE.height; row += 1) {
    boardState[row].fill(0);
  }
  syncBoard();
  clearPreviewClasses();
  timeline.value = 0;
  stepCounter.textContent = `0 / ${trace.length}`;
  statusText.textContent = "Trace reset";
  speedText.textContent = "Paused";
  depthBadge.textContent = "Depth 0";
  eventTitle.textContent = "Ready to replay";
  eventDescription.textContent = "Press the button to animate the full DFS search trace from the beginning.";
  pieceMeta.textContent = "-";
  positionMeta.textContent = "-";
  footprintMeta.textContent = "-";
  placedMeta.textContent = `0 / ${PUZZLE.pieces.length}`;
  renderLog(-1);
}

function loadTrace() {
  solverStats = TRACE_DATA.stats;
  return TRACE_DATA.trace;
}

function jumpToStep(targetIndex) {
  pausePlayback();
  for (let row = 0; row < PUZZLE.height; row += 1) {
    boardState[row].fill(0);
  }
  syncBoard();
  clearPreviewClasses();

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

function bindEvents() {
  showStepsBtn.addEventListener("click", startPlayback);
  pauseBtn.addEventListener("click", pausePlayback);
  resetBtn.addEventListener("click", resetPlayback);

  speedButtons.forEach((button) => {
    button.addEventListener("click", () => {
      speedButtons.forEach((candidate) => candidate.classList.remove("active"));
      button.classList.add("active");
      playbackDelay = Number(button.dataset.speed);
      speedText.textContent = isPlaying ? `${playbackDelay}ms / step` : "Paused";
    });
  });

  timeline.addEventListener("input", (event) => {
    jumpToStep(Number(event.target.value));
  });
}

function init() {
  buildBoard();
  trace = loadTrace();
  timeline.max = trace.length;
  stepCounter.textContent = `0 / ${trace.length}`;
  statusText.textContent = `Trace computed (${solverStats.attempts.toLocaleString()} attempts)`;
  eventTitle.textContent = "Ready to replay";
  eventDescription.textContent = "Press the button to animate the condensed DFS search from the initial empty board.";
  renderLog(-1);
  bindEvents();
}

init();
