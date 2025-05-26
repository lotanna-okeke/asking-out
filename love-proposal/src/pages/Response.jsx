import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHeart, FaCalendarAlt } from "react-icons/fa";
import Confetti from "../components/Confetti";

export default function Response() {
  const location = useLocation();
  const navigate = useNavigate();
  const [answer, setAnswer] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setAnswer(params.get("answer"));
  }, [location]);

  if (answer === "yes") {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center py-12">
        <Confetti />
        <div
          className="max-w-3xl w-full mx-auto px-6 py-10 rounded-2xl shadow-2xl border border-[#FECACA] backdrop-blur-md"
          style={{
            // background: "rgba(255,255,255,0.75)", // semi-transparent white
            boxShadow: "0 8px 32px 0 rgba(190,24,93,0.10)", // subtle pink shadow
            border: "1.5px solid #FECACA",
          }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 1 }}
            className="max-w-3xl"
          >
            <motion.div
              animate={{
                rotate: [0, 10, -10, 10, -10, 0],
                scale: [1, 1.1, 1.1, 1.1, 1.1, 1],
              }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <FaHeart className="text-8xl text-[#BE185D] mx-auto mb-8" />
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold text-[#BE185D] mb-8 font-[serif]">
              She Said Yes! ❤️
            </h1>

            <p className="text-xl md:text-2xl text-[#BE185D] mb-12">
              I'm so happy to call you my girlfriend! I can't wait to make
              amazing memories together.
            </p>

            <button
              onClick={() => setShowDetails(!showDetails)}
              className="px-8 py-4 bg-[#BE185D] text-white rounded-full text-xl mb-12"
            >
              {showDetails ? "Hide" : "Show More"}
            </button>

            {showDetails && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-8 rounded-lg shadow-xl"
              >
                <div className="flex items-start mb-8">
                  <FaCalendarAlt className="text-3xl text-[#BE185D] mr-4 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold text-[#BE185D] mb-2">
                      Our First Day as a Couple
                    </h3>
                    <p className="text-lg mb-2">Tuesday, 27th May, 2025</p>
                    <p className="text-lg">
                      You said yes on children day, so... 👀
                    </p>
                    <p className="text-lg">Our love will be forever young 😇</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-[#BE185D] mb-4">
                    Things I Want Us To Do
                  </h3>
                  <ul className="space-y-3 text-left">
                    <li className="flex items-center">
                      <FaHeart className="text-[#BE185D] mr-3" />
                      <span>Watch your favorite movie</span>
                    </li>
                    <li className="flex items-center">
                      <FaHeart className="text-[#BE185D] mr-3" />
                      <span>Take Couple pictures</span>
                    </li>
                    <li className="flex items-center">
                      <FaHeart className="text-[#BE185D] mr-3" />
                      <span>Cook a meal together</span>
                    </li>
                  </ul>
                </div>

                <button
                  onClick={() => navigate("/memories")}
                  className="px-6 py-3 bg-[#FECACA] text-[#BE185D] rounded-full"
                >
                  Relive Our Memories
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center py-12">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", duration: 1 }}
        className="max-w-2xl"
      >
        <h1 className="text-5xl text-[#BE185D] font-[serif] mb-8">
          I'll Keep Trying
        </h1>
        <p className="text-xl mb-8">
          I really like you and I'm happy to wait until you're ready.
        </p>
        <button
          onClick={() => navigate("/proposal")}
          className="px-8 py-4 bg-[#BE185D] text-white rounded-full text-xl"
        >
          Ask Me Again
        </button>
      </motion.div>
    </div>
  );
}
