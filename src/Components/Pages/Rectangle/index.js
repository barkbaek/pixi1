import withTitle from "../../Common/HOC/WithTitle"

function Rectangle(props) {
    return (
        <div className="rectangle-root-container">
            Rectangle
        </div>
    )
}

export default withTitle(Rectangle)("Rectangle | PixiJS")