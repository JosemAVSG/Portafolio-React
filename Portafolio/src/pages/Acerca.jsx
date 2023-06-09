import Cards from "../components/Cards";
import { Btnwhatsapp } from "../components/Btnwhatsapp";
import Typed from "typed.js";
import { useEffect,useRef } from "react";
import styled from 'styled-components'
import homeimg from "../assets/homeimg";

const Acerca = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["My Skills"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      
      
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);



  return (
    <Acercaux>
    <div className="acerca ">

      <Btnwhatsapp/>
      <div className="wrapper">
      <Cards img={homeimg.weather}
        title="Weather-APP"
        description="App que permite ve el clima de tu ciudad!" 
        url="https://weather-p40ousxb7-josemavsg.vercel.app"/>
      <Cards img={homeimg.bikes}
        title="Search bikes"
        description="App que permite buscar bicicletas robadas!"/>
      <Cards img={homeimg.rick}
        title="Rick and Morty Chars "
        description="App que permite ver los personajes de rick and morty"
        url="https://rickandmorty-hyjn00rgb-josemavsg.vercel.app/"
        
          />
          </div>

      <br></br>
      <h2>  <span ref={el}></span></h2>

      <div className="container-skill">
          <div className="skill-box">
            <div className="skill-title">
              <div className="img">
                  <img className="skill-icon"src={homeimg.js} alt="Javascript" />
              </div>
                    <h3>Javascript</h3>
            </div>
                 
          </div>
          <div className="skill-box">
            <div className="skill-title">
              <div className="img">
                  <img className="skill-icon" src={homeimg.html} alt="Html" />
              </div>
                    <h3>HTML5</h3>
            </div>
                  
          </div>
          <div className="skill-box">
            <div className="skill-title">
              <div className="img">
                  <img className="skill-icon css" src={homeimg.css}  alt="CSS3" />
              </div>
                    <h3>CSS3</h3>
            </div>
                  
          </div>
          <div className="skill-box">
            <div className="skill-title">
              <div className="img">
                  <img className="skill-icon" src={homeimg.react} alt="React" />
              </div>
                    <h3>React</h3>
            </div>
                 
          </div>
          <div className="skill-box">
            <div className="skill-title">
              <div className="img">
                  <img className="skill-icon" src={homeimg.mongo} alt="MongoDb" />
              </div>
                    <h3>MongoDb</h3>
            </div>
                  
          </div>
          <div className="skill-box">
            <div className="skill-title">
              <div className="img">
                  <img className="skill-icon" src={homeimg.mysql} alt="Mysql" />
              </div>
                    <h3>Mysql</h3>
            </div>
                  
          </div>
       
      </div>


    </div>
    </Acercaux>
  );
};

const Acercaux = styled.div`

  .container-skill{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    justify-content:center;
    align-items:center;
    text-align:center;
    grid-gap: 1rem;
    padding:1rem 80px;
    font-size:1.2rem;
  }
  .skill-box{
    padding: 1rem;
    color:#1c1b1b;
    cursor:pointer;
  }
 .skill-box:hover >.skill-title:after, .skill-box:hover >.skill-title:before{
    width:60px;
    
 }
 .skill-box:hover .img{
        transform:translateY(-10px)
 }
  .skill-title{
    display:flex;
    flex-direction:column;
    align-items:center;
    padding: 0.5rem;
    margin-bottom:0.5;
    position:relative;
  }


.skill-title:after{
  content:'';
  position:absolute;
  bottom:0px;
  right:50%;
  
  height:4px;
  border-radius:2px 0 0 2px;
  background-color:#cb144b;
  transition:all .5s ease-in-out;
}
.skill-title:before{
  content:"";
  
  position:absolute;
  bottom:0px;
  left:50%;
  
  height:4px;
  border-radius: 0 2px 2px 0;
  background-color:#cb144b;
  transition:all .5s ease-in-out;
}



  .img{
    width:90px;
    height:90px;
    position:relative;
    border-radius:45px;
    border:2px solid red;
    background-color: #fffafa;
    display:flex;
    justify-content:center;
    align-items:center;
    transition:all .5s ease-in-out;

  }
  .img:after{
    content:'';
    position:absolute;
    left:0;
    width:50%;
    height:90px;
    background-color: rgba(100,100,100,0.45);
    border-radius:45px 0 0 45px;
  }

  .img .css{
    width:45px;
  }


  @media screen and (max-width:990px){
    .container-skill{
        grid-template-columns: repeat(2,1fr);
        padding:2rem 50px;
    }
  }
  @media screen and (max-width:650px){
    .container-skill{
        grid-template-columns: 1fr;
       
    }
  }

  .skill-title h3{
    color: #161616;
    margin: 0.5rem;
  }
  .skill-icon{
      width:70px;
     z-index:2;
  }



`
export default Acerca;
