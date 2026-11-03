"use client";

import { useEffect, useState } from "react";

export function CurrentYear() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    // Deferring Date() to a post-mount effect is required by Next.js's
    // cache-components prerendering (dynamic values can't be read during
    // the static render pass). This intentionally conflicts with the
    // generic "no setState in effect" advice.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setYear(new Date().getFullYear());
  }, []);

  // Fall back to a static value until mounted; avoids the "unstable value"
  // prerendering error for Date-derived values evaluated at build time.
  return <>{year ?? 2026}</>;
}
