
import Facebook from '../assets/facebook';
import Instagram from '../assets/instagram';
import Twitter from '../assets/twitter';
const Footer=()=>{

    return (

      
       
        <div className="container-fluid foot justify-content-between" >
      
        <footer className="row row-cols-2 row-cols-sm-3 row-cols-md-3 row-col-3 py-3 justify-content-between" >
    
  
          <div className="col-sm-12  col-md-5  justify-content-between align-items-center">
    
            <a href="/" className="d-flex text-decoration-none logof ">
      
               <img  src="src/assets/imagenes/Jg logo-01.png" style={{marginTop: '20px', height:'50px', width: '50px'}}/>
               <ul className="list-unstyled d-flex  py-4 px-2 nav flex-column">
                <li><span className="text-light nav-item">&copy; JG TECH </span></li>
              </ul></a>

               </div>
          
             
            <div className=" col-sm-12 col-md-2 social">
              
              <ul className="list-unstyled  redes">
                <li className="ms-3 py-3 t"><a className="text-light" href="https://twitter.com/Jmgg95n"><Twitter></Twitter></a></li>
                <li className="ms-3 py-3 i"><a className="text-light" href="https://www.instagram.com/josemguz"><Instagram ></Instagram></a></li>
                <li className="ms-3 py-3 f"><a className="text-light" href="https://www.facebook.com/JoseMGuz"><Facebook ></Facebook></a></li>
              </ul>
            </div>
          
  
            <div className=" col-xs-12 col-sm-12  col-md-5 afooter" >
             
              <a className="d-flex    justify-content-sm-start justify-content-md-center text-light text-decoration-none"><svg className="bi" width="24" height="24"></svg>+57 304 2885833</a>
              <a className="d-flex    justify-content-sm-start justify-content-md-center  text-light text-decoration-none" href="mailto:jmgg.95n@gmail.com"><svg className="bi" width="24" height="24"></svg>jmgg.95n@gmail.com</a>
            
         
            </div>
  
       
          </footer>
        </div>
        
    )


}



export default Footer;