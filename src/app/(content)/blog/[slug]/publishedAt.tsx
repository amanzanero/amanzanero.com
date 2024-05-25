"use client";

import { P } from "@/components/ui/typography";
import { formattedDate } from "@/lib/utils";
import React from "react";

export const PublishedAt: React.FC<{ date: string }> = ({ date }) => {
  return (
    <P>
      Published on: <span className="italic">{formattedDate(date)}</span>
    </P>
  );
};
