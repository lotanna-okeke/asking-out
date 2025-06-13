import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";

const noButtonMessages = [
  "Did you mean to click 'Yes'? 🥹",
  "Are you sure? 😋",
  "Please nauuu! 😡",
  "Do you want me to cry? 😭",
  "So you actually meaant to click 'Yes'? 😁",
];

export default function Home() {
  const navigate = useNavigate();
  const [messageIndex, setMessageIndex] = useState(-1); // Initialize to -1, so no message shows initially
  const [yesButtonSize, setYesButtonSize] = useState(1);
  const [noButtonVisible, setNoButtonVisible] = useState(true);

  const handleNoClick = () => {
    const nextMessageIndex = messageIndex + 1;
    if (nextMessageIndex < noButtonMessages.length - 1) {
      setMessageIndex(nextMessageIndex);
      setYesButtonSize(yesButtonSize + 0.2);
    } else if (nextMessageIndex === noButtonMessages.length - 1) {
      // Last message
      setMessageIndex(nextMessageIndex);
      setYesButtonSize(yesButtonSize + 0.2);
      setNoButtonVisible(false);
      // Keep No button visible for the last message, then it will be hidden by the next click if any (though it shouldn't happen)
    }
  };

  const handleYesClick = () => {
    navigate("/proposal"); // Navigate to proposal page
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center py-16">
      <div
        className="max-w-3xl w-full mx-auto px-6 py-10 rounded-2xl shadow-2xl border border-[#FECACA] backdrop-blur-md"
        style={{
          background: "rgba(255,255,255,0.75)", // semi-transparent white
          boxShadow: "0 8px 32px 0 rgba(190,24,93,0.10)", // subtle pink shadow
          border: "1.5px solid #FECACA",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-md font-[cursive] text-[#BE185D]">
            Steph. As I'm sure you already know🥹
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-[#BE185D] mb-6 font-serif">
            I Really Really Really Like You
          </h1>
          <p className="text-xl font-[Georgia] text-[#BE185D] mb-10">
            Every moment with you is special. Will you let me show you how I
            feel?
          </p>

          <div
            className={`flex ${
              noButtonVisible ? "justify-center" : "justify-center"
            } items-center space-x-4 mb-10`}
          >
            <button
              onClick={handleYesClick}
              className="inline-flex items-center px-8 py-4 bg-[#BE185D] text-white rounded-full text-xl hover:scale-105 transition"
              style={{ transform: `scale(${yesButtonSize})` }}
            >
              Yes?🫣
              <FaArrowRight className="ml-3" />
            </button>
            {noButtonVisible && (
              <button
                onClick={handleNoClick}
                className="inline-flex items-center px-8 py-4 bg-[#FECACA] text-white rounded-full hover:bg-gray-400 transition"
                style={{ transform: `scale(${1 - (yesButtonSize - 1) / 2})` }} // Decrease No button size
              >
                No 😞
              </button>
            )}
          </div>
          {messageIndex >= 0 &&
            noButtonVisible &&
            messageIndex < noButtonMessages.length && (
              <p className="text-md font-serif text-[#BE185D] mt-4">
                {noButtonMessages[messageIndex]}
              </p>
            )}
          {messageIndex >= 0 && !noButtonVisible && (
            <p className="text-md font-serif text-[#BE185D] mt-4">
              {noButtonMessages[messageIndex]}
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
}
