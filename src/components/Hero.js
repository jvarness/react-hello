import React from 'react'
import { Link } from 'react-router-dom'

const Hero = ({ hero }) => (
    <li>
        <Link to={"/hero/".concat(hero.id)}>
            <span class='badge'>{hero.id}</span>{hero.name}
        </Link>
    </li>
)

export default Hero