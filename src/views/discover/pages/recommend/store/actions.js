import {
    CHANGE_TOP_BANNERS,
    CHANGE_HOT_RECOMMEND
} from './constants'
import {
    getTopBanners,
    getHotRecommend
} from '@/services/recommend'
export const changeTopBannersAction = (payload) => ({
    type: CHANGE_TOP_BANNERS,
    payload
})
export const changeHotRecommends = (payload) => ({
    type: CHANGE_HOT_RECOMMEND,
    payload
})
export const getHotRecommendsAction = () => dispatch => {
    getHotRecommend().then(res => {
        dispatch(changeHotRecommends(res.data.result))
    })
}

export const getTopBannersAction = (limit) => dispatch => {
    getTopBanners(limit).then(res => {
        dispatch(changeTopBannersAction(res.data.banners))

    })
}