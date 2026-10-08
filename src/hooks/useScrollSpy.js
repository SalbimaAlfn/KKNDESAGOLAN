import { useEffect, useState } from 'react';

export function useScrollSpy(sectionIds = []) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? '');

  // Callers pass a fresh array each render; key the effect on the joined
  // string so the observer isn't torn down and rebuilt on every render.
  const sectionKey = sectionIds.join(',');

  useEffect(() => {
    if (!sectionIds.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      { threshold: [0.25, 0.5, 0.75] },
    );

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps -- sectionKey captures identity changes
  }, [sectionKey]);

  return activeSection;
}
