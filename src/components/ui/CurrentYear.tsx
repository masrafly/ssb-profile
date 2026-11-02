"use client";

import { useEffect, useState } from "react";

export function CurrentYear() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  // Fall back to a static value until mounted; avoids the "unstable value"
  // prerendering error for Date-derived values evaluated at build time.
  return <>{year ?? 2026}</>;
}
