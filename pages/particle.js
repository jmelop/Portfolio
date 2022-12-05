import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesconfig from '../public/dummies/particlesjs-config.json'

function Particle() {
    const particlesInit = React.useCallback(async engine => {
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = React.useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <Particles
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesconfig}
        />
    )
}

export default Particle;