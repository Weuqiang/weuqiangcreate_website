import React from "react";
import ReadingProgress from "./ReadingProgress";

export default function Root({ children }) {
  return (
    <>
      {children}
      <ReadingProgress />
    </>
  );
}
