import withTitle from "../../Common/HOC/WithTitle"

function DisplayObject(props) {
    return (
        <div className="display-object-root-container">
            DisplayObject
        </div>
    )
}

export default withTitle(DisplayObject)("DisplayObject | PixiJS")