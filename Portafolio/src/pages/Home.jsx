import Tecnologias from "../components/Tecnologias";
import Typed from "typed.js";
import { useEffect,useRef } from "react";
import { Btnwhatsapp } from "../components/Btnwhatsapp";
import homeimg from "../assets/homeimg";




const Home = () => {

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Javascript", "Css", "Html", "React"], // Strings to display
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
<div>
<Btnwhatsapp/>
    <article className="hero-image">
      <div><h1>Bienvenido a Mi Portafolio</h1>
      <h2>Me encanta el desarrollo web y las tecnologias <span ref={el}></span></h2>
      </div>
      
    </article>

    <div className="container marketing">

     

    <div className="row featurette">
      <div className="col-md-7">
        <h2 className="featurette-heading">Hola Amigo. <span>Un gusto Conocerte.</span></h2>
        <p className="lead">Me mantengo en constante aprendizaje me apasiona el mundo de la web </p>
       
      </div>
      <div className="col-md-5">

        <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src={homeimg.img6} width="500" height="500" alt="Yo" focusable="false"/>
      
      </div>
    </div>

    <hr className="featurette-divider"/>

    <div className="row featurette">
      <div className="col-md-7 order-md-2 yo">
        <h2 className="featurette-heading">Yo soy <span >🙋‍♂️🙋‍♂️🙋‍♂️.</span></h2>
        <ul>
          <li>Jose Miguel González Guzmán</li>
          <li>Nací en Venezuela. 10, 28, 1995</li>
          <li>Vivo en Cali, Colombia</li>
          <a href="/assets/Curriculum-jose Miguel.docx">Hoja De vida</a>
        </ul>
        
      </div>
      <div className="col-md-5 order-md-1">
        <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src={homeimg.img2}  width="500" height="500" alt="Yo" focusable="false"/>
      
       
      </div>
    </div>
    <hr className="featurette-divider"/>
   <div className="row" >
    <div className="col-lg-4">
      <img className="jello-horizontal" src={homeimg.img3} width="140" height="140" x="50%" y="50%" alt="objetivos" focusable="false"/>
      <h2>Objetivo</h2>
      <p>Mi Objetivo es Incorporarme a una institución o empresa que me 
        dé la oportunidad de desarrollarme 
        profesionalmente mediante el aporte de mis 
        conocimientos y experiencias e incremente mis ingresos económicos con la finalidad de que sean traducidos en beneficio tanto para mí como para la organización.</p>
      
    </div>

    
    <div className="col-lg-4" >
      
      <img className="rotate-center" src={homeimg.img4} width="140" height="140" x="50%" y="50%" alt="objetivos" focusable="false"/>
      
      <h2>Habilidades</h2>
      <ul >
        <li>Capacidad de coordinar, organización y formación de equipo</li>
        <li>Facilidad de establecer relaciones interpersonales.</li>
        <li>Alto sentido de responsabilidad.</li>
        <li>Creatividad e iniciativa para el logro de los objetivos especificados</li>
      
      </ul>

    </div>
    <div className="col-lg-4 git">
      <img className="rotate-center" src={homeimg.img5} width="140" height="140" x="50%" y="50%" alt="objetivos" focusable="false"/>
      
      <h2>Repositorio</h2>
      <a href="https://github.com/JosemAVSG" rel="noopener" target="_blank">Mygithub</a>

    </div>
  </div>

  <hr className="featurette-divider"/>

    <div className="row featurette">
      <div className="col-md-7">
        <h2 className="featurette-heading">Algo sobre mi es que nunca paro de aprender. <span>Autodidacta 100%</span></h2>
        <p className="lead">En curso
          React js, Node js, Figma, Go y MongoDB
          </p>
      </div>
      <div className="col-md-5">
        <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src={homeimg.img1}  width="500" height="500" alt="Yo" focusable="false"/>
      
      </div>
    </div>

    
  </div>
  </div>
  );
};

export default Home;
