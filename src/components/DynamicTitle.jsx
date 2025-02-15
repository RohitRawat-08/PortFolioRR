import { useState, useEffect } from "react";

export default function TypingEffect() {
  const titles = ["Frontend Developer", "Python Developer"];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 150; // Speed of typing (in ms)
  const deletingSpeed = 75; // Speed of deleting (in ms)
  const pauseTime = 1000; // Pause before deleting and switching words

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];

    if (!isDeleting && displayedText.length < currentTitle.length) {
      // Typing effect
      const typingTimeout = setTimeout(() => {
        setDisplayedText(currentTitle.slice(0, displayedText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(typingTimeout);
    }

    if (!isDeleting && displayedText.length === currentTitle.length) {
      // Pause before deleting
      const pauseTimeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);
      return () => clearTimeout(pauseTimeout);
    }

    if (isDeleting && displayedText.length > 0) {
      // Deleting effect
      const deletingTimeout = setTimeout(() => {
        setDisplayedText(currentTitle.slice(0, displayedText.length - 1));
      }, deletingSpeed);
      return () => clearTimeout(deletingTimeout);
    }

    if (isDeleting && displayedText.length === 0) {
      // Switch to the next word
      setIsDeleting(false);
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }
  }, [displayedText, isDeleting, currentTitleIndex]);

  return (
    <h2 className="text-2xl font-semibold text-center">
      <div>{displayedText}<span className="animate-blink">|</span></div>
      <div>& Full Stack Enthusiast....</div>
    </h2>
  );
}
