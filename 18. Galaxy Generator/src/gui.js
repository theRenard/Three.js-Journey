import * as dat from 'dat.gui'
import parameters from './parameters';
import generateGalaxy from './generateGalaxy'

export default (scene) => {

  const gui = new dat.GUI({
    width: 360,
  });

  gui
    .add(parameters, 'count')
    .min(100)
    .max(1000000)
    .step(100)
    .onFinishChange(() => {
      generateGalaxy(scene)
    })

  gui
    .add(parameters, 'size')
    .min(0.001)
    .max(0.1)
    .step(0.001)
    .onFinishChange(() => {
      generateGalaxy(scene)
    })

    gui
    .add(parameters, 'radius')
    .min(0.01)
    .max(20)
    .step(0.01)
    .onFinishChange(() => {
      generateGalaxy(scene)
    })

    gui
    .add(parameters, 'branches')
    .min(1)
    .max(20)
    .step(1)
    .onFinishChange(() => {
      generateGalaxy(scene)
    })

    gui
    .add(parameters, 'spin')
    .min(-5)
    .max(5)
    .step(0.001)
    .onFinishChange(() => {
      generateGalaxy(scene)
    })

    gui
    .add(parameters, 'randomness')
    .min(0)
    .max(2)
    .step(0.001)
    .onFinishChange(() => {
      generateGalaxy(scene)
    })

    gui
    .addColor(parameters, 'insideColor')
    .onFinishChange(() => {
      generateGalaxy(scene)
    })

    gui
    .addColor(parameters, 'outsideColor')
    .onFinishChange(() => {
      generateGalaxy(scene)
    })

}
