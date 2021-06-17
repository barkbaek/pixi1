import withTitle from "../../Common/HOC/WithTitle"
import {useEffect, useRef} from "react";
import * as PIXI from 'pixi.js'
import image from '../../../Images/videomonster.jpg'
import './index.scss'

function Application(props) {
    const pixiContainer = useRef()

    useEffect(() => {
        const app = new PIXI.Application({
            autoStart: true,    // default: true
            width: 512,         // default: 800
            height: 512,        // default: 600
            transparent: false, // default: false
            antialias: true,   // default: false
            preserveDrawingBuffer: false, // default: false
            resolution: 1,       // default: 1
            forceCanvas: false,  // default: false
            backgroundColor: 0x00FFFF, // default: 0x000000
            clearBeforeRender: true, // default: true
            roundPixels: false, // default: false
            forceFXAA: false,   // default: false
            legacy: false,      // default: false
            sharedTicker: false,    // default: false
            sharedLoader: false,    // default: false
        })
        pixiContainer.current.appendChild(app.view)
        let sprites = {}
        sprites.vm = PIXI.Sprite.fromImage(image)
        sprites.vm.x = 0
        sprites.vm.y = 0
        sprites.vm.width = 512
        sprites.vm.height = 512

        app.stage.addChild(sprites.vm)
    }, [])

    return (
        <div className="application-root-container">
            <h3>Application</h3>
            <div className="pixi-container" ref={pixiContainer}></div>
        </div>
    )
}

export default withTitle(Application)("Application | PixiJS")