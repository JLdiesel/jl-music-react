import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { discoverMenu } from '@/common/local-data'
import { Banner } from './style'
export default memo(function JLDiscover(props) {

    const { route } = props
    return (

        <Banner >
            <div className='top'>
                <div className='wrap-v1 banners' >
                    {
                        discoverMenu.map((item, index) => (

                            <div className='item' key={item.title}>
                                <NavLink to={item.link}>{item.title}</NavLink>
                            </div>
                        )
                        )
                    }</div></div>
            {renderRoutes(route.routes)}

        </Banner>


    )
})
