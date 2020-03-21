import React from 'react'
import renderer from 'react-test-renderer'
import img_sender from '../../images/services-section/image/sender.svg'
import ServiceItem from '../common/ServiceFeature'

describe('ServiceItem', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(
                <ServiceItem
                    image={img_sender}
                    name={'test_name'}
                    detail={'test_detail'}
                />
            )
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
