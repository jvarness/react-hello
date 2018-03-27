import React from 'react'

const Hero = ({ hero }) => (
    <li>
        <span class='badge'>{hero.id}</span>{hero.name}
    </li>
)

export default Hero