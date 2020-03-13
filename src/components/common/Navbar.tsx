import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import R from '../resources/R'

const NavRoot = styled.nav`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: absolute;
    top: 4.8rem;
    right: 4.8rem;
    z-index: 1;
`

const Navbar = () => {
    return (
        <NavRoot>
            <Button
                bg="transparent"
                hbg={R.colors.white_75}
                abg={R.colors.black_10}
                height="4.7rem"
                width="15rem"
                font_size="2.4rem"
                margin="auto 1.2rem"
            >
                เข้าสู่ระบบ
            </Button>
            <Button
                bg="transparent"
                hbg="white"
                abg={R.colors.white_92}
                height="4.7rem"
                width="18rem"
                font_size="2.4rem"
                border={`solid .3rem white`}
                aborder={`solid .3rem ${R.colors.white_92}`}
                hcolor={R.colors.black_60}
                margin="auto 1.2rem"
            >
                สมัครสมาชิก
            </Button>
        </NavRoot>
    )
}

export default Navbar
