// external modules
import { FC } from "react";

// internal modules
import { Component, Loader } from "./Waiting.styles";

interface WaitingProps {
  className?: string;
  text?: string;
}

const Waiting: FC<WaitingProps> = ({ className, text }) => {
  const variants = {
    hidden: { opacity: 0, x: 0, y: -40 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -40 },
  };

  return (
    <Component
      className={`${className}`}
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: "linear", delay: 0.5, duration: 0.5 }}
    >
      <Loader>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
        <div className="bar4"></div>
        <div className="bar5"></div>
        <div className="bar6"></div>
        <div className="bar7"></div>
        <div className="bar8"></div>
        <div className="bar9"></div>
        <div className="bar10"></div>
        <div className="bar11"></div>
        <div className="bar12"></div>
      </Loader>

      {text ? <p>{text}</p> : null}
    </Component>
  );
};

export default Waiting;
