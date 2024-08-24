import { RefObject, useEffect } from 'react';

export function useCursor(target: RefObject<HTMLElement>) {
  useEffect(() => {
    if (!target.current) return;

    // const mouseOver = () => {
    //   document.querySelector('#_cursor_1em0m_3')?.classList.remove('scaled');
    // };

    const mouseOut = () => {
      document.querySelector('#_cursor_1em0m_3')?.classList.remove('scaled');
    };

    const mouseMove = () => {
      // window.removeEventListener('mousemove', mouseOver);
      document.querySelector('#_cursor_1em0m_3')?.classList.add('scaled');
    };

    target.current.addEventListener('mouseleave', mouseOut);
    target.current.addEventListener('mouseenter', mouseMove);
    // window.addEventListener('mouseover', mouseOver);
    return () => {
      if (!target.current) return;

      target.current.removeEventListener('mouseleave', mouseOut);
      target.current.removeEventListener('mouseenter', mouseMove);
      // window.removeEventListener('mouseover', mouseOver);
    };
  }, []);
}
