import withTitle from "../../Common/HOC/WithTitle"
import {useEffect, useRef} from "react";
import * as PIXI from 'pixi.js'
import panda from '../../../Images/panda.jpeg'
import './index.scss'

function DisplayObject(props) {
    const pixiContainer = useRef()

    useEffect(() => {
        const app = new PIXI.Application({
            width: 512,         // default: 800
            height: 512,        // default: 600
            transparent: false, // default: false
            antialias: true,   // default: false
            resolution: 1,       // default: 1
            backgroundColor: 0xFFFFFF, // default: 0x000000
        })
        pixiContainer.current.appendChild(app.view)
        let texture = PIXI.Texture.from(panda)
        let sprite1 = new PIXI.Sprite(texture)
        sprite1.x = 256
        sprite1.y = 100
        sprite1.width = 150
        sprite1.height = 159.75
        sprite1.alpha = 0.6
        sprite1.interactive = true
        sprite1.buttonMode = true
        sprite1.cursor = 'grab'
        const pointerCallback = () => {
            alert("Panda is clicked!")
        }
        sprite1.on("pointerdown", pointerCallback)
        sprite1.name = "panda"
        console.log(`sprite1.parent : ${sprite1.parent}`)
        console.log(`sprite1.renderable : ${sprite1.renderable}`)
        sprite1.rotation = 1
        sprite1.visible = true
        console.log(`sprite1.worldAlpha : ${sprite1.worldAlpha}`)
        console.log(`sprite1.worldTransform: `)
        console.dir(sprite1.worldTransform)
        console.log(`sprite1.worldVisible: ${sprite1.worldVisible}`)
        app.stage.addChild(sprite1)
    }, [])

    return (
        <div className="display-object-root-container">
            <h3>DisplayObject</h3>
            <div className="pixi-container" ref={pixiContainer}></div>
        </div>
    )
}

export default withTitle(DisplayObject)("DisplayObject | PixiJS")