import React, { memo } from 'react'
import { Content, RecommendLeft, RecommendRight } from './style'
import TopBanner from './c-cpns/top-banner'
import HotCommend from './c-cpns/hotCommend'
import NewAlbum from './c-cpns/new-album'
import RecommendRanking from './c-cpns/recommend-ranking'
export default memo((props) => {

    return (
        <div>
            <TopBanner />
            <Content className='wrap-v2'>
                <RecommendLeft>
                    <HotCommend />
                    <NewAlbum />
                    <RecommendRanking />
                </RecommendLeft>
                <RecommendRight></RecommendRight>
            </Content>
        </div>
    )
})




