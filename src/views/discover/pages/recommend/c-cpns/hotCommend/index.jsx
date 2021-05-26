
import React, { memo, useEffect } from 'react'
import DiscoverCommonBanner from '@/components/discover-commonBanner'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { getHotRecommendsAction } from '../../store/actions'
import CommonCover from '@/components/common-cover'
import { RecommendWrapper } from './style'
export default memo(function HotCommend() {
    const dispatch = useDispatch();
    const { hotRecommends } = useSelector(state => ({
        hotRecommends: state.getIn(['recommendReducer', 'hotRecommends'])
    }), shallowEqual)
    useEffect(() => {
        dispatch(getHotRecommendsAction(8));
    }, [dispatch])
    return (
        <RecommendWrapper>
            <DiscoverCommonBanner title='热门推荐'
                keywords={['华语', '流行', '摇滚', '民谣', '电子']}
            />
            <div className='imgitem' >
                {hotRecommends.map((item, index) => (
                    <CommonCover info={item} key={item.id}></CommonCover>
                ))}
            </div>
        </RecommendWrapper >
    )
})
