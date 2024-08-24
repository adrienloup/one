// import { useState, useEffect } from 'react';
import { useState, useRef, useEffect } from 'react';
import style from './Cursor.module.scss';

export const CursorComponent = () => {
  // console.log('CursorComponent');

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [distance, setDistance] = useState({ x: 0, y: 0 });
  const cursor = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mouseMove = (event: { clientX: number; clientY: number }) => {
      if (!cursor.current) return;

      setMousePosition({ x: event.clientX, y: event.clientY });

      setDistance({
        x: mousePosition.x - cursorPosition.x,
        y: mousePosition.y - cursorPosition.y,
      });

      setCursorPosition({
        x: (cursorPosition.x += distance.x / 5),
        y: (cursorPosition.y += distance.y / 5),
      });

      cursor.current.style.left = cursorPosition.x + 'px';
      cursor.current.style.top = cursorPosition.y + 'px';
    };

    window.addEventListener('mousemove', mouseMove);
    return () => {
      window.removeEventListener('mousemove', mouseMove, false);
    };
  }, [mousePosition]);

  return (
    <div id="_cursor_1em0m_3" className={style.cursor} ref={cursor}>
      <span></span>
    </div>
  );
};
