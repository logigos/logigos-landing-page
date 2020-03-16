import React, { FC } from 'react'
import Icons from '../resources/Icons'

export interface SVGType {
    name?: string
    // style?: object
    fill?: string
    width?: string
    height?: string
    stroke?: string
    stroke_width?: string
}

const SVGIcon: FC<SVGType> = props => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        // style={style}
        width={props.width}
        height={props.height}
        viewBox={Icons[props.name || ''].viewBox}
        fill={props.fill}
    >
        <path
            d={Icons[props.name || ''].path}
            stroke={props.stroke || Icons[props.name || ''].stroke}
            strokeWidth={
                props.stroke_width || Icons[props.name || ''].stroke_width
            }
        />
    </svg>
)

export default SVGIcon
