import { RefObject, useEffect } from 'react';

export function useCursor(target: RefObject<HTMLElement>) {
  useEffect(() => {
    const mouseOver = () => {
      document.querySelector('#_cursor_1em0m_3')?.classList.add('scaled');
    };

    const mouseOut = () => {
      document.querySelector('#_cursor_1em0m_3')?.classList.remove('scaled');
    };

    if (!target.current) return;

    target.current.addEventListener('mouseover', mouseOver);
    target.current.addEventListener('mouseout', mouseOut);

    return () => {
      if (!target.current) return;

      target.current.removeEventListener('mouseover', mouseOver);
      target.current.removeEventListener('mouseout', mouseOut);
    };
  });
}
