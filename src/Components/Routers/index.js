import React, { useEffect } from 'react'
import {
    Switch,
    Route,
    useLocation
} from 'react-router-dom'

import Menu from '../Common/Components/Menu'
import Home from './Home'
import Application from './Application'
import DisplayObject from './DisplayObject'
import Filter from './Filter'
import Graphics from './Graphics'
import Rectangle from './Rectangle'
import Sprite from './Sprite'
import Text from './Text'
import Texture from './Texture'

function DetectPageViews() {
    const location = useLocation()
    useEffect(() => {
        console.log(location.pathname)
    }, [ location ])
}

function Routers(props) {
    const allRoutes = [
        ...Home,
        ...Application,
        ...DisplayObject,
        ...Sprite,
        ...Texture,
        ...Graphics,
        ...Text,
        ...Rectangle,
        ...Filter
    ]

    DetectPageViews()
    return (
        <>
            <Menu />
            <Switch>
                {
                    allRoutes.map(({ path, exact, component: Component }) => (
                        <Route key={path} exact={exact} path={path}>
                            <Component />
                        </Route>
                    ))
                }
            </Switch>
        </>
    )
}

export default Routers