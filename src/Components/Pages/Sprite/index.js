import withTitle from "../../Common/HOC/WithTitle"
import {useEffect, useRef} from "react";
import * as PIXI from 'pixi.js'
import panda from '../../../Images/panda.jpeg'
import monster from '../../../Images/monster.jpeg'
import './index.scss'

function Sprite(props) {
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
        const loader = PIXI.loader
        loader.reset()
        let img

        const setup = () => {
            console.log("loading completed")
            const texture = loader.resources.panda.texture
            img = new PIXI.Sprite(texture)
            img.anchor.x = 0.5
            img.anchor.y = 0.5
            img.tint = 0x00FFFF
            app.stage.addChild(img)
            app.ticker.add(animate)
            setTimeout(() => {
                img.texture = loader.resources.monster.texture
            }, 2500)
        }

        const handleLoadProgress = (loader, resource) => {
            console.log(`${loader.progress}% loaded.`)
        }

        const handleLoadAsset = (loader, resource) => {
            console.log(`asset loaded - name: ${resource.name}, url: ${resource.url}`)
        }

        const handleLoadError = () => {
            console.error("load error")
        }

        const animate = () => {
            img.x = app.renderer.screen.width / 2
            img.y = app.renderer.screen.height / 2
            img.rotation += 0.1
        }

        loader.add("panda", panda)
            .add("monster", monster)
            .load(setup)
        loader.onLoad.add(handleLoadAsset)
        loader.onProgress.add(handleLoadProgress)
        loader.onError.add(handleLoadError)
    }, [])

    return (
        <div className="sprite-root-container">
            <h3>Sprite</h3>
            <p>
                Please wait 2.5 seconds and check Console.
            </p>
            <div className="pixi-container" ref={pixiContainer}></div>
        </div>
    )
}

export default withTitle(Sprite)("Sprite | PixiJS")