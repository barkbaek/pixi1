import withTitle from "../../Common/HOC/WithTitle"

function Sprite(props) {
    return (
        <div className="sprite-root-container">
            Sprite
        </div>
    )
}

export default withTitle(Sprite)("Sprite | PixiJS")