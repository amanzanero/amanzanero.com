"use client";

import { formattedDate } from "@/lib/utils";
import React from "react";

export const PostedOn: React.FC<{ date: string }> = ({ date }) => (
  <span className="italic">{formattedDate(date)}</span>
);
