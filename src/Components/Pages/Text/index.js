import withTitle from "../../Common/HOC/WithTitle"
import {useEffect, useRef} from "react";
import * as PIXI from 'pixi.js'
import panda from '../../../Images/panda.jpeg'
import monster from '../../../Images/monster.jpeg'
import './index.scss'

function Text(props) {
    const pixiContainer = useRef()

    useEffect(() => {

    }, [])

    return (
        <div className="text-root-container">
            <h3>Text</h3>
            <div className="pixi-container" ref={pixiContainer}></div>
        </div>
    )
}

export default withTitle(Text)("Text | PixiJS")