import withTitle from "../../Common/HOC/WithTitle"
import {useEffect, useRef} from "react";
import * as PIXI from 'pixi.js'
import panda from '../../../Images/panda.jpeg'
import monster from '../../../Images/monster.jpeg'
import './index.scss'

function Text(props) {
    const pixiContainer = useRef()

    useEffect(() => {
        const app = new PIXI.Application({
            width: 512,         // default: 800
            height: 512,        // default: 600
            transparent: false, // default: false
            antialias: true,   // default: false
            resolution: 1,       // default: 1
            backgroundColor: 0x787878
        })
        pixiContainer.current.appendChild(app.view)
        let text = new PIXI.Text(
            "This is PixiJS Text",
            {
                fontFamily: 'Arial',
                fontSize: 32,
                fill: 0xff1010,
                align: 'center'
            }
        )
        text.y = app.renderer.height / 2
        text.alpha = 0.5
        text.rotation = 5
        app.stage.addChild(text)

    }, [])

    return (
        <div className="text-root-container">
            <h3>Text</h3>
            <div className="pixi-container" ref={pixiContainer}></div>
        </div>
    )
}

export default withTitle(Text)("Text | PixiJS")