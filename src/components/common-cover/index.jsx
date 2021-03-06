import React, { memo } from 'react'
import { ThemeCoverWrapper } from './style'
import { getCount, getSizeImage } from '@/utils/format-utils'
export default memo(function CommonCover(props) {
    const { info, right } = props
    return (
        <ThemeCoverWrapper right={right}>
            <div className="cover-top">
                <img src={getSizeImage(info.picUrl || info.coverImgUrl)} alt="" />
                <div className="cover sprite_covor">
                    <div className="info sprite_covor">
                        <span>
                            <i className="sprite_icon erji"></i>
                            {getCount(info.playCount)}
                        </span>
                        <i className="sprite_icon play"></i>
                    </div>
                </div>
            </div>
            <div className="cover-bottom"> {info.name}</div>
            <div className="cover-source">by {info.copywriter || info.creator.nickname}</div>
        </ThemeCoverWrapper>
    )
})
