import withTitle from "../../Common/HOC/WithTitle"

function Text(props) {
    return (
        <div className="text-root-container">
            Text
        </div>
    )
}

export default withTitle(Text)("Text | PixiJS")