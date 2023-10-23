import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../assets/imagenes/Jg logo-01.png'
const Navigation = () => {

  return (
      <>
      <NavContainer>
     
      <img src={logo} style={{height:'100px', width: '150px'}}/>
      <div>
        <NavLink exact="true" to="/" className="navi" activeclassname="active">
          Home
        </NavLink>
        <NavLink exact="true" to="/acerca" className="navi" activeclassname="active">
          Proyectos
        </NavLink>
        <NavLink exact="true" to="/contacto" className="navi" activeclassname="active">
          Contacto
        </NavLink>
         </div>
        </NavContainer>
    </>
   
  )

}
const NavContainer = styled.nav`
 h2{
  color: #ffff;
  font-weight: 400;
 }
 
padding:2rem;
 display:flex;
 background-color: rgb(0,0,0);
 justify-content:space-between;
  align-items:center;
  
.navi{
  text-decoration: none;
  margin-left:10px;
  margin-right:10px;
  position: relative;
  color:#fff;
  padding: 0 10px;
 
}


.navi:after {
  content: "";
  position:absolute;
  background-color:#cb144b;
  height:3px;
  width:0;
  left:0;
  bottom:-10px;
  transition:all .5s ease-in-out;
  }
.navi:hover:after{
  width:100%;
  
}

.active{
  color:red;

}


`


export default Navigation;