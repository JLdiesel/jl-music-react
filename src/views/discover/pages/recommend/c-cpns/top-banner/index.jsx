import React, { memo, useEffect, useRef, useState, useCallback } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { getTopBannersAction } from '../../store/actions'
import { Carousel } from 'antd'
import { BannerControl, BannerLeft, BannerRight, BannerWarpper } from './style'
export default memo(function TopBanner() {
    //记录当前轮播图的下标志
    const [currentIndex, setCurrentIndex] = useState(0);
    //创建dispatch方法
    const dispatch = useDispatch()
    const bannerRef = useRef()
    //派发action，调用reduxreducers改变TopBanners的存值
    useEffect(() => {
        dispatch(getTopBannersAction())
    }, [dispatch])
    //用useSelector hooks从redux中取出topBanners 
    // 传入shallowEqual参数可以做性能优化，防止组件进行不必要的渲染
    const { topBanners } = useSelector(state =>
    ({
        topBanners: state.getIn(['recommendReducer', 'topBanners'])
    }), shallowEqual)
    //当轮播图发生改变的时候调用回调，更改CurrentIndex
    const bannerChange = useCallback(
        (from, to) => {
            setTimeout(() => {
                setCurrentIndex(from)

            }, 0);
        }, []
    )
    //拼接images加上参数可以实现毛玻璃
    const images = topBanners[currentIndex] && (topBanners[currentIndex].imageUrl + "?imageView&blur=40x20")
    return (
        <BannerWarpper images={images}>
            <div className='banner wrap-v2'>
                <BannerLeft>
                    <Carousel autoplay ref={bannerRef} beforeChange={bannerChange}>
                        {topBanners.map((item) => {
                            return <div className='banner-item' key={item.targetId} >
                                <img className="image" src={item.imageUrl} alt="" />
                            </div>
                        })}
                    </Carousel>
                </BannerLeft>
                <BannerRight></BannerRight>
                <BannerControl>
                    <button className='btn left' onClick={() => bannerRef.current.prev()} ></button>
                    <button className='btn right' onClick={() => bannerRef.current.next()}></button>
                </BannerControl>
            </div>
        </BannerWarpper>

    )
})
