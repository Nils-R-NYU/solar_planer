import { useEffect, useRef } from "react";
import SquareRoofPlacer from "../PanelPlacers/SqaureRoofPlacer";
import TriangleRoofPlacer from "../PanelPlacers/TriangleRoofPlacer";
import TrapezeRoofPlacer from "../PanelPlacers/TrapezeRoofPlacer";
import { ROOF_TYPES } from "../PanelPlacers/PanelPlacer";

export default function Canvas(props) {
  const canvasRef = useRef(null);
  const { options, panelCountUpdated } = props;

  const border = 2;
  const canvasWidth = Number(options.roofWidth) + 2 * border;
  const canvasHeight = Number(options.roofHeight) + 2 * border;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    if (!ctx) return;
    ctx.fillStyle = "#f4f4f5";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    let placer;
    switch (options.roofType) {
      case ROOF_TYPES.SQUARE:
        placer = new SquareRoofPlacer(options, border, ctx);
        break;
      case ROOF_TYPES.TRIANGLE:
        placer = new TriangleRoofPlacer(options, border, ctx);
        break;
      case ROOF_TYPES.TRAPEZE:
        placer = new TrapezeRoofPlacer(options, border, ctx);
        break;
      default:
        throw new Error("Invalid roof type");
    }
    placer.drawRoof();
    const panelCount = placer.placePanels();
    panelCountUpdated(panelCount);
  }, [options, canvasWidth, canvasHeight, panelCountUpdated]);

  return (
    <div className="w-3/4 h-full flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight} />
    </div>
  );
}
