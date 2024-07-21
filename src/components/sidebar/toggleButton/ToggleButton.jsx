import React, { useState } from "react";
import { motion } from "framer-motion";

const ToggleButton = ({ setOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleButton = () => {
    setOpen((prev) => !prev);
    setIsOpen((prev) => !prev);
  };

  return (
    <button
      onClick={toggleButton}
      style={{
        background: "none",
        border: "none",
        outline: "none",
        cursor: "pointer",
      }}
    >
      <svg width="30" height="30" viewBox="0 0 30 30">
        {/* Circle */}
        <motion.circle
          cx="15"
          cy="15"
          r="10"
          fill="transparent"
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { opacity: 1, strokeDasharray: "0" },
            open: { opacity: 1, strokeDasharray: "35 25" },
          }}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.3 }}
        />
        {/* Cross */}
        <motion.path
          d="M 8 8 L 22 22 M 8 22 L 22 8"
          stroke="black"
          strokeWidth="3"
          strokeLinecap="round"
          variants={{
            closed: { opacity: 0 },
            open: { opacity: 1 },
          }}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.3 }}
        />
      </svg>
    </button>
  );
};

export default ToggleButton;
