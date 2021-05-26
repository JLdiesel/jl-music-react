import styled from 'styled-components'
import download from '@/assets/img/download.png'
import banner_sprite from '@/assets/img/banner_sprite.png'
export const BannerWarpper = styled.div `
    background:url(${props=>props.images}) center center/6000px;
    .banner{
        height: 270px;
        display:flex;
        background-color:red;
        position: relative;
    }
`
export const BannerLeft = styled.div `
     width:730px;
     .banner-item{
          overflow: hidden;
    height: 270px;
     }
      .image {
      width: 100%;
    }
`
export const BannerRight = styled.a.attrs({
    href: 'https://music.163.com/#/download',
    target: '_blank'
})
`
height:270px;
width:254px;
background-image: url(${download});
    `
export const BannerControl = styled.div `
    position:absolute;
    top:50%;
    left:0;
    right:0;
    transform: translateY(-50%);
    .btn{
         position: absolute;
          width: 37px;
          height: 63px;
          background-color: transparent;
        background-image:url(${banner_sprite});
        cursor: pointer;
        &:hover{
            background-color: rgba(0, 0, 0, .1);
        }
    }
    .left {
         left: -68px;
         background-position:0 -360px;
    }
    .right{
        right:-68px;
        background-position:0 -508px;
    }
`