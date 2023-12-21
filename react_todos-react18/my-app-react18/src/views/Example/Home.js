import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Color from "../HOC/Color";
import logo from '../../assets/images/410097539_731075398566246_6443666808807303612_n.jpg';
const Home = () => {
  //const navigate = useNavigate();

//   useEffect(() => {
//     const timeoutId = setTimeout(() => {
//       console.log('Check timeout');
//       navigate('/todo');
//     }, 3000);

//     // Clear the timeout on component unmount (cleanup)
//     return () => clearTimeout(timeoutId);
//   }, [navigate]);

  return (
    <>
    
    <div>
      hoi dan it
    </div>
    <div>
      <img src={logo} style={{width:'200px',height:'200px',marginTop:'20px'}}/>
    </div>
    
    </>
  );
};

export default Color(Home);
