import React from 'react'
import './Logo.css'


export default function Logo(props) {
    const logo = props.logo.slice(9)
    return (
        <div>
            <img className="logo" src={require(`../../images/${logo}`).default} alt="logo"/>
        </div>
    )
}
