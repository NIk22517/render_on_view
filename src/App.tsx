import React from "react";
import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";
import { RenderOnViewportEntry } from "./helper/RenderOnView";
import ThirdComponent from "./ThirdComponent";

function App() {
  return (
    <div
      style={{
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <div
        style={{
          height: "95vh",
        }}
      >
        <SecondComponent />
      </div>

      <RenderOnViewportEntry
        renderChild={
          <div
            style={{
              height: "95vh",
              backgroundColor: "white",
            }}
          >
            <ThirdComponent />
          </div>
        }
        threshold={1}
      />

      <RenderOnViewportEntry
        renderChild={
          <div
            style={{
              height: "95vh",
              backgroundColor: "white",
            }}
          >
            <FirstComponent />
          </div>
        }
        threshold={1}
      />
    </div>
  );
}

export default App;
