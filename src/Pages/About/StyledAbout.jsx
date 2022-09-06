import styled from "styled-components";

const StyledAbout = styled.div`
.container{
    display: grid;
    grid-gap: 5%;
    grid-template-columns: repeat(2, 2fr);
    margin-top: -10px;
}
#myself{
    display: flex;
    flex-direction: column;
    align-items: center;
}

#myself > img{
    height: 400px;
    width: 350px;
    border-radius: 10%;
    transition: .4s;    
}
#myself > img:hover{
    cursor: pointer;
    box-shadow: 0px 20px 15px black;
}

#myself figcaption{
    color: white;
    background: url('Gif/Aura.gif');
    margin-top: 22px;
    width: 50%;
    text-align: center;
    border-radius: 50px;
    font-size: 35px;
    padding: 10px;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

.intro{
    height: 450px;
    border: 15px inset rgb(105, 196, 115);
    box-shadow: 25px 30px 20px black;
    background-color: #312624;
    color: white;
    margin-right: 65px;
    padding: 5px 10px 5px 10px;
    text-align: justify;
    font-family: 'PT Sans Narrow', sans-serif;
    font-size: 20px;
}

#resume{
    margin-bottom: 15px;
    text-align: center;
}

.cv{
    cursor: pointer;
    text-decoration: none;
    color: black;
    border-radius: 15px;
    box-shadow: 0px 10px 10px black;
    padding: 15px;
    font-size: 15px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    transition: .4s;
}
.cv:hover{
    cursor: pointer;
    transform: scale(0.9);
    box-shadow: none;
}

@media (max-width: 700px){
    .container{
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
}

#myself > img{
    height: 380px;
    width: 330px;
    margin-top: -30px;   
}

#myself figcaption{
    margin-left: 30px;
    margin-top: 22px;
    width: 75%;
}

.intro{
    margin-right: 12px;
    margin-top: 25px;
    padding: 5px 15px 5px 15px;
    box-shadow: 15px 20px 40px black;
    color: red;
    background-color: aquamarine;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

}

  
`;

export default StyledAbout;
