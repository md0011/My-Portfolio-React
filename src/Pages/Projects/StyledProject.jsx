import styled from "styled-components";

const StyledProject = styled.div`
  margin-top: -33px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  text-align: center;

  .card {
    height: 32em;
    width: 22em;
    padding-bottom: 50px;
    backdrop-filter: blur(10px);
    box-shadow: 0 0 20px black;
    transition: .2s;

    button{
      color: green;
      font-size: 20px;
      font-weight: bold;
      height: 40px;
      width: 100%;
      padding: 3px;
      cursor: pointer;
      margin-top: 10px;
      border: none;
      background-color: #d5edfc;
    }
    button:hover{
      background-color: lightskyblue;
    }
  }

  img {
    height: 20em;
    width: 20em;
  }

  h2{
    color: orangered;
    font-weight: bolder;
    font-size: 30px;
    font-family: 'PT Sans Narrow', sans-serif;
    letter-spacing: 1px;
    border-top: 5px solid gray;
    padding-top: 10px;
  }

  .details {
    padding: 0px 10px;
    color: orange;
    font-size: 1.2em;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  }
`;

export default StyledProject;
