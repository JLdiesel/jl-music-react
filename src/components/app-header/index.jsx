import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import classnames from "classnames";
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { HeaderWrapper, HeaderLeft, HeaderRight } from './style'
import { headerLinks } from '@/common/local-data'
export default memo(function JLAppHeader() {
    const showSelectItem = (item, index) => {
        if (index < 3) {
            return (<NavLink to={item.link} >{item.title} <i className="sprite_01 icon"></i></NavLink>)
        } else {
            return <a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a>
        }
    }

    return (
        <HeaderWrapper className='header '>
            <div className='content wrap-v1' >
                <HeaderLeft>
                    <a href="#/" className='logo sprite_01' >网易云音乐</a>
                    <div className='select-list'>
                        {
                            headerLinks.map((item, index) => (
                                <div className={classnames('select-item')} key={item.title}>
                                    {showSelectItem(item, index)}
                                </div>
                            ))
                        }
                    </div>
                </HeaderLeft>
                <HeaderRight>
                    <Input className='search' placeholder='音乐/视频/电台/用户' prefix={<SearchOutlined />} />
                    <NavLink to='/login' className='porducter' >创作者中心</NavLink>

                    <NavLink to='/login' style={{ width: '28px' }}>登录</NavLink></HeaderRight></div>
            <div className='divider '>
            </div>
        </HeaderWrapper>
    )
})
