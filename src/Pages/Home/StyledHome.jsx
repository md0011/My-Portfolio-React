import styled from "styled-components";

const StyledHome = styled.div`
  .my-img {
    height: 322px;
    width: 560px;
    margin-top: 60px;
    position: relative;
    float: right;
}

.my-img img {
    height: 15em;
    width: 15em;
    border-radius: 50%;
    transition: .4s;
}

@media (min-width: 1000px){
    .my-img img:hover {
    cursor: pointer;
    transform: scale(1.2);
    box-shadow: 0px 20px 15px black;
}
}


.my-img figcaption {
    width: 11em;
    padding: 5px;
    margin-top: 10px;
    position: relative;
    right: 123px;
    color: rgb(225, 192, 148);
    font-size: 50px;
    font-family: 'Bungee Shade', cursive;
}

@media (max-width: 800px){
  .my-img {
    width: 250px;
    position: relative;
    left: -16%;
    top: 70px;
}
.my-img figcaption {
    width: 250px;
    text-align: center;
    font-size: 45px;
    font-weight: bold;
    position: relative;
    right: 10px;
    color: transparent;
    font-family: 'Mouse Memoirs', sans-serif;
    letter-spacing: 3px;
    transition: .2s;
    animation: heading 2s linear infinite;
}
@keyframes heading {
    0% {
        background: linear-gradient(
            #008000, #00FF00);
        -webkit-background-clip: text;
    }

    100% {
        background: linear-gradient(
            #3CE7D7, #000FFF);
        -webkit-background-clip: text;
    }
}

}

`;

export default StyledHome;
