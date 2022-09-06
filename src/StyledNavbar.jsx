import styled from "styled-components";

const StyledNavbar = styled.div`
header::before {
    background: url('/Images/background-img.jpg') no-repeat center center;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}

.navbar{
    display: flex;
    justify-content: flex-end;
    flex-grow: 2;
    margin: 45px 15px 5px 10px;
  }
  
  .nav-items a{
    margin: 5px 20px;
    padding: 5px 18px;
    text-decoration: none;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 25px;
  }

  .nav-items a:hover{
    color: red;
    background-color: burlywood;
    box-shadow: 0px 15px 10px black;
    border-radius: 8px;
  }

  .nav-items{
    height: 33px;
    transition: .1s;
  }
  .nav-items:hover{
    transform: scale(1.2);
  }
  
  #my-name a{
    position: relative;
    top: -26px;
    left: 2px;
    font-family: 'Lobster', cursive;
    font-size: 55px;
    font-weight: bold;
    text-decoration: none;
    color: red;
    padding: 10px;
  }

  @media (max-width: 700px){
    header::before {
      background: none;  
    }

    .nav-items{
      display: none;
    }

    .navbar{
    margin: 10px 15px 20px 0px;
    width: 100%;

  }

  #my-name a{
    position: relative;
    top: 10px;
    left: 5%;
    font-size: 35px;
    font-weight: bold;
    padding: 10px;
  }
  }
  `;

export default StyledNavbar;