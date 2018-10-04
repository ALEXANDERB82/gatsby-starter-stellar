import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/images/logo.svg';

const HeaderGeneric = (props) => (
    <header id="header">
        <div><Link to="" className="logo"><img src={logo} alt="" /></Link></div>
        <h1>Resume</h1>
        <p>My Current Resume</p>
    </header>
)

export default HeaderGeneric
