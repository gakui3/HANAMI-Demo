import React, {useState, useEffect} from "react";
import {GameScene} from "./GameScene";

export const Prepare8thwall = () => {
  const [ready, setReady] = useState(false);
  const [particleEffectNumber, setParticleEffect] = useState(0);

  const onxrloaded = () => {
    XR8.XrController.configure();

    XR8.addCameraPipelineModules([
      XRExtras.AlmostThere.pipelineModule(),
      XRExtras.Loading.pipelineModule(),
      XRExtras.RuntimeError.pipelineModule(),
      XRExtras.FullWindowCanvas.pipelineModule(),
    ]);

    document.body.insertAdjacentHTML(
      "beforeend",
      '<canvas id="camerafeed"></canvas>'
    );

    setReady(true);
  };

  const stop = () => {
    const canvas = document.getElementById("camerafeed");
    canvas.parentNode.removeChild(canvas);
    XR8.stop();
    XR8.clearCameraPipelineModules();
  };

  useEffect(() => {
    window.XR8 ? onxrloaded() : window.addEventListener("xrloaded", onxrloaded);
  }, []);

  if (ready) {
    return (
      <>
        <button
          className="testButton"
          onClick={() => {
            setParticleEffect(0);
          }}
        >
          01
        </button>
        <button
          className="testButton"
          onClick={() => {
            setParticleEffect(1);
          }}
        >
          02
        </button>
        <GameScene particleEffectNumber={particleEffectNumber} />
      </>
    );
  } else {
    return <></>;
  }
};
