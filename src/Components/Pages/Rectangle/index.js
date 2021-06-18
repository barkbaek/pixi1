import withTitle from "../../Common/HOC/WithTitle"
import {useEffect, useRef} from "react";
import * as PIXI from 'pixi.js'
import panda from '../../../Images/panda.jpeg'
import './index.scss'

function Rectangle(props) {
    const pixiContainer = useRef()
    useEffect(() => {
        const app = new PIXI.Application({
            width: 512,         // default: 800
            height: 512,        // default: 600
            transparent: false, // default: false
            antialias: true,   // default: false
            resolution: 1,       // default: 1
            backgroundColor: 0xFFFFFF
        })
        pixiContainer.current.appendChild(app.view)

        app.loader.add("panda", panda)
            .load((loader,resources) => {
                const rect = new PIXI.Rectangle(100, 50, 256, 256)
                const texture = new PIXI.Texture(resources.panda.texture, rect)
                let sprite = new PIXI.Sprite(texture)
                app.stage.addChild(sprite)

                console.log(`rect.top: ${rect.top}`)
                console.log(`rect.right: ${rect.right}`)
                console.log(`rect.bottom: ${rect.bottom}`)
                console.log(`rect.left: ${rect.left}`)
                console.log(`rect.contains(x, y): ${rect.contains(110, 60)}`)

            })

    }, [])

    return (
        <div className="rectangle-root-container">
            <h3>Rectangle</h3>
            <p>
                Please check Console.
            </p>
            <div className="pixi-container" ref={pixiContainer}></div>
        </div>
    )
}

export default withTitle(Rectangle)("Rectangle | PixiJS")