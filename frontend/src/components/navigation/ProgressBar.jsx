import { useEffect, useState } from "react";

function ProgressBar() {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const newPercent = Math.round((winScroll / height) * 100);
      setPercent(newPercent);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="fixed inset-x-0 top-[64px] z-50 h-1 bg-gradient-to-r from-[#4EE1A0] to-[#272727] lg:top-[110px]"
      style={{ width: `${percent}%` }}
    />
  );
}

export default ProgressBar;
