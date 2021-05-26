import {
    CHANGE_TOP_BANNERS,
    CHANGE_HOT_RECOMMEND
} from './constants'
import {
    Map
} from 'immutable'
const initialState = Map({
    topBanners: [],
    hotRecommends: []
})

export default (state = initialState, {
    type,
    payload
}) => {
    switch (type) {

        case CHANGE_TOP_BANNERS:
            return state.set('topBanners', payload)
        case CHANGE_HOT_RECOMMEND:
            return state.set('hotRecommends', payload)

        default:
            return state
    }
}