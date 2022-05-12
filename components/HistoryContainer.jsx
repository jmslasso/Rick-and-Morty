import styled from 'styled-components'

export const HistoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    position: absolute;
    background: rgba(0,0,0,.6);
    right: 0;
    overflow: auto;
    overflow-x: hidden;
    top:7vh;
    height: 93vh;
    width: auto;
    gap:10px;
    padding:0 20px;

    div{
        width: 100%;
        img{
            width: 140px;
            height:140px;
            border-radius: 50%;
        }
        button{
            position: absolute;
            left: 19.5px;
            background-color:transparent;
            color: white;
            font-size: 16px;
            cursor: pointer;
            width: 140px;
            height: 140px;
            border-radius: 50%;
            opacity: 0;
            &:hover{
                opacity: 1;
                border-color: white;

                span{
                    opacity:1;
                    transition: 0.5s ease-in;
                    font-family: 'Schwifty';
                    color: black;
                    font-size: 40px;
                }   
            }
            span{
                opacity: 0;
            }
        }
    }
`;