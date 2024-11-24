// StyledText.tsx
import React, { useEffect, useState } from "react";

interface StyledTextProps {
    phrases: string[];
    typingSpeed?: number; // Optional typing speed
}

const StyledText: React.FC<StyledTextProps> = ({
    phrases,
    typingSpeed = 300,
}) => {
    const [displayText, setDisplayText] = useState<string>("");
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState<number>(0);
    const [isDeleting, setIsDeleting] = useState<boolean>(false);

    useEffect(() => {
        const currentPhrase = phrases[currentPhraseIndex];
        const maxLength = currentPhrase.length;
        let index = isDeleting ? maxLength : 0;

        const interval = setInterval(() => {
            if (isDeleting) {
                setDisplayText(currentPhrase.substring(0, index));
                index--;
                if (index < 0) {
                    setIsDeleting(false);
                    setCurrentPhraseIndex(
                        (prev) => (prev + 1) % phrases.length
                    );
                }
            } else {
                setDisplayText(currentPhrase.substring(0, index));
                index++;
                if (index > maxLength) {
                    setIsDeleting(true);
                }
            }
        }, typingSpeed);

        return () => clearInterval(interval);
    }, [currentPhraseIndex, isDeleting, phrases, typingSpeed]);

    return (
        <span
            className="inline-block  text-red-500"
            style={{ minWidth: "100px" }}
        >
            {displayText}
        </span>
    );
};

export default StyledText;
