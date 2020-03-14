// import React from 'react'
import styled from 'styled-components'

export const Conflexrow = styled.div`
    display: flex;
`

export const ConflexrowCenter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ConflexcolCenter = styled(ConflexrowCenter)`
    flex-direction: column;
`

export const Headerflexrow = styled.header`
    display: flex;
`

export const Conflexcol = styled(Conflexrow)`
    flex-direction: column;
`

export const ConflexcolCenterH = styled(Conflexcol)`
    align-items: center;
`

export const ContainerSection = styled(Conflexcol)`
    align-items: center;
    margin-top: 8.8rem;
`
