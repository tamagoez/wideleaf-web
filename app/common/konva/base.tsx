"use client";

import { Stage } from "react-konva";
import LeafLayer from "./layer";

export default function LeafBase() {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <LeafLayer />
    </Stage>
  );
}
