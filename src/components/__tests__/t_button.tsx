import React from 'react'
import renderer from 'react-test-renderer'

import Button from '../common/Button'

describe('Button', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<Button>TEST</Button>).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
