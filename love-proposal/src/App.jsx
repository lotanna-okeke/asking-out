import { motion } from "framer-motion";
import { useState } from "react";

function App() {
  const [showQuestion, setShowQuestion] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [rejected, setRejected] = useState(false);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", duration: 1 }}
        className="text-4xl md:text-6xl font-bold text-accent"
      >
        Hi Beautiful 💌
      </motion.h1>

      {!showQuestion && (
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-6 text-xl text-accent"
        >
          I have something to ask you...
        </motion.p>
      )}

      {!showQuestion && (
        <motion.button
          className="mt-8 px-6 py-3 bg-accent text-white rounded-full hover:scale-105 transition"
          onClick={() => setShowQuestion(true)}
        >
          Click to reveal 💖
        </motion.button>
      )}

      {showQuestion && !answered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-10 flex flex-col gap-4"
        >
          <h2 className="text-3xl md:text-4xl text-accent">
            Will you be my girlfriend? 🥺
          </h2>
          <div className="flex gap-4 justify-center mt-6">
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="px-6 py-3 bg-[#FECACA] text-accent font-bold rounded-full hover:bg-accent hover:text-white transition"
              onClick={() => setAnswered(true)}
            >
              YES 💘
            </motion.button>

            <motion.button
              whileHover={{
                x: Math.random() * 100 - 50,
                y: Math.random() * 100 - 50,
              }}
              className="px-6 py-3 bg-white text-accent font-bold rounded-full border hover:bg-secondary transition"
              onClick={() => setRejected(true)}
            >
              No 😅
            </motion.button>
          </div>
        </motion.div>
      )}

      {answered && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 1 }}
          className="mt-10"
        >
          <h3 className="text-3xl text-accent">Yaaay!! 💃🏽💞</h3>
          <p className="mt-4 text-lg">
            I can't wait to take you on our first date! 💐
          </p>
        </motion.div>
      )}

      {rejected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-10"
        >
          <p className="text-2xl text-accent">
            Wait no 😭 Let’s try that again...
          </p>
        </motion.div>
      )}
    </main>
  );
}

export default App;
