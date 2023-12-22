import React from "react";
import Color from "../HOC/Color";
import logo from '../../assets/images/410097539_731075398566246_6443666808807303612_n.jpg';
import { connect } from 'react-redux';

const Home = (props) => {
  console.log('check props ', props.dataRedux);

  return (
    <>
      <div>
        hoi dan it
      </div>
      <div>
        <img src={logo} style={{width:'200px', height:'200px', marginTop:'20px'}}/>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    dataRedux: state.users
  };
}

// Connect the component to the Redux store
export default connect(mapStateToProps)(Color(Home));
