import React, { useState, useEffect } from "react";

export default function App() {
  const [showLetter, setShowLetter] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    // Generate floating hearts
    const heartCount = 8;
    const newHearts = Array.from({ length: heartCount }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 4,
      size: 30 + Math.random() * 40,
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-50 to-rose-100 overflow-hidden relative flex items-center justify-center">
      {/* Floating Hearts Background */}
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute opacity-20 pointer-events-none"
          style={{
            left: `${heart.left}%`,
            bottom: "-100px",
            animation: `float ${heart.duration}s ease-in-out ${heart.delay}s infinite`,
            fontSize: `${heart.size}px`,
          }}
        >
          ♡
        </div>
      ))}

      {isOpening ? (
        <div className="relative flex items-center justify-center">
          <div className="envelope">
            <div className="flap"></div>
            <div className="letter-slide"></div>
          </div>
        </div>
      ) : !showLetter ? (
        // Landing Page
        <div className="text-center z-10 px-4 animate-fadeIn">
          {/* Decorative hearts */}
          <div className="absolute top-20 left-20 text-pink-200 text-6xl animate-pulse">
            ♡
          </div>
          <div className="absolute top-40 right-32 text-pink-200 text-5xl animate-pulse delay-1000">
            ♡
          </div>
          <div className="absolute bottom-40 left-32 text-pink-200 text-5xl animate-pulse delay-2000">
            ♡
          </div>
          <div className="absolute bottom-32 right-20 text-pink-200 text-6xl animate-pulse delay-1500">
            ♡
          </div>

          {/* Decorative line with heart */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-rose-400"></div>
            <div className="text-rose-500 text-2xl">♥</div>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-rose-400"></div>
          </div>

          {/* Main heading */}
          <h2 className="text-gray-500 text-sm uppercase tracking-widest mb-4 animate-slideDown">
            A Special Message For
          </h2>

          <h1
            className="text-7xl md:text-8xl font-bold mb-8 animate-scaleIn"
            style={{
              fontFamily: "'Brush Script MT', cursive",
              background:
                "linear-gradient(135deg, #e91e63 0%, #ec407a 50%, #f06292 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            My Love
          </h1>

          {/* Quote */}
          <p className="text-gray-600 italic text-lg mb-12 animate-slideUp">
            "Every love story is beautiful, but ours is my favorite"
          </p>

          {/* Button */}
          <button
            onClick={() => {
              setIsOpening(true);
              setTimeout(() => {
                setShowLetter(true);
                setIsOpening(false);
              }, 1800);
            }}
            className="group relative bg-gradient-to-r from-rose-500 to-pink-600 text-white px-12 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-bounce-subtle"
          >
            <span className="flex items-center gap-2">
              <span className="text-xl">♥</span>
              Open Your Love Letter
            </span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300"></div>
          </button>

          {/* Decorative text */}
          <div className="mt-12">
            <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-rose-300 to-transparent mb-3"></div>
            <p
              className="text-rose-400 italic text-sm"
              style={{ fontFamily: "'Brush Script MT', cursive" }}
            >
              with love
            </p>
            <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-rose-300 to-transparent mt-3"></div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
            <svg
              className="w-6 h-6 text-rose-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      ) : (
        // Love Letter Page
        <div className="max-w-2xl mx-auto px-4 py-8 z-10 animate-fadeIn">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden letter-open">
            {/* Letter decorations */}
            <div className="absolute top-0 right-0 text-pink-200 text-9xl opacity-30 transform rotate-12">
              ♥
            </div>
            <div className="absolute bottom-0 left-0 text-rose-200 text-7xl opacity-20 transform -rotate-12">
              ♥
            </div>

            <div className="relative z-10">
              <h2
                className="text-4xl md:text-5xl font-bold text-center mb-8"
                style={{
                  fontFamily: "'Brush Script MT', cursive",
                  color: "#e91e63",
                }}
              >
                To My Kukku ♥
              </h2>

              <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                <p className="typewriter delay-100">
                  My dearest Kukku, It has been four years of loving you from a
                  distance, and yet my heart has never felt closer to anyone.
                  Even though we have met only three or four times, those
                  moments are some of the most precious memories of my life.
                  Every hug, every smile, every second with you is saved safely
                  inside my heart.
                </p>

                <p className="animate-slideUp delay-200">
                  Long distance is not easy. Some days I miss you more than
                  words can explain. I miss holding your hand, seeing your
                  expressions, and just sitting quietly next to you. But no
                  matter how many kilometers stand between us, my love for you
                  only grows stronger with time.
                </p>

                <p className="animate-slideUp delay-300">
                  You are not just my girlfriend, Kukku. You are my peace, my
                  motivation, and my safe place. You make my ordinary days feel
                  special. You make my problems feel smaller. Loving you is the
                  best decision my heart has ever made.
                </p>

                <p className="animate-slideUp delay-400">
                  Thank you for staying, for believing in us, and for choosing
                  me every single day despite the distance. I promise you that
                  one day this distance will just be a story we tell with a
                  smile — because our forever is worth every wait.
                </p>

                <div className="text-center mt-12 animate-slideUp delay-500">
                  <p
                    className="text-2xl font-bold love-glow"
                    style={{ color: "#e91e63" }}
                  >
                    I love you more than words can ever say ♥
                  </p>
                  <p className="mt-6 italic text-gray-600">Forever yours,</p>
                  <p
                    className="text-3xl mt-2"
                    style={{
                      fontFamily: "'Brush Script MT', cursive",
                      color: "#e91e63",
                    }}
                  >
                    Your Momo
                  </p>
                </div>
              </div>

              {/* Hearts decoration */}
              <div className="flex justify-center gap-4 mt-8 text-3xl text-rose-400 animate-pulse">
                ♥ ♥ ♥
              </div>

              <div className="absolute inset-0 pointer-events-none">
                <div
                  className="mini-heart"
                  style={{ left: "10%", animationDelay: "0s" }}
                >
                  ♥
                </div>
                <div
                  className="mini-heart"
                  style={{ left: "80%", animationDelay: "2s" }}
                >
                  ♥
                </div>
                <div
                  className="mini-heart"
                  style={{ left: "50%", animationDelay: "4s" }}
                >
                  ♥
                </div>
              </div>

              {/* Back button */}
              <div className="text-center mt-8">
                <button
                  onClick={() => setShowLetter(false)}
                  className="text-rose-500 hover:text-rose-600 underline transition-colors duration-300"
                >
                  ← Back to message
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.3;
          }
          50% {
            transform: translateY(-70vh) rotate(180deg);
            opacity: 0.3;
          }
          90% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes bounce-subtle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0) translateX(-50%);
          }
          50% {
            transform: translateY(-10px) translateX(-50%);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }

        .animate-slideDown {
          animation: slideDown 0.8s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.8s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 1s ease-out 0.3s both;
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        .delay-100 {
          animation-delay: 0.1s;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }

        .delay-400 {
          animation-delay: 0.4s;
        }

        .delay-500 {
          animation-delay: 0.5s;
        }

        .delay-1000 {
          animation-delay: 1s;
        }

        .delay-1500 {
          animation-delay: 1.5s;
        }

        .delay-2000 {
          animation-delay: 2s;
        }
        .envelope {
          position: relative;
          width: 250px;
          height: 160px;
          background: #f06292;
          border-radius: 10px;
          overflow: hidden;
        }

      .flap {
        position: absolute;
        width: 100%;
        height: 100%;
        background: #ec407a;
        clip-path: polygon(0 0, 50% 60%, 100% 0);
        transform-origin: top;
        animation: openFlap 1s ease forwards;
      }

      .letter-slide {
        position: absolute;
        width: 90%;
        height: 140px;
        background: white;
        left: 5%;
        bottom: -140px;
        border-radius: 8px;
        animation: slideLetter 1.5s ease forwards 0.5s;
      }

      @keyframes openFlap {
        0% {
          transform: rotateX(0deg);
        }
        100% {
          transform: rotateX(180deg);
        }
      }

      @keyframes slideLetter {
        0% {
          bottom: -140px;
        }
        100% {
          bottom: 10px;
        }
      }

      .letter-open {
        animation: unfoldLetter 1.2s ease-out forwards;
        transform-origin: top;
      }

      @keyframes unfoldLetter {
        0% {
          transform: scaleY(0.2);
          opacity: 0;
        }
        60% {
          transform: scaleY(1.05);
          opacity: 1;
        }
        100% {
          transform: scaleY(1);
        }
      }

      .typewriter {
        overflow: hidden;
        white-space: normal;
        animation: fadeInText 1s ease forwards;
        opacity: 0;
      }

      @keyframes fadeInText {
        from {
          opacity: 0;
          transform: translateY(15px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      .love-glow {
        animation: glowPulse 2s ease-in-out infinite;
      }

      @keyframes glowPulse {
        0%, 100% {
          text-shadow: 0 0 5px #ff80ab, 0 0 10px #ff4081;
        }
        50% {
          text-shadow: 0 0 15px #ff1744, 0 0 25px #f50057;
        }
      }
        .mini-heart {
          position: absolute;
          bottom: -20px;
          font-size: 20px;
          color: #f06292;
          opacity: 0.3;
          animation: floatMini 8s linear infinite;
        }

        @keyframes floatMini {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-400px);
          }
        }




      `}</style>
    </div>
  );
}
