import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Landing() {
  const navigate = useNavigate();
  const [opened, setOpened] = useState(false);
  const [cardOut, setCardOut] = useState(false);

  const handleOpenLetter = () => {
    setOpened(true);
    setTimeout(() => setCardOut(true), 700); // Flap opens, then card slides out
    setTimeout(() => navigate("/home"), 3000); // After card slides out, go to home
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div
        initial={{
          y: -400,
          x: -60,
          rotateZ: -15,
          scale: 0.8,
          opacity: 0,
        }}
        animate={{
          y: [-400, 30, -10, 0],
          x: [-60, 20, -10, 0],
          rotateZ: [-15, 10, -5, 0],
          scale: [0.8, 1.05, 0.98, 1],
          opacity: 1,
        }}
        transition={{
          duration: 1.6,
          ease: "easeInOut",
          times: [0, 0.5, 0.8, 1],
        }}
        className="relative w-80 h-56 flex items-center justify-center"
        style={{ perspective: 1200 }}
      >
        {/* Envelope body */}
        <motion.div className="absolute w-full h-full bg-[#BE185D] border-2 border-white rounded-lg shadow-xl z-10 flex flex-col items-center justify-end overflow-hidden">
          {/* Flap */}
          <motion.div
            className="absolute top-0 left-0 w-full h-1/2 bg-[#FECACA] rounded-t-lg border-b-2 border-[#BE185D] flex items-center justify-center z-20 origin-top"
            animate={opened ? { rotateX: -120 } : { rotateX: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <span className="text-3xl mt-2">💌</span>
          </motion.div>
          {/* Heart stamp */}
          {/* <motion.div
            className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#BE185D] text-white p-2 rounded-full shadow-lg z-30 border-2 border-white"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <span className="text-2xl">❤️</span>
          </motion.div> */}
          {/* Open Me button */}
          {!opened && (
            <button
              className="absolute inset-0 flex flex-col items-center justify-center z-40 bg-transparent cursor-pointer"
              onClick={handleOpenLetter}
            >
              <span className="text-3xl font-bold text-white font-[serif] drop-shadow-lg">
                Open Me
              </span>
            </button>
          )}
        </motion.div>
        {/* Card sliding out */}
        <AnimatePresence>
          {cardOut && (
            <motion.div
              initial={{ y: 120, opacity: 0, rotate: 6 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute w-[90%] h-[80%] bg-white border-2 border-[#BE185D] rounded-lg shadow-2xl flex flex-col items-center justify-center z-50"
            >
              <h2 className="text-2xl font-bold text-[#BE185D] font-[serif] mb-2">
                To My Beautiful Landlady
              </h2>
              <p className="text-lg text-[#BE185D]">
                I'm talking straight from my heart...
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
