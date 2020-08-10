import React from "react";
import { Variants } from "framer-motion";
import Loader from "../../sass/Loading";

const variants: Variants = {
  animate: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5,
      },
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
};

const Loading: React.FC = () => {
  return <Loader variants={variants} animate="animate" />;
};

export default Loading;
