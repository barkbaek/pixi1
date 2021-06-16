const {useEffect} = require("react");

const withTitle = WrappedComponent => title => {
    return props => {
        useEffect(() => {
            document.title = title
        }, [])

        return (
            <WrappedComponent {...props} />
        )
    }
}

export default withTitle
