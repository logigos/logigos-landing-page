import React from 'react'
import renderer from 'react-test-renderer'
import StepItem from '../common/StepFeature'
import IconAnnouce from '../../images/step-section/icon/annouce.svg'

describe('StepItem', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(
                <StepItem
                    icon={<IconAnnouce />}
                    name={'test_name'}
                    detail={'test_detail'}
                />
            )
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
