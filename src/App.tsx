import { createRoot } from "react-dom/client";
import Dockable from "react-dockable-ts";
import { useState } from "react";

function App() {
  const [panelState, setPanelState] = useState<PanelState[]>([
    {
      windows: [
        {
          selected: 0,
          widgets: ["TestA", "TestB"],
        },
      ],
    },
  ]);

  return (
    <div style={{ height: "100vh", backgroundColor: "red" }}>
      <Dockable
        initialState={panelState}
        onUpdate={(state) => {
          setPanelState(state);
        }}
        spacing={3}
      >
        <Widget id="TestA" title="Test A" />
        <Widget id="TestB" title="Test B" />
      </Dockable>
    </div>
  );
}

type WidgetTypes = {
  id: string;
  title: string;
};

function Widget({ id, title }: WidgetTypes) {
  return <div>{title} test</div>;
}

const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(<App />);
