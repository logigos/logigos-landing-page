import React from 'react'
import renderer from 'react-test-renderer'

import Navbar from '../common/Navbar'

describe('Navbar', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<Navbar />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
