import withTitle from "../../Common/HOC/WithTitle"
import {useEffect, useRef} from "react";
import * as PIXI from 'pixi.js'
import image from '../../../Images/videomonster.jpg'

function Application(props) {
    const container = useRef()

    useEffect(() => {
        const app = new PIXI.Application()
        //document.getElementById("pixi-container").appendChild(app.view)
        container.current.appendChild(app.view)
        app.stage.addChild(PIXI.Sprite.fromImage(image))
    }, [])

    return (
        <div className="application-root-container">
            Application
            <div ref={container} id="pixi-container"></div>
        </div>
    )
}

export default withTitle(Application)("Application | PixiJS")