import { useEffect, useRef } from "react";

const ClickOutside = ({
  className,
  children,
  onClick,
}: {
  className?: string;
  children: JSX.Element;
  onClick: () => void;
}) => {
  const clickRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        clickRef.current &&
        !clickRef.current.contains(event.target as Node)
      ) {
        onClick();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClick]);

  return <div ref={clickRef}>{children}</div>;
};

export default ClickOutside;
