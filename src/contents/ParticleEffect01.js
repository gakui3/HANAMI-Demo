import * as BABYLON from "babylonjs";
import image from "../assets/demo.png";

let particleSystem;
export const effect01Create = (scene) => {
  particleSystem = new BABYLON.ParticleSystem("particles", 2000);
  particleSystem.particleTexture = new BABYLON.Texture(image);
  particleSystem.emitter = new BABYLON.Vector3(0, -2, 3);
  particleSystem.minEmitPower = 3;
  particleSystem.maxEmitPower = 6;
  particleSystem.minLifeTime = 3;
  particleSystem.maxLifeTime = 5;
  var noiseTexture = new BABYLON.NoiseProceduralTexture("perlin", 256, scene);
  noiseTexture.animationSpeedFactor = 5;
  noiseTexture.persistence = 2;
  noiseTexture.brightness = 0.5;
  noiseTexture.octaves = 2;
  particleSystem.noiseTexture = noiseTexture;
  particleSystem.emitRate = 30;

  particleSystem.minInitialRotation = 0;
  particleSystem.maxInitialRotation = Math.PI / 2;
  particleSystem.minAngularSpeed = 0;
  particleSystem.maxAngularSpeed = Math.PI;

  // particleSystem.color1 = new BABYLON.Color4(0, 0, 0, 1.0);
  // particleSystem.colorDead = new BABYLON.Color4(1.0, 1.0, 1.0, 0.0);
  particleSystem.addColorGradient(0, new BABYLON.Color4(1, 1, 1, 1)); //color at start of particle lifetime
  particleSystem.addColorGradient(0.9, new BABYLON.Color4(1, 1, 1, 1)); //color at start of particle lifetime
  particleSystem.addColorGradient(1, new BABYLON.Color4(1, 1, 1, 0)); //color at
  particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_STANDARD;

  particleSystem.minSize = 0.4;
  particleSystem.maxSize = 0.6;
  particleSystem.start();
};

export const effect01Start = () => {
  particleSystem.start();
};

export const effect01Stop = () => {
  particleSystem.stop();
};
