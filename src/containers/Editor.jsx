import { useState } from "react";
import Canvas from "./Canvas";
import Options from "./Options";
import { ROOF_TYPES } from "../PanelPlacers/PanelPlacer";

export default function Editor(props) {
  const [options, setOptions] = useState({
    roofWidth: 450,
    roofHeight: 300,
    panelWidth: 45,
    panelHeight: 70,
    roofPadding: 10,
    panelMargin: 10,
    roofType: ROOF_TYPES.SQUARE,
  });

  const [panelCount, setPanelCount] = useState(0);

  const optionsUpdated = (newOptions) => {
    setOptions(newOptions);
  };

  const panelCountUpdated = (numberOfPanels) => {
    setPanelCount(numberOfPanels);
  };

  return (
    <div className="width-100 height-100 flex flex-grow bg-zinc-100">
      <Canvas options={options} panelCountUpdated={panelCountUpdated} />
      <Options
        options={options}
        panelCount={panelCount}
        optionsUpdated={optionsUpdated}
      />
    </div>
  );
}
