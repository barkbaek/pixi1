import React, {useEffect, useState} from 'react'
import { Link, useLocation } from 'react-router-dom'
import './index.scss'

function Menu (props) {
    const location = useLocation()

    const links = [
        {
            path: '/',
            name: 'Home'
        },
        {
            path: '/application',
            name: 'Application'
        },
        {
            path: '/display-object',
            name: 'DisplayObject'
        },
        {
            path: '/sprite',
            name: 'Sprite'
        },
        {
            path: '/texture',
            name: 'Texture'
        },
        {
            path: '/graphics',
            name: 'Graphics'
        },
        {
            path: '/text',
            name: 'Text'
        },
        {
            path: '/rectangle',
            name: 'Rectangle'
        },
        {
            path: '/filter',
            name: 'Filter'
        }
    ]

    const [selectedMenu, setSelectedMenu] = useState('Home')

    useEffect(() => {
        setSelectedMenu(location.pathname);
    }, [location.pathname])

    return (
        <div className="menu-root-container">
            <div className="menu-item-container">
                {links.map(({ path, name }) => (
                    <Link key={path} to={path} className={`menu-item ${path === selectedMenu ? 'selected' : ''}`}>{name}</Link>
                ))}
            </div>
        </div>
    )
}

export default Menu