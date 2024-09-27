import React, { useState, useEffect } from "react";

const TextChange = () => {
  // Moved texts inside the useEffect
  const [currentText, setCurrentText] = useState("");
  const [endValue, setEndValue] = useState(0);
  const [isForward, setIsForward] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const texts = ["Hi, I'm Asmat Najreen", "Hi, I'm Asmat Najreen", "Hi, I'm Asmat Najreen"];
    
    const intervalId = setInterval(() => {
      const currentFullText = texts[index];
      setCurrentText(currentFullText.substring(0, endValue));

      if (isForward) {
        if (endValue < currentFullText.length) {
          setEndValue((prev) => prev + 1);
        } else {
          setIsForward(false);
        }
      } else {
        if (endValue > 1) {
          setEndValue((prev) => prev - 1);
        } else {
          setIsForward(true);
          setIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, [endValue, isForward, index]);

  return <div className="transition ease duration-300">{currentText}</div>;
};

export default TextChange;
