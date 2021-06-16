import withTitle from "../../Common/HOC/WithTitle"

function Application(props) {
    return (
        <div className="application-root-container">
            Application
        </div>
    )
}

export default withTitle(Application)("Application | PixiJS")