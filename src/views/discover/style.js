import styled from 'styled-components'
export const Banner = styled.div `
.top {
    height: 30px;
    background-color: #C20C0C;
  }

 .banners {
     
    display:flex;
    padding-left:180px;
    .item a{
        height: 20px;
        line-height: 20px;
        padding: 5px 13px;
        margin: 7px 17px 0;
        color:#fff;
        &:hover,&.active{
            text-decoration:none;
            border-radius:20px;
            background-color: #9B0909;
        }
    }
}
`