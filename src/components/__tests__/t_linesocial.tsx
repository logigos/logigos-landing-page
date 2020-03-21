import React from 'react'
import renderer from 'react-test-renderer'

import { LineEmail, LineTell } from '../common/InLineSocial'

describe('LineSocial', () => {
    it('LineEmail | renders correctly', () => {
        const tree = renderer
            .create(<LineEmail width="4rem" height="4rem" />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
    it('LineTell | renders correctly', () => {
        const tree = renderer.create(<LineTell />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
