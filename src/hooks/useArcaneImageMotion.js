import { useEffect } from "react";

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

export default function useArcaneImageMotion() {
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const frames = Array.from(document.querySelectorAll("[data-arcane-image]"));

    if (!frames.length || mediaQuery.matches) {
      return undefined;
    }

    let frameId = 0;

    const setPointerVars = (frame, event) => {
      const rect = frame.getBoundingClientRect();
      const x = clamp((event.clientX - rect.left) / rect.width, 0, 1);
      const y = clamp((event.clientY - rect.top) / rect.height, 0, 1);

      frame.style.setProperty("--arcane-x", `${(x * 100).toFixed(2)}%`);
      frame.style.setProperty("--arcane-y", `${(y * 100).toFixed(2)}%`);
      frame.style.setProperty(
        "--arcane-tilt-x",
        `${((0.5 - y) * 4).toFixed(2)}deg`
      );
      frame.style.setProperty(
        "--arcane-tilt-y",
        `${((x - 0.5) * 5).toFixed(2)}deg`
      );
    };

    const resetPointerVars = (frame) => {
      frame.style.setProperty("--arcane-x", "68%");
      frame.style.setProperty("--arcane-y", "38%");
      frame.style.setProperty("--arcane-tilt-x", "0deg");
      frame.style.setProperty("--arcane-tilt-y", "0deg");
    };

    const syncScrollVars = () => {
      frameId = 0;

      frames.forEach((frame) => {
        const rect = frame.getBoundingClientRect();
        const progress = clamp(
          (window.innerHeight - rect.top) / (window.innerHeight + rect.height),
          0,
          1
        );

        frame.style.setProperty("--arcane-scroll", progress.toFixed(3));
        frame.style.setProperty(
          "--arcane-drift",
          `${((progress - 0.5) * 18).toFixed(2)}px`
        );
      });
    };

    const requestSync = () => {
      if (!frameId) {
        frameId = window.requestAnimationFrame(syncScrollVars);
      }
    };

    const cleanups = frames.map((frame) => {
      const handlePointerMove = (event) => setPointerVars(frame, event);
      const handlePointerLeave = () => resetPointerVars(frame);

      frame.dataset.arcaneReady = "true";
      resetPointerVars(frame);
      frame.addEventListener("pointermove", handlePointerMove);
      frame.addEventListener("pointerleave", handlePointerLeave);

      return () => {
        frame.removeEventListener("pointermove", handlePointerMove);
        frame.removeEventListener("pointerleave", handlePointerLeave);
      };
    });

    syncScrollVars();
    window.addEventListener("scroll", requestSync, { passive: true });
    window.addEventListener("resize", requestSync);

    return () => {
      cleanups.forEach((cleanup) => cleanup());
      window.removeEventListener("scroll", requestSync);
      window.removeEventListener("resize", requestSync);

      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);
}
