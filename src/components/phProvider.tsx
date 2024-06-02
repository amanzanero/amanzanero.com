// app/providers.js
"use client";

import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import React from "react";

// app/providers.js

export const PHProvider: React.FC<
  React.PropsWithChildren<{ enabled: boolean }>
> = ({ children, enabled }) => {
  if (enabled) {
    if (typeof window !== "undefined") {
      posthog.init("phc_OcFpmN48y8NZKnlFaKnBAWeHNA5xTTOyAA0N7f6maCU", {
        api_host: "https://amanzanero.com/ingest",
        ui_host: "https://us.i.posthog.com",
      });
    }
    return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
  } else {
    return <>{children}</>;
  }
};
