import withTitle from "../../Common/HOC/WithTitle"
import {useEffect, useRef} from "react";
import * as PIXI from 'pixi.js'
import './index.scss'

function Graphics(props) {
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
        let graphic = new PIXI.Graphics()
        graphic.x = app.renderer.width / 2
        graphic.y = app.renderer.height / 2
        app.stage.addChild(graphic)

        graphic.beginFill(0xff0000)
        graphic.arc(0, 0, 50, 0, Math.PI)
        graphic.endFill()

        graphic.beginFill(0x00ff00)
        graphic.drawCircle(-190, -190, 60)
        graphic.endFill()

        graphic.beginFill(0x770077)
        graphic.drawEllipse(-170, 0, 80, 50)
        graphic.endFill()

        graphic.beginFill(0x0000ff)
        graphic.drawRect(-80, -240, 50, 100)
        graphic.endFill()

        graphic.beginFill(0xffff00)
        graphic.drawStar(70, -170, 5, 80, 30)
        graphic.endFill()

        graphic.beginFill(0x00ffff)
        graphic.drawShape(new PIXI.Circle(0, 0, 10))
        graphic.endFill()

        graphic.beginFill(0xff00ff)
        graphic.drawPolygon([new PIXI.Point(100, 100), new PIXI.Point(100, 200), new PIXI.Point(200, 100)]);
        graphic.endFill()

        graphic.moveTo(-200, 100)
        graphic.lineStyle(5, 0x00ff00)
        graphic.lineTo(-200, 150)
        graphic.lineTo(-150, 150)
        graphic.bezierCurveTo(-150, 150, -200, 125, -200, 100)
        graphic.moveTo(0, 0)
        graphic.quadraticCurveTo(0, 200, -200, 100)

    }, [])

    return (
        <div className="graphics-root-container">
            <h3>Graphics</h3>
            <div className="pixi-container" ref={pixiContainer}></div>
        </div>
    )
}

export default withTitle(Graphics)("Graphics | PixiJS")