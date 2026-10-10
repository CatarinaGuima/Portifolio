'use client';

import { useEffect, useState } from 'react';

type TypewriterProps = {
    text: string;
    speed?: number;
    deleteSpeed?: number;
    pause?: number;
};

export default function Typewriter({
    text,
    speed = 90,
    deleteSpeed = 45,
    pause = 1500,
}: TypewriterProps) {
    const [displayedText, setDisplayedText] = useState('');
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout>;

        if (!deleting && displayedText === text) {
            timeout = setTimeout(() => setDeleting(true), pause);
        } else if (deleting && displayedText === '') {
            timeout = setTimeout(() => setDeleting(false), 400);
        } else {
            timeout = setTimeout(
                () => {
                    setDisplayedText(
                        deleting
                            ? text.slice(0, displayedText.length - 1)
                            : text.slice(0, displayedText.length + 1),
                    );
                },
                deleting ? deleteSpeed : speed,
            );
        }

        return () => clearTimeout(timeout);
    }, [displayedText, deleting, text, speed, deleteSpeed, pause]);

    return (
        <span>
            {displayedText}
            <span
                aria-hidden="true"
                className="ml-1 inline-block h-[1em] w-0.75 animate-pulse bg-current align-middle"
            />
        </span>
    );
}
