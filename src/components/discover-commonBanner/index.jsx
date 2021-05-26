import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { HeaderWrapper } from './style'
const DiscoverCommonBanner = memo(function index(props) {
    const { title, keywords } = props
    return (
        <HeaderWrapper className='sprite_02 '>
            <div className='left'>
                <a className='title'>{title}</a>
                <div className='keyword'>
                    {
                        keywords.map((item, index) => {
                            return (<a href="todo" key={item} className='item'>{item}</a>)
                        })
                    }
                </div></div>
            <div className='right'>
                <div>更多</div>
                <i className="icon sprite_02"></i>
            </div>
        </HeaderWrapper>
    )
})

DiscoverCommonBanner.propTypes = {
    title: PropTypes.string.isRequired,
    keywords: PropTypes.array
}
DiscoverCommonBanner.defaultProps = {
    keywords: []
}

export default DiscoverCommonBanner
