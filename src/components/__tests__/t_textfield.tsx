import React from 'react'
import renderer from 'react-test-renderer'

import { TextField } from '../common/TextField'

describe('TextField', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<TextField />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
