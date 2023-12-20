import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Color from "../HOC/Color";
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
    <div>
      hoi dan it
    </div>
  );
};

export default Color(Home);
