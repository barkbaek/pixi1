import withTitle from "../../Common/HOC/WithTitle"
import {useEffect, useRef} from "react";
import * as PIXI from 'pixi.js'
import {
    AdjustmentFilter,
    AdvancedBloomFilter,
    AsciiFilter,
    BevelFilter,
    BloomFilter,
    ColorMapFilter,
    ColorReplaceFilter,
    ConvolutionFilter,
    CrossHatchFilter,
    CRTFilter,
    DotFilter,
    DropShadowFilter,
    EmbossFilter,
    GlitchFilter,
    GlowFilter,
    KawaseBlurFilter,
    OldFilmFilter,
    PixelateFilter,
    ReflectionFilter,
    RGBSplitFilter,
    TiltShiftFilter,
    TwistFilter,
    ZoomBlurFilter,
} from 'pixi-filters'
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
        const adjustmentFilter = new AdjustmentFilter()
        const advancedBloomFilter = new AdvancedBloomFilter()
        const asciiFilter = new AsciiFilter()
        const bevelFilter = new BevelFilter()
        const bloomFilter = new BloomFilter()
        const colorMapFilter = new ColorMapFilter()
        const colorReplaceFilter = new ColorReplaceFilter()
        const convolutionFilter = new ConvolutionFilter()
        const crossHatchFilter = new CrossHatchFilter()
        const crtFilter = new CRTFilter()
        const dotFilter = new DotFilter()
        const dropShadowFilter = new DropShadowFilter()
        const embossFilter = new EmbossFilter()
        const glitchFilter = new GlitchFilter()
        const glowFilter = new GlowFilter()
        const kawaseBlurFilter = new KawaseBlurFilter()
        const oldFilmFilter = new OldFilmFilter()
        const pixelateFilter = new PixelateFilter()
        const reflectionFilter = new ReflectionFilter()
        const rgbSplitFilter = new RGBSplitFilter()
        const tiltShiftFilter = new TiltShiftFilter()
        const twistFilter = new TwistFilter()
        const zoomBlurFilter = new ZoomBlurFilter()

        const texture = PIXI.Texture.from(monster)
        const img = new PIXI.Sprite(texture)

        img.x = app.screen.width / 2
        img.y = app.screen.height / 2
        img.anchor.x = 0.5
        img.anchor.y = 0.5
        img.filters = [zoomBlurFilter]
        app.stage.addChild(img)

    }, [])

    return (
        <div className="filter-root-container">
            <h3>Filter</h3>
            <div className="pixi-container" ref={pixiContainer}></div>
        </div>
    )
}

export default withTitle(Filter)("Filter | PixiJS")