import React, { useState, useEffect, useRef, useCallback } from "react";
import { FaArrowLeft, FaRedo } from "react-icons/fa";

const Games = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const games = [
    {
      id: "snake",
      name: "🐍 Snake Game",
      description:
        "Classic snake game - eat food and grow! Use arrow keys or WASD to move.",
      emoji: "🐍",
    },
    {
      id: "2048",
      name: "🎮 2048 Game",
      description:
        "Combine tiles to reach 2048! Use arrow keys or WASD to move.",
      emoji: "🎮",
    },
    {
      id: "rps",
      name: "✊ Rock Paper Scissors",
      description: "Classic hand game – beat the computer!",
      emoji: "✊",
    },
    {
      id: "tictactoe",
      name: "❌ Tic Tac Toe",
      description: "Play against the AI! X vs O",
      emoji: "❌",
    },
  ];

  if (selectedGame) {
    return (
      <section
        ref={sectionRef}
        className="section-container bg-gray-950 min-h-screen relative overflow-hidden py-20"
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <button
            onClick={() => setSelectedGame(null)}
            className="mb-8 px-6 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold flex items-center gap-2 transition-all"
          >
            <FaArrowLeft /> Back to Games
          </button>

          {selectedGame === "snake" && <SnakeGame />}
          {selectedGame === "2048" && <Game2048 />}
          {selectedGame === "rps" && <RockPaperScissorsGame />}
          {selectedGame === "tictactoe" && <TicTacToeGame />}
        </div>
      </section>
    );
  }

  return (
    <section
      id="games"
      ref={sectionRef}
      className="section-container bg-gray-950 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-400 text-sm font-medium">
              Interactive Games
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Play AI-Generated Games
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Experience fully developed interactive games built with React
            showcasing modern web development
          </p>
        </div>

        {/* Game Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <div
              key={game.id}
              onClick={() => setSelectedGame(game.id)}
              className={`group relative bg-gradient-to-br from-gray-900/80 via-gray-800/80 to-gray-900/80 rounded-3xl p-8 border border-gray-700/50 hover:border-primary-500/50 transition-all duration-500 overflow-hidden backdrop-blur-sm shadow-xl cursor-pointer transform hover:scale-105 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${index * 0.1}s`,
              }}
            >
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>

              <div className="relative z-10 text-center">
                <div className="text-6xl mb-4">{game.emoji}</div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                  {game.name}
                </h3>
                <p className="text-gray-400 mb-6">{game.description}</p>
                <button className="px-6 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold transition-all transform hover:scale-110">
                  Play Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==================== SNAKE GAME ====================
const JOYSTICK_RADIUS = 52;
const JOYSTICK_KNOB_RADIUS = 22;
const JOYSTICK_DEADZONE = 18;

const SnakeGame = () => {
  const canvasRef = useRef(null);
  const [snake, setSnake] = useState([[10, 10]]);
  const [food, setFood] = useState([15, 15]);
  const [direction, setDirection] = useState([1, 0]);
  const [nextDirection, setNextDirection] = useState([1, 0]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [joystickOffset, setJoystickOffset] = useState({ x: 0, y: 0 });
  const gameLoopRef = useRef(null);
  const joystickRef = useRef(null);

  const GRID_SIZE = 20;
  const TILE_COUNT = 20;
  const touchStartRef = useRef({ x: 0, y: 0 });
  const directionRef = useRef(direction);
  const gameStartedRef = useRef(gameStarted);

  // Update refs when state changes
  useEffect(() => {
    directionRef.current = direction;
  }, [direction]);

  useEffect(() => {
    gameStartedRef.current = gameStarted;
  }, [gameStarted]);

  // Helper function to change direction
  const changeDirection = useCallback((newDir) => {
    if (!gameStartedRef.current) {
      setGameStarted(true);
    }
    
    const currentDir = directionRef.current;
    
    // Prevent reversing into itself
    if (newDir[0] === -currentDir[0] && newDir[1] === -currentDir[1]) {
      return;
    }
    
    // Only change if moving perpendicular
    if (newDir[0] !== 0 && currentDir[0] === 0) {
      setNextDirection(newDir);
    } else if (newDir[1] !== 0 && currentDir[1] === 0) {
      setNextDirection(newDir);
    }
  }, []);

  // Joystick: map client position to direction and knob offset
  const handleJoystickMove = useCallback((clientX, clientY) => {
    const el = joystickRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    let dx = clientX - centerX;
    let dy = clientY - centerY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist > JOYSTICK_RADIUS) {
      const scale = JOYSTICK_RADIUS / dist;
      dx *= scale;
      dy *= scale;
    }
    const normX = dist > 0 ? dx / JOYSTICK_RADIUS : 0;
    const normY = dist > 0 ? dy / JOYSTICK_RADIUS : 0;
    setJoystickOffset({ x: normX, y: normY });
    if (dist > JOYSTICK_DEADZONE) {
      const absX = Math.abs(dx);
      const absY = Math.abs(dy);
      if (absY > absX) {
        changeDirection([0, dy < 0 ? -1 : 1]);
      } else {
        changeDirection([dx > 0 ? 1 : -1, 0]);
      }
    }
  }, [changeDirection]);

  const handleJoystickEnd = useCallback(() => {
    setJoystickOffset({ x: 0, y: 0 });
  }, []);

  // Handle keyboard input
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (
        !gameStarted &&
        (e.key === "ArrowUp" ||
          e.key === "ArrowDown" ||
          e.key === "ArrowLeft" ||
          e.key === "ArrowRight" ||
          e.key.toLowerCase() === "w" ||
          e.key.toLowerCase() === "a" ||
          e.key.toLowerCase() === "s" ||
          e.key.toLowerCase() === "d")
      ) {
        setGameStarted(true);
      }

      switch (e.key) {
        case "ArrowUp":
        case "w":
        case "W":
          changeDirection([0, -1]);
          break;
        case "ArrowDown":
        case "s":
        case "S":
          changeDirection([0, 1]);
          break;
        case "ArrowLeft":
        case "a":
        case "A":
          changeDirection([-1, 0]);
          break;
        case "ArrowRight":
        case "d":
        case "D":
          changeDirection([1, 0]);
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [changeDirection, gameStarted]);

  // Handle touch events for swipe gestures
  useEffect(() => {
    const handleTouchStart = (e) => {
      const touch = e.touches[0];
      touchStartRef.current = { x: touch.clientX, y: touch.clientY };
    };

    const handleTouchEnd = (e) => {
      if (!touchStartRef.current) return;
      
      const touch = e.changedTouches[0];
      const deltaX = touch.clientX - touchStartRef.current.x;
      const deltaY = touch.clientY - touchStartRef.current.y;
      const minSwipeDistance = 30; // Minimum distance for a swipe

      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        // Horizontal swipe
        if (Math.abs(deltaX) > minSwipeDistance) {
          if (deltaX > 0) {
            changeDirection([1, 0]); // Right
          } else {
            changeDirection([-1, 0]); // Left
          }
        }
      } else {
        // Vertical swipe
        if (Math.abs(deltaY) > minSwipeDistance) {
          if (deltaY > 0) {
            changeDirection([0, 1]); // Down
          } else {
            changeDirection([0, -1]); // Up
          }
        }
      }
    };

    const canvas = canvasRef.current;
    if (canvas) {
      canvas.addEventListener("touchstart", handleTouchStart, { passive: true });
      canvas.addEventListener("touchend", handleTouchEnd, { passive: true });
      
      return () => {
        canvas.removeEventListener("touchstart", handleTouchStart);
        canvas.removeEventListener("touchend", handleTouchEnd);
      };
    }
  }, [changeDirection]);

  // Game loop
  useEffect(() => {
    if (gameOver || !gameStarted) return;

    gameLoopRef.current = setInterval(() => {
      setSnake((prevSnake) => {
        const newDirection = nextDirection;
        setDirection(newDirection);

        // Calculate new head
        const head = prevSnake[0];
        const newHead = [
          (head[0] + newDirection[0] + TILE_COUNT) % TILE_COUNT,
          (head[1] + newDirection[1] + TILE_COUNT) % TILE_COUNT,
        ];

        // Check self collision
        if (
          prevSnake.some(
            (segment) => segment[0] === newHead[0] && segment[1] === newHead[1]
          )
        ) {
          setGameOver(true);
          return prevSnake;
        }

        let newSnake = [newHead, ...prevSnake];

        // Check food collision
        if (newHead[0] === food[0] && newHead[1] === food[1]) {
          setScore((prev) => prev + 10);
          setFood([
            Math.floor(Math.random() * TILE_COUNT),
            Math.floor(Math.random() * TILE_COUNT),
          ]);
        } else {
          newSnake.pop();
        }

        return newSnake;
      });
    }, 100);

    return () => clearInterval(gameLoopRef.current);
  }, [nextDirection, food, gameOver, gameStarted]);

  // Draw game
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#0f172a";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw grid
    ctx.strokeStyle = "#1e293b";
    ctx.lineWidth = 0.5;
    for (let i = 0; i <= TILE_COUNT; i++) {
      ctx.beginPath();
      ctx.moveTo(i * GRID_SIZE, 0);
      ctx.lineTo(i * GRID_SIZE, canvas.height);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(0, i * GRID_SIZE);
      ctx.lineTo(canvas.width, i * GRID_SIZE);
      ctx.stroke();
    }

    // Draw snake
    snake.forEach((segment, index) => {
      ctx.fillStyle = index === 0 ? "#10b981" : "#059669";
      ctx.fillRect(
        segment[0] * GRID_SIZE + 1,
        segment[1] * GRID_SIZE + 1,
        GRID_SIZE - 2,
        GRID_SIZE - 2
      );
    });

    // Draw food
    ctx.fillStyle = "#ef4444";
    ctx.beginPath();
    ctx.arc(
      food[0] * GRID_SIZE + GRID_SIZE / 2,
      food[1] * GRID_SIZE + GRID_SIZE / 2,
      GRID_SIZE / 2 - 2,
      0,
      Math.PI * 2
    );
    ctx.fill();
  }, [snake, food]);

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-gradient-to-br from-gray-900/80 via-gray-800/80 to-gray-900/80 rounded-3xl p-8 border border-gray-700/50">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          🐍 Snake Game
        </h2>

        <div className="space-y-4">
          <canvas
            ref={canvasRef}
            width={400}
            height={400}
            className="w-full border-4 border-primary-500/50 rounded-lg bg-gray-950 mx-auto"
          />

          <div className="text-center space-y-4">
            <div className="text-2xl font-bold text-primary-400">
              Score: {score}
            </div>
            <p className="text-gray-400">
              {gameOver ? (
                <span className="text-red-500 font-bold">Game Over! 💀</span>
              ) : (
                "Use Arrow Keys, WASD, swipe, or joystick to move"
              )}
            </p>

            {/* Touch Controls - Virtual Joystick */}
            <div className="flex justify-center md:hidden">
              <div
                ref={joystickRef}
                className="relative select-none touch-none flex items-center justify-center rounded-full bg-gray-800/80 border-2 border-primary-500/50 shadow-xl"
                style={{
                  width: JOYSTICK_RADIUS * 2,
                  height: JOYSTICK_RADIUS * 2,
                }}
                onTouchStart={(e) => {
                  e.preventDefault();
                  const t = e.touches[0];
                  handleJoystickMove(t.clientX, t.clientY);
                }}
                onTouchMove={(e) => {
                  e.preventDefault();
                  const t = e.touches[0];
                  handleJoystickMove(t.clientX, t.clientY);
                }}
                onTouchEnd={(e) => {
                  e.preventDefault();
                  handleJoystickEnd();
                }}
                onTouchCancel={(e) => {
                  e.preventDefault();
                  handleJoystickEnd();
                }}
                onMouseDown={(e) => {
                  e.preventDefault();
                  handleJoystickMove(e.clientX, e.clientY);
                  const onMouseMove = (ev) => handleJoystickMove(ev.clientX, ev.clientY);
                  const onMouseUp = () => {
                    handleJoystickEnd();
                    document.removeEventListener("mousemove", onMouseMove);
                    document.removeEventListener("mouseup", onMouseUp);
                  };
                  document.addEventListener("mousemove", onMouseMove);
                  document.addEventListener("mouseup", onMouseUp);
                }}
                aria-label="Direction joystick for snake game"
              >
                <div
                  className="absolute rounded-full bg-primary-500 shadow-lg pointer-events-none transition-transform duration-75"
                  style={{
                    width: JOYSTICK_KNOB_RADIUS * 2,
                    height: JOYSTICK_KNOB_RADIUS * 2,
                    left: "50%",
                    top: "50%",
                    transform: `translate(calc(-50% + ${joystickOffset.x * (JOYSTICK_RADIUS - JOYSTICK_KNOB_RADIUS)}px), calc(-50% + ${joystickOffset.y * (JOYSTICK_RADIUS - JOYSTICK_KNOB_RADIUS)}px))`,
                  }}
                />
              </div>
            </div>

            <button
              onClick={() => {
                setSnake([[10, 10]]);
                setFood([15, 15]);
                setDirection([1, 0]);
                setNextDirection([1, 0]);
                setScore(0);
                setGameOver(false);
                setGameStarted(false);
              }}
              className="px-8 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-bold flex items-center gap-2 justify-center mx-auto transition-all transform hover:scale-110"
            >
              <FaRedo /> New Game
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ==================== 2048 GAME ====================
const Game2048 = () => {
  const createEmptyBoard = () => Array(16).fill(0);

  const addNewTile = (board) => {
    const emptyIndices = board
      .map((val, idx) => (val === 0 ? idx : null))
      .filter((val) => val !== null);

    if (emptyIndices.length === 0) return board;

    const randomIndex =
      emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
    const newBoard = [...board];
    newBoard[randomIndex] = Math.random() < 0.9 ? 2 : 4;
    return newBoard;
  };

  const initializeBoard = () => {
    let board = createEmptyBoard();
    board = addNewTile(board);
    board = addNewTile(board);
    return board;
  };

  const [board, setBoard] = useState(initializeBoard());
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);

  const move = useCallback((direction) => {
    if (gameOver || won) return;

    let newBoard = JSON.parse(JSON.stringify(board));
    let moved = false;
    let scoreGain = 0;

    if (direction === "left" || direction === "right") {
      for (let i = 0; i < 4; i++) {
        const row = newBoard.slice(i * 4, i * 4 + 4);
        const result = compressRow(row, direction === "right");
        const [compressed, gain] = result;
        scoreGain += gain;

        for (let j = 0; j < 4; j++) {
          if (newBoard[i * 4 + j] !== compressed[j]) moved = true;
          newBoard[i * 4 + j] = compressed[j];
        }
      }
    } else {
      for (let i = 0; i < 4; i++) {
        const col = [
          newBoard[i],
          newBoard[i + 4],
          newBoard[i + 8],
          newBoard[i + 12],
        ];
        const result = compressRow(col, direction === "down");
        const [compressed, gain] = result;
        scoreGain += gain;

        for (let j = 0; j < 4; j++) {
          if (newBoard[i + j * 4] !== compressed[j]) moved = true;
          newBoard[i + j * 4] = compressed[j];
        }
      }
    }

    if (!moved) return;

    const boardWithTile = addNewTile(newBoard);
    setBoard(boardWithTile);
    setScore((prev) => prev + scoreGain);

    // Check win condition
    if (boardWithTile.includes(2048) && !won) {
      setWon(true);
    }

    // Check game over
    if (isGameOver(boardWithTile)) {
      setGameOver(true);
    }
  }, [board, gameOver, won]);

  const compressRow = (row, reverse) => {
    if (reverse) row = row.reverse();

    let arr = row.filter((val) => val !== 0);
    let score = 0;

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] === arr[i + 1]) {
        arr[i] *= 2;
        score += arr[i];
        arr.splice(i + 1, 1);
      }
    }

    while (arr.length < 4) {
      arr.push(0);
    }

    if (reverse) arr = arr.reverse();
    return [arr, score];
  };

  const isGameOver = (board) => {
    if (board.includes(0)) return false;

    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        const idx = i * 4 + j;
        const right = idx % 4 !== 3 ? board[idx + 1] : null;
        const down = i !== 3 ? board[idx + 4] : null;

        if (right === board[idx] || down === board[idx]) return false;
      }
    }
    return true;
  };

  const getTileColor = (value) => {
    const colors = {
      2: "bg-gradient-to-br from-blue-500 to-blue-600",
      4: "bg-gradient-to-br from-blue-400 to-blue-500",
      8: "bg-gradient-to-br from-cyan-400 to-cyan-500",
      16: "bg-gradient-to-br from-teal-400 to-teal-500",
      32: "bg-gradient-to-br from-green-400 to-green-500",
      64: "bg-gradient-to-br from-lime-400 to-lime-500",
      128: "bg-gradient-to-br from-yellow-400 to-yellow-500",
      256: "bg-gradient-to-br from-yellow-300 to-yellow-400",
      512: "bg-gradient-to-br from-orange-400 to-orange-500",
      1024: "bg-gradient-to-br from-orange-300 to-orange-400",
      2048: "bg-gradient-to-br from-red-400 to-red-500",
    };
    return colors[value] || "bg-gradient-to-br from-red-500 to-red-600";
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      switch (e.key) {
        case "ArrowUp":
        case "w":
        case "W":
          e.preventDefault();
          move("up");
          break;
        case "ArrowDown":
        case "s":
        case "S":
          e.preventDefault();
          move("down");
          break;
        case "ArrowLeft":
        case "a":
        case "A":
          e.preventDefault();
          move("left");
          break;
        case "ArrowRight":
        case "d":
        case "D":
          e.preventDefault();
          move("right");
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [gameOver, won, board, move]);

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-gradient-to-br from-gray-900/80 via-gray-800/80 to-gray-900/80 rounded-3xl p-8 border border-gray-700/50">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          🎮 2048 Game
        </h2>

        <div className="space-y-6">
          <div className="text-center space-y-2">
            <div className="text-2xl font-bold text-primary-400">
              Score: {score}
            </div>
            <p className="text-gray-400">Use arrow keys or WASD to move</p>
          </div>

          <div className="bg-gray-950 p-4 rounded-lg inline-block mx-auto">
            <div className="grid grid-cols-4 gap-2">
              {board.map((value, index) => (
                <div
                  key={index}
                  className={`w-20 h-20 rounded-lg flex items-center justify-center font-bold text-xl transition-all ${
                    value === 0
                      ? "bg-gray-800 border-2 border-gray-700"
                      : `${getTileColor(
                          value
                        )} text-white shadow-lg border-2 border-gray-600`
                  }`}
                >
                  {value !== 0 && value}
                </div>
              ))}
            </div>
          </div>

          <div className="text-center space-y-4">
            {gameOver && (
              <div className="text-2xl font-bold text-red-400">
                💀 Game Over! No more moves!
              </div>
            )}

            {won && !gameOver && (
              <div className="text-2xl font-bold text-green-400">
                🎉 You reached 2048!
              </div>
            )}

            <button
              onClick={() => {
                setBoard(initializeBoard());
                setScore(0);
                setGameOver(false);
                setWon(false);
              }}
              className="px-8 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-bold flex items-center gap-2 justify-center mx-auto transition-all transform hover:scale-110"
            >
              <FaRedo /> New Game
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ==================== ROCK PAPER SCISSORS GAME ====================
const CHOICES = [
  { id: "rock", label: "Rock", emoji: "🪨" },
  { id: "paper", label: "Paper", emoji: "📄" },
  { id: "scissors", label: "Scissors", emoji: "✂️" },
];

const getResult = (player, computer) => {
  if (player === computer) return "draw";
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) return "win";
  return "lose";
};

