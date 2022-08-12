import styled from "styled-components";

const StyledSkills = styled.div`
  .wrapper{
    width: 50%;
    position: absolute;
    transform: translate(-50%,-50%);
    left: 70%;
    top: 55%;
    font-family: "Poppins",sans-serif;
    color: #ffffff;
    font-weight: 500;
}

.container-2{
    width: 100%;
    padding: 20px;
    box-shadow: 0 0 20px black;
    backdrop-filter: blur(5px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#title-skill{
    margin-bottom: 40px;
    letter-spacing: 2px;
    color: rgb(12, 224, 5);
    padding: 5px 15px;
    box-shadow: 0 0 10px rgb(229, 226, 226);
}

.skills{
    width: 100%;
}

.details{
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
    font-size: 22px;
}
#details-1{
    color: orangered;
    font-weight: bold;
}
#details-2{
    color: rgb(3, 186, 227);
    font-weight: 600;
}
#details-3{
    color: orange;
    font-weight: 600;
}
#details-4{
    color: aqua;
    font-weight: lighter;
}

.bar{
    position: relative;
    background-color: rgba(255,255,255,0.06);
    border: 1px solid rgba(255, 255, 255, 0.247);
    padding: 7px 10px;
    margin-bottom: 25px;
    border-radius: 20px;
    backdrop-filter: blur(10px);
}

.bar div{
    position: relative;
    width: 0px;
    height: 4px;
    border-radius: 10px;
    background-color: #badefc;
    border: 1px solid #1c97fc;
    box-shadow: 0 0 5px rgba(28,151,252,0.6);
}
#html-bar{
    animation: html-fill 2s forwards;
}
@keyframes html-fill{
    100%{
        width: 90%;
    }
}

#css-bar{
    animation: css-fill 2s forwards;
}
@keyframes css-fill{
    100%{
        width: 75%;
    }
}

#js-bar{
    animation: js-fill 2s forwards;
}
@keyframes js-fill {
    100%{
        width: 60%;
    }
}

#react-bar{
    animation: react-fill 2s forwards;
}
@keyframes react-fill{
    100%{
        width: 22%;
    }
}
`;

export default StyledSkills;
