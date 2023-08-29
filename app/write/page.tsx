import dynamic from "next/dynamic";

const StageComponent = dynamic(() => import("../common/konva/canvas"), {
  ssr: false,
});

export default function WritePage() {
  return <StageComponent />;
}
