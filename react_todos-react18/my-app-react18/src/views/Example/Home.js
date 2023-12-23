import React from "react";
import Color from "../HOC/Color";
import logo from '../../assets/images/410097539_731075398566246_6443666808807303612_n.jpg';
import { connect } from 'react-redux';




const Home = (props) => {
  console.log('check props ', props.dataRedux);
  let listUsers = props.dataRedux;

  const handleDeleteUser = (user) => {
    console.log('check user delete', user);
    props.deleteUserRedux(user);
  }
  const handleCreateUser= ()=>{
    props.createUserRedux();
  }

  return (
    <>
      <div>
        hoi dan it
      </div>
      <div>
        <img src={logo} style={{width:'200px', height:'200px', marginTop:'20px'}}/>
      </div>
      <div>
        {listUsers && listUsers.length> 0 && 
        listUsers.map((item,index) => { 
          return(
            <div key={item.id}>
              {index + 1 } - { item.name} 
              &nbsp;<span onClick={()=> handleDeleteUser(item)}>x</span>
            
            </div>
          )
        })
        }
        <button onClick={()=> handleCreateUser()}>Add new </button>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    dataRedux: state.users
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUserRedux:  (userDelete) => dispatch({type: 'DELETE_USER',payload :userDelete}),
    createUserRedux: () => dispatch({type:'CREATE_USER'})
  }
}

// Connect the component to the Redux store
export default connect(mapStateToProps,mapDispatchToProps)(Color(Home));