const ANIMATION_DURATION_MS = 1800;
const CYCLE_INTERVAL_MS = 180;

const RockPaperScissorsGame = () => {
  const [phase, setPhase] = useState("idle"); // idle | computerChoosing | playerChoosing | result
  const [computerChoice, setComputerChoice] = useState(null);
  const [playerChoice, setPlayerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [score, setScore] = useState({ wins: 0, losses: 0, draws: 0 });
  const [cyclingIndex, setCyclingIndex] = useState(0);

  // Computer choosing animation: cycle emojis, then pick and reveal
  useEffect(() => {
    if (phase !== "computerChoosing") return;
    const cycle = setInterval(() => {
      setCyclingIndex((i) => (i + 1) % CHOICES.length);
    }, CYCLE_INTERVAL_MS);
    const done = setTimeout(() => {
      clearInterval(cycle);
      setComputerChoice(CHOICES[Math.floor(Math.random() * CHOICES.length)].id);
      setPhase("playerChoosing");
    }, ANIMATION_DURATION_MS);
    return () => {
      clearInterval(cycle);
      clearTimeout(done);
    };
  }, [phase]);

  const startRound = useCallback(() => {
    setPhase("computerChoosing");
    setComputerChoice(null);
    setPlayerChoice(null);
    setResult(null);
    setCyclingIndex(0);
  }, []);

  const playRound = useCallback((choice) => {
    if (phase !== "playerChoosing" || computerChoice === null) return;
    const res = getResult(choice, computerChoice);
    setPlayerChoice(choice);
    setResult(res);
    setPhase("result");
    setScore((prev) => ({
      wins: prev.wins + (res === "win" ? 1 : 0),
      losses: prev.losses + (res === "lose" ? 1 : 0),
      draws: prev.draws + (res === "draw" ? 1 : 0),
    }));
  }, [phase, computerChoice]);

  const resetGame = useCallback(() => {
    setPhase("idle");
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult(null);
    setScore({ wins: 0, losses: 0, draws: 0 });
  }, []);

  const choiceEmoji = (id) => CHOICES.find((c) => c.id === id)?.emoji ?? id;

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-gradient-to-br from-gray-900/80 via-gray-800/80 to-gray-900/80 rounded-3xl p-8 border border-gray-700/50">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          ✊ Rock Paper Scissors
        </h2>

        <div className="text-center space-y-6">
          <div className="flex justify-center gap-4 text-primary-400 font-semibold">
            <span>Wins: {score.wins}</span>
            <span>Losses: {score.losses}</span>
            <span>Draws: {score.draws}</span>
          </div>

          {phase === "idle" && (
            <>
              <p className="text-gray-400">Ready? Computer will choose first, then you.</p>
              <button
                onClick={startRound}
                className="px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-xl text-lg font-bold transition-all transform hover:scale-105 active:scale-95 shadow-lg"
              >
                Play round
              </button>
            </>
          )}

          {phase === "computerChoosing" && (
            <div className="py-8">
              <p className="text-gray-400 mb-4">Computer is choosing...</p>
              <div
                className="inline-flex items-center justify-center w-28 h-28 rounded-2xl bg-gray-800/80 border-2 border-primary-500/50 animate-pulse"
                style={{ animationDuration: "0.8s" }}
              >
                <span className="text-6xl transition-transform duration-150 scale-110">
                  {CHOICES[cyclingIndex].emoji}
                </span>
              </div>
            </div>
          )}

          {phase === "playerChoosing" && (
            <>
              <div className="grid grid-cols-2 gap-6 max-w-md mx-auto">
                <div className="bg-gray-800/60 rounded-xl p-4 border border-gray-600/50">
                  <p className="text-gray-400 text-sm mb-1">Computer chose</p>
                  <p className="text-5xl text-gray-500">?</p>
                  <p className="text-gray-500 font-semibold">Revealed after you choose</p>
                </div>
                <div className="bg-gray-800/60 rounded-xl p-4 border border-gray-600/50 flex flex-col justify-center">
                  <p className="text-gray-400 text-sm mb-1">Your turn</p>
                  <p className="text-xl text-primary-400 font-semibold">Choose below ↓</p>
                </div>
              </div>
              <p className="text-gray-400">Your move:</p>
              <div className="flex flex-wrap justify-center gap-4">
                {CHOICES.map(({ id, label, emoji }) => (
                  <button
                    key={id}
                    onClick={() => playRound(id)}
                    className="px-8 py-4 bg-primary-500/80 hover:bg-primary-500 text-white rounded-xl text-lg font-semibold flex flex-col items-center gap-2 transition-all transform hover:scale-105 active:scale-95 shadow-lg min-w-[120px]"
                    aria-label={`Choose ${label}`}
                  >
                    <span className="text-4xl">{emoji}</span>
                    <span>{label}</span>
                  </button>
                ))}
              </div>
            </>
          )}

          {phase === "result" && (
            <>
              <div className="grid grid-cols-2 gap-6 max-w-md mx-auto">
                <div className="bg-gray-800/60 rounded-xl p-4 border border-gray-600/50">
                  <p className="text-gray-400 text-sm mb-1">Computer chose</p>
                  <p className="text-5xl">{choiceEmoji(computerChoice)}</p>
                  <p className="text-white font-semibold capitalize">{computerChoice}</p>
                </div>
                <div className="bg-gray-800/60 rounded-xl p-4 border border-gray-600/50">
                  <p className="text-gray-400 text-sm mb-1">You chose</p>
                  <p className="text-5xl">{choiceEmoji(playerChoice)}</p>
                  <p className="text-white font-semibold capitalize">{playerChoice}</p>
                </div>
              </div>
              <p className="text-2xl font-bold">
                {result === "win" && <span className="text-green-400">🎉 You win!</span>}
                {result === "lose" && <span className="text-red-400">😢 You lose!</span>}
                {result === "draw" && <span className="text-yellow-400">🤝 Draw!</span>}
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <button
                  onClick={startRound}
                  className="px-6 py-3 bg-gray-600 hover:bg-gray-500 text-white rounded-lg font-semibold transition-all"
                >
                  Play again
                </button>
                <button
                  onClick={resetGame}
                  className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-bold flex items-center gap-2 justify-center transition-all"
                >
                  <FaRedo /> Reset score
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

// ==================== TIC TAC TOE GAME ====================
const TicTacToeGame = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null);

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const getAIMove = (squares) => {
    const emptySquares = squares
      .map((val, idx) => (val === null ? idx : null))
      .filter((val) => val !== null);

    if (emptySquares.length === 0) return null;

    // Check if AI can win
    for (let i of emptySquares) {
      const testBoard = [...squares];
      testBoard[i] = "O";
      if (calculateWinner(testBoard) === "O") return i;
    }

    // Check if player can win and block
    for (let i of emptySquares) {
      const testBoard = [...squares];
      testBoard[i] = "X";
      if (calculateWinner(testBoard) === "X") return i;
    }

    // Take center if available
    if (emptySquares.includes(4)) return 4;

    // Take corners
    const corners = [0, 2, 6, 8].filter((i) => emptySquares.includes(i));
    if (corners.length > 0)
      return corners[Math.floor(Math.random() * corners.length)];

    // Take random available
    return emptySquares[Math.floor(Math.random() * emptySquares.length)];
  };

  const handleSquareClick = (index) => {
    if (board[index] || gameOver) return;

    const newBoard = [...board];
    newBoard[index] = "X";

    let currentWinner = calculateWinner(newBoard);
    if (currentWinner) {
      setBoard(newBoard);
      setWinner(currentWinner);
      setGameOver(true);
      return;
    }

    // AI move
    const aiMove = getAIMove(newBoard);
    if (aiMove !== null) {
      newBoard[aiMove] = "O";
      currentWinner = calculateWinner(newBoard);
      if (currentWinner) {
        setBoard(newBoard);
        setWinner(currentWinner);
        setGameOver(true);
        return;
      }
    }

    // Check for draw
    if (!newBoard.includes(null)) {
      setBoard(newBoard);
      setGameOver(true);
      return;
    }

    setBoard(newBoard);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setGameOver(false);
    setWinner(null);
  };

  const isBoardFull = !board.includes(null);

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-gradient-to-br from-gray-900/80 via-gray-800/80 to-gray-900/80 rounded-3xl p-8 border border-gray-700/50">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          ❌ Tic Tac Toe
        </h2>

        <div className="space-y-6">
          <div className="flex justify-center">
            <div className="grid grid-cols-3 gap-3 bg-gray-950 p-4 rounded-lg">
              {board.map((value, index) => (
                <button
                  key={index}
                  onClick={() => handleSquareClick(index)}
                  disabled={gameOver || value !== null}
                  className="w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-primary-500/50 rounded-lg text-4xl font-bold transition-all transform hover:scale-110 hover:border-primary-400 disabled:cursor-not-allowed text-white shadow-lg"
                >
                  {value === "X" && (
                    <span className="text-blue-400">{value}</span>
                  )}
                  {value === "O" && (
                    <span className="text-red-400">{value}</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="text-center space-y-4">
            {!gameOver && (
              <p className="text-lg text-gray-400">
                Your turn (You are{" "}
                <span className="text-blue-400 font-bold">X</span>)
              </p>
            )}

            {gameOver && winner === "X" && (
              <div className="text-2xl font-bold text-green-400">
                🎉 You Won! Congratulations!
              </div>
            )}

            {gameOver && winner === "O" && (
              <div className="text-2xl font-bold text-red-400">
                💀 AI Won! Try Again!
              </div>
            )}

            {gameOver && !winner && isBoardFull && (
              <div className="text-2xl font-bold text-yellow-400">
                🤝 It's a Draw!
              </div>
            )}

            <button
              onClick={resetGame}
              className="px-8 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-bold flex items-center gap-2 justify-center mx-auto transition-all transform hover:scale-110"
            >
              <FaRedo /> New Game
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Games;
