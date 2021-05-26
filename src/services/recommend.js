import request from './request'
const getTopBanners = () => request({
    url: '/banner'
})
const getHotRecommend = limit => request({
    url: '/personalized?limit=8',
    params: {
        limit
    }
})
export {
    getTopBanners,
    getHotRecommend
}