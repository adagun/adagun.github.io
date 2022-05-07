import React from "react";
import Particles from "react-tsparticles";
import { loadColorUpdater } from "tsparticles-updater-color";
import { loadCircleShape } from "tsparticles-shape-circle";
import { loadBaseMover } from "tsparticles-move-base";
import { loadSizeUpdater } from "tsparticles-updater-size";
import { loadOpacityUpdater } from "tsparticles-updater-opacity";
import { loadOutModesUpdater } from "tsparticles-updater-out-modes";
import { loadImageShape } from "tsparticles-shape-image";

import particlesConfig from "./config/particles-config";
import "./particles.css";

export default function ParticleBackground() {
  async function particlesInit(engine) {
    await loadColorUpdater(engine);
    await loadImageShape(engine);
    await loadCircleShape(engine);
    await loadBaseMover(engine);
    await loadSizeUpdater(engine);
    await loadOpacityUpdater(engine);
    await loadOutModesUpdater(engine);
  }

  return (
    <Particles
      className="particles"
      init={particlesInit}
      options={particlesConfig}
    />
  );
}

