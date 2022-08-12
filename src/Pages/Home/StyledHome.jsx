import styled from "styled-components";

const StyledHome = styled.div`
  .my-img {
    height: 322px;
    width: 560px;
    margin-top: 75px;
    position: relative;
    float: right;
}

.my-img img {
    height: 15em;
    width: 15em;
    border-radius: 50%;
    transition: .4s;
}

.my-img img:hover {
    cursor: pointer;
    transform: scale(1.2);
    box-shadow: 0px 20px 15px black;
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
`;

export default StyledHome;
