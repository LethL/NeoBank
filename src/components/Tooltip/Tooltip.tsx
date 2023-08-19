import React, { useRef, useState } from 'react';
import './Tooltip.css';
import { TooltipProps } from './Tooltip.types';

export default function Tooltip({ children, text }: TooltipProps) {
  const [showToolTip, setShowToolTip] = useState(false);
  const refSetTimeout = useRef<NodeJS.Timeout>();

  const onMouseEnterHandler = () => {
    refSetTimeout.current = setTimeout(() => {
      setShowToolTip(true);
    }, 500);
  };

  const onMouseLeaveHandler = () => {
    clearTimeout(refSetTimeout.current);
    setShowToolTip(false);
  };

  return (
    <div className="tooltip-container" onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>
      {children}
      {showToolTip && <div className="tooltip-text">{text}</div>}
    </div>
  );
}
