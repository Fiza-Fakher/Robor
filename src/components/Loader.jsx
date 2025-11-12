import React, { useEffect, useState } from "react";

const Loader = ({ onFinish }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const showTimer = setTimeout(() => setVisible(false), 3000);
    const finishTimer = setTimeout(() => onFinish && onFinish(), 3500);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <div
      className={`flex justify-center items-center w-full h-screen bg-black transition-opacity duration-700 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <h1
        className="
          font-extrabold text-transparent bg-clip-text 
          bg-gradient-to-r from-[#00E0FF] via-[#8B5CF6] to-[#FF0080] 
          animate-fadeInOut select-none text-center
          text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[7vw]
          tracking-[2vw]
        "
      >
       E N V O Y
      </h1>

      <style jsx>{`
        @keyframes fadeInOut {
          0% {
            opacity: 0;
            transform: scale(0.9);
            letter-spacing: 1vw;
          }
          25% {
            opacity: 1;
            transform: scale(1);
            letter-spacing: 2vw;
          }
          75% {
            opacity: 1;
            transform: scale(1.05);
            letter-spacing: 2.5vw;
          }
          100% {
            opacity: 0;
            transform: scale(1.1);
            letter-spacing: 3vw;
          }
        }

        .animate-fadeInOut {
          animation: fadeInOut 3s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Loader;
