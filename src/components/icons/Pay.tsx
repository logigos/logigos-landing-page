import React, { FC } from 'react'
interface SVGType {
    stroke?: string
}
const PayIcon: FC<SVGType> = ({ stroke }) => {
    return (
        <svg
            width="132"
            height="111"
            viewBox="0 0 132 111"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g filter="url(#filter0_dd)">
                <g clip-path="url(#clip0)">
                    <path
                        d="M30.8902 23.9601C30.8902 21.751 32.681 19.9601 34.8902 19.9601H96.1411C98.3423 19.9601 100.13 21.7387 100.141 23.9399L100.348 64.896C100.359 67.113 98.565 68.9162 96.3479 68.9162H34.8902C32.681 68.9162 30.8902 67.1253 30.8902 64.9162V23.9601ZM66.6182 33.6827C69.6019 33.6827 72.4634 34.8679 74.5731 36.9777C76.6829 39.0875 77.8682 41.949 77.8682 44.9327C77.8682 47.9164 76.6829 50.7778 74.5731 52.8876C72.4634 54.9974 69.6019 56.1827 66.6182 56.1827C63.6345 56.1827 60.773 54.9974 58.6632 52.8876C56.5535 50.7778 55.3682 47.9164 55.3682 44.9327C55.3682 41.949 56.5535 39.0875 58.6632 36.9777C60.773 34.8679 63.6345 33.6827 66.6182 33.6827ZM45.7253 26.8832C45.7253 28.8723 45.7253 30.3448 44.2418 32.3228C42.7583 34.3008 39.8024 34.7326 37.8132 34.7326V54.5755C39.8024 54.5755 42.7583 54.8901 44.2418 56.8682C45.7253 58.8462 45.7253 60.4985 45.7253 62.4876H85.2858C85.2858 60.4985 85.2858 58.6663 87.2638 56.8682C89.2418 55.07 91.2087 55.07 93.1979 55.07V44.9327V34.7953C91.2087 34.7953 88.6703 33.7293 87.2638 32.3228C85.8573 30.9163 85.2858 28.8723 85.2858 26.8832H45.7253Z"
                        stroke={stroke}
                        stroke-width="4"
                    />
                </g>
            </g>
            <defs>
                <filter
                    id="filter0_dd"
                    x="0"
                    y="-21"
                    width="132"
                    height="132"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feOffset dx="9" dy="9" />
                    <feGaussianBlur stdDeviation="6" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.9 0 0 0 0 0.9 0 0 0 0 0.9 0 0 0 0.5 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow"
                    />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feOffset dx="-9" dy="-9" />
                    <feGaussianBlur stdDeviation="6" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.99 0 0 0 0 0.99 0 0 0 0 0.99 0 0 0 0.5 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="effect1_dropShadow"
                        result="effect2_dropShadow"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect2_dropShadow"
                        result="shape"
                    />
                </filter>
                <clipPath id="clip0">
                    <rect x="21" width="90" height="90" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}

export default PayIcon
