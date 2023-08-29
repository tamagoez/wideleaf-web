"use client";

import { Circle, Layer, Rect, Stage } from "react-konva";

export default function LeafLayer() {
  return (
    <Layer>
      <Rect width={50} height={50} fill="red" />
      <Circle x={200} y={200} stroke="black" radius={50} />
    </Layer>
  );
}
