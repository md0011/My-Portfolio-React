import styled from "styled-components";

const StyledContact = styled.div`
  .container {
    height: 15em;
    margin-top: 110px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    .contact {
      cursor: pointer;
      height: 45px;
      width: 25vw;
      font-size: 1.5em;
      color: white;
      border: none;
      border-radius: 50px;
      box-shadow: 10px 10px 20px black;
      transition: 0.4s;
      font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
        "Lucida Sans", Arial, sans-serif;
    }

    #email {
      background-color: orangered;
    }
    #linkedin {
      background-color: #0e6194;
    }
    #twitter {
      background-color: #1291e0;
    }
  }
  .contact:hover {
    transform: scale(0.9);
  }

  @media (max-width: 700px) {
    .container .contact {
      width: 50vw;
    }
    .container{
    margin-top: 90px;
    }
  }
`;

export default StyledContact;
