import withTitle from "../../Common/HOC/WithTitle"
import {useEffect, useRef} from "react";
import * as PIXI from 'pixi.js'
import panda from '../../../Images/panda.jpeg'
import monster from '../../../Images/monster.jpeg'
import './index.scss'

function Texture(props) {
    const pixiContainer = useRef()

    useEffect(() => {
        const app = new PIXI.Application({
            width: 512,         // default: 800
            height: 512,        // default: 600
            transparent: false, // default: false
            antialias: true,   // default: false
            resolution: 1,       // default: 1
        })
        pixiContainer.current.appendChild(app.view)

        const whiteTexture = PIXI.Texture.WHITE
        const texture = PIXI.Texture.fromImage(panda)
        console.log(`baseTexture: `)
        console.dir(texture.baseTexture)
        console.log(`defaultAnchor: `)
        console.dir(texture.defaultAnchor)
        console.log(`frame: `)
        console.dir(texture.frame)
        console.log(`width: `)
        console.log(texture.width)
        console.log(`height: `)
        console.log(texture.height)
        console.log(`noFrame: `)
        console.log(texture.noFrame)
        console.log(`orig: `)
        console.log(texture.orig)
        texture.rotate = 4
        console.log(`rotate: `)
        console.log(texture.rotate)
        console.log(`textureCacheIds: `)
        console.log(texture.textureCacheIds)
        console.log(`valid: `)
        console.log(texture.valid)

        let sprite1 = new PIXI.Sprite(whiteTexture)
        sprite1.width = 384
        sprite1.height = 384
        let sprite2 = new PIXI.Sprite(texture)
        sprite2.width = 100
        sprite2.height = 100

        const texture2 = texture.clone()
        let sprite3 = new PIXI.Sprite(texture2)
        sprite3.x = 200
        sprite3.y = 200
        sprite3.width = 100
        sprite3.height = 100

        app.stage.addChild(sprite1)
        app.stage.addChild(sprite2)
        app.stage.addChild(sprite3)

        setTimeout(() => {
            console.log(`texture2 is destroyed.`)
            texture2.destroy()
        }, 2000)
    }, [])

    return (
        <div className="texture-root-container">
            <h3>Texture</h3>
            <div className="pixi-container" ref={pixiContainer}></div>
        </div>
    )
}

export default withTitle(Texture)("Texture | PixiJS")