import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaArrowRight } from "react-icons/fa";

export default function Proposal() {
  const [showQuestion, setShowQuestion] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [rejected, setRejected] = useState(false);
  const [saidNo, setSaidNo] = useState(0);
  const [buttonPos, setButtonPos] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

  const handleYes = () => {
    setAnswered(true);
    setTimeout(() => navigate("/response?answer=yes"), 3000);
  };

  const handleNo = () => {
    setSaidNo(saidNo + 1);
    setRejected(true);
    if(saidNo < 3){
      setTimeout(() => setRejected(false), 2000);
    }else{
      setTimeout(() => navigate("/response?answer=no"), 3000);
      setSaidNo(0);
    }
  };

  const moveButton = () => {
    const x = Math.random() * 300 - 150; // random between -150 and 150
    const y = Math.random() * 200 - 100; // random between -100 and 100
    setButtonPos({ x, y });
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center">
      <div
        className="max-w-3xl w-full mx-auto px-6 py-10 rounded-2xl shadow-2xl border border-[#FECACA] backdrop-blur-md"
        style={{
          background: "rgba(255,255,255,0.75)", // semi-transparent white
          boxShadow: "0 8px 32px 0 rgba(190,24,93,0.10)", // subtle pink shadow
          border: "1.5px solid #FECACA",
        }}
      >
        {!showQuestion && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="max-w-2xl"
          >
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="ext-md font-[cursive] text-[#BE185D]"
            >
              Achalugo
            </motion.p>
            <motion.h1
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 1 }}
              className="text-5xl md:text-7xl font-bold text-[#BE185D] mb-8 font-[serif]"
            >
              My Love
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-xl md:text-2xl text-[#BE185D] font-[Georgia] mb-12"
            >
              You've made every day brighter since you gave me that charm (500
              😏). And everyday since then, my love for you has grown...
            </motion.p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="md:shadow-2xl shadow-lg shadow-[#ffaeae] px-8 py-4 bg-[#BE185D] text-white text-xl rounded-full flex items-center mx-auto"
              onClick={() => setShowQuestion(true)}
            >
              <FaHeart className="mr-3" />
              Continue
              <FaArrowRight className="ml-3" />
            </motion.button>
          </motion.div>
        )}

        {showQuestion && !answered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="max-w-2xl"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 1 }}
              className="mb-12"
            >
              <FaHeart className="text-6xl text-[#BE185D] mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl text-[#BE185D] font-[serif] mb-6">
                Will you be my girlfriend? 🙏🏾🥹
              </h2>
              <p className="text-xl font-[Georgia] text-[#BE185D] mb-8">
                I promise to always respect you, love you, and be there for you
                every day.
              </p>
            </motion.div>

            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-[#BE185D] text-white text-xl rounded-full flex-1 max-w-xs"
                onClick={handleYes}
              >
                YES! I'd Love To! ❤️
              </motion.button>

              <motion.button
                style={{
                  transform: `translate(${buttonPos.x}px, ${buttonPos.y}px)`,
                }}
                onMouseEnter={moveButton}
                className="px-8 py-4 bg-white text-[#BE185D] border-2 border-[#BE185D] text-xl rounded-full flex-1 max-w-xs"
                onClick={handleNo}
              >
                I Need More Time 😅
              </motion.button>
            </div>
          </motion.div>
        )}

        {answered && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 1 }}
            className="max-w-2xl"
          >
            <motion.div
              animate={{
                rotate: [0, 10, -10, 10, -10, 0],
                scale: [1, 1.1, 1.1, 1.1, 1.1, 1],
              }}
              transition={{ duration: 2 }}
            >
              <FaHeart className="text-8xl text-[#BE185D] mx-auto mb-8" />
            </motion.div>
            <h3 className="text-5xl text-[#BE185D] font-[serif] mb-6">
              Yayyy 🥳 .I'm So Happy!
            </h3>
            <p className="text-2xl mb-8">Our beautiful journey begins now...</p>
            <div className="animate-pulse">
              <p className="text-xl">Taking you to our special page...</p>
            </div>
          </motion.div>
        )}

        {rejected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="bg-white p-8 rounded-lg max-w-md text-center"
            >
              <h3 className="text-3xl text-[#BE185D] mb-4">Wait! 😭</h3>
              <p className="text-xl mb-6">I understand you need more time...</p>
              <button
                onClick={() => setRejected(false)}
                className="px-6 py-3 bg-[#BE185D] text-white rounded-full"
              >
                Okay, I'll think about it
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
