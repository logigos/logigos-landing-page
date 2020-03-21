import React from 'react'
import renderer from 'react-test-renderer'
import { IconFaceBook, IconLine } from '../common/IconSocial'

describe('StepItem', () => {
    it('Icon Facebook | renders correctly', () => {
        const tree = renderer.create(<IconFaceBook />).toJSON()
        expect(tree).toMatchSnapshot()
    })
    it('Icon Line | renders correctly', () => {
        const tree = renderer.create(<IconLine />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
