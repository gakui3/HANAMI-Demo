import React, {useRef, useEffect} from "react";
import * as BABYLON from "babylonjs";
import {effect01Create, effect01Start, effect01Stop} from "./ParticleEffect01";
import {effect02Create, effect02Start, effect02Stop} from "./ParticleEffect02";

export const GameScene = (props) => {
  useEffect(() => {
    //setup
    console.log("call Scene");
    const canvas = document.getElementById("camerafeed");
    const engine = new BABYLON.Engine(canvas, true /* antialias */);
    engine.enableOfflineSupport = false;

    //scene
    const scene = new BABYLON.Scene(engine);

    //camera
    const camera = new BABYLON.FreeCamera(
      "cam",
      new BABYLON.Vector3(0, 0, 0),
      scene
    );
    camera.position = new BABYLON.Vector3(0, 0, -5);

    //light
    const light = new BABYLON.DirectionalLight(
      "light",
      new BABYLON.Vector3(-5, -10, 7),
      scene
    );
    light.intensity = 0.5;

    effect01Create();
    effect02Create();

    //for 8thwall
    camera.addBehavior(XR8.Babylonjs.xrCameraBehavior(), true);

    engine.runRenderLoop(() => scene.render());
    window.addEventListener("resize", () => engine.resize());
  }, []);

  useEffect(() => {
    effect01Stop();
    effect02Stop();

    switch (props.particleEffectNumber) {
      case 0:
        effect01Start();
        break;
      case 1:
        effect02Start();
        break;
      default:
        break;
    }
  }, [props.particleEffectNumber]);

  return <></>;
};
