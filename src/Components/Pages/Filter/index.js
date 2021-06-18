import withTitle from "../../Common/HOC/WithTitle"
import {useEffect, useRef} from "react";
import * as PIXI from 'pixi.js'
import { DotFilter } from 'pixi-filters'
import panda from '../../../Images/panda.jpeg'
import monster from '../../../Images/monster.jpeg'
import './index.scss'

function Filter(props) {
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

        const vertex = `
            attribute vec2 aVertexPosition;
            attribute vec2 aTextureCoord;
            
            uniform mat3 projectionMatrix;
            
            varying vec2 vTextureCoord;
            
            void main(void)
            {
                gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
                vTextureCoord = aTextureCoord;
            }
        `

        const fragment = `
            varying vec2 vTextureCoord;
            uniform sampler2D uSampler;
            void main(void)
            {
                gl_FragColor = texture2D(uSampler, vTextureCoord);
            }
        `
        const myFilter = new PIXI.Filter(vertex, fragment)
        const dotFilter = new DotFilter()

        const texture = PIXI.Texture.from(monster);
        const img = new PIXI.Sprite(texture);

        img.x = app.screen.width / 2;
        img.y = app.screen.height / 2;
        img.anchor.x = 0.5;
        img.anchor.y = 0.5;
        img.filters = [dotFilter];
        app.stage.addChild(img);

    }, [])

    return (
        <div className="filter-root-container">
            <h3>Filter</h3>
            <div className="pixi-container" ref={pixiContainer}></div>
        </div>
    )
}

export default withTitle(Filter)("Filter | PixiJS")