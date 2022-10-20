import './App.css';
import profile from "../src/Images/profile.jpg";
import left from "../src/Images/left.png";
import { AiOutlineEye } from "react-icons/ai";

function App() 
{
  return (
    <div className="main">
     <div className="sub-main">
       <div className="card">
            <img src={left} alt="Larrow" className='larrow' /> 
            <label className='larrow'> Back </label>
         
            <div className="container-image">
              <img src={profile} alt="profile" className="profile"/>
            </div>

          <div>
            <sub>Personal Account</sub>
            <h2> Andrew@polka.io</h2>
           <div className="pasw-input">
              <sub>Password</sub>
              <input type="password" placeholder="password" className="pasw" />
             
           </div>
           <p className="link"> Forgot password? <span> Reset </span> </p>
          
          <div className="login-button">
           <div>
            <input type="checkbox" className='check' checked/><label className='checkLabel'> Stay signed in </label>
           </div>

           <div style={{ width: "65%"}}>
            <button className='btn'>Sign in </button>
          </div>
          </div>
          <hr id="hr"/> 
           
           <div className='privacy'>
            <pre>This site is protected by reCAPTCHA and Google <br/>
               <a href='' >Privacy Policy</a> and <a href=''>Terms of Service</a> apply.</pre>
           </div>
         </div>
       </div> 
     </div>
    </div>
  );
}

export default App;
