import React from 'react'
import renderer from 'react-test-renderer'

import FaqItem from '../common/FaqsItem'

describe('FAQItem', () => {
    const Mockfaqs = {
        Q: 'Question',
        A: 'Anwser',
    }

    const handleOnClick = () => console.log('ok')

    it('(NOT EXPAND) renders correctly', () => {
        const tree = renderer
            .create(
                <FaqItem
                    expand={false}
                    handleOnClick={() => handleOnClick()}
                    {...Mockfaqs}
                />
            )
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
    it('(EXPAND) renders correctly', () => {
        const tree = renderer
            .create(
                <FaqItem
                    expand={true}
                    handleOnClick={() => handleOnClick()}
                    {...Mockfaqs}
                />
            )
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
