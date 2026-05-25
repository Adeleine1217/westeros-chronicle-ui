import { useEffect } from "react";

const SECTION_SELECTORS = [
  ".intro-section",
  ".timeline-section",
  ".conquest-chapter",
  ".series-section",
  ".character-section",
  ".era-section",
  ".house-section",
];

const GRID_CHILD_SELECTORS = [
  ".era-grid > .era-panel",
  ".house-grid > .house-card",
  ".character-grid > .character-card",
];

export default function useScrollReveal() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const observedElements = new Set();
    const revealElement = (element) => {
      const delay = Number.parseFloat(
        element.style.getPropertyValue("--reveal-delay")
      );

      element.classList.add("is-visible");
      window.setTimeout(() => {
        element.style.removeProperty("--reveal-delay");
      }, (Number.isNaN(delay) ? 0 : delay) + 650);
    };

    if (!("IntersectionObserver" in window) || reducedMotion.matches) {
      const revealAll = () => {
        document
          .querySelectorAll(
            [...SECTION_SELECTORS, ...GRID_CHILD_SELECTORS].join(",")
          )
          .forEach((element) => {
            element.classList.add("scroll-reveal", "is-visible");
          });
      };

      revealAll();
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            revealElement(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.12,
      }
    );

    const registerElements = () => {
      const revealElements = Array.from(
        document.querySelectorAll(SECTION_SELECTORS.join(","))
      );
      const childElements = GRID_CHILD_SELECTORS.flatMap((selector) =>
        Array.from(document.querySelectorAll(selector))
      );
      const allElements = [...revealElements, ...childElements];

      childElements.forEach((element) => {
        if (!observedElements.has(element)) {
          const parent = element.parentElement;
          const siblings = Array.from(parent?.children ?? []);
          element.style.setProperty(
            "--reveal-delay",
            `${siblings.indexOf(element) * 80}ms`
          );
        }
      });

      allElements.forEach((element) => {
        if (!observedElements.has(element)) {
          element.classList.add("scroll-reveal");
          observer.observe(element);
          observedElements.add(element);
        }
      });
    };

    registerElements();

    if (!observedElements.size || !("MutationObserver" in window)) {
      return undefined;
    }

    const mutationObserver = new MutationObserver(registerElements);
    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
    };
  }, []);
}
