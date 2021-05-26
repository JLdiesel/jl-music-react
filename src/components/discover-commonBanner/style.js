import styled from 'styled-components'
export const HeaderWrapper = styled.div `
   display:flex;
    justify-content:space-between;
  height:33px;
  border-bottom: 2px solid #C10D0C;
  padding:0 10px 4px 34px;
    align-items: center;

background-position: -225px -156px;
    .left{
        display:flex;
        align-items: center;
        .title{
            color:#333;
            font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
            font-size:20px;
            margin-right:20px;
        }
        .keyword{
            display:flex;
            color:#666;
            .item{
                text-align: center;
                padding: 0 15px;
                border-right:1px solid #CCC;
                &:last-child{
                    border-right:0
                }
            }
        }
    }

    .right{
        display: flex;
    align-items: center;
        .icon{
             display: inline-block;
      width: 12px;
      height: 12px;
      margin-left: 4px;
      background-position: 0 -240px;
        }
    }
    
`