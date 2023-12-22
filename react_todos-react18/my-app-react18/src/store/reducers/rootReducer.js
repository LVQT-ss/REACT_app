// rootReducer.js
const initState = {
    users: [
      { id: 1, name: 'eric' },
      { id: 2, name: 'hehe' },
      {id:3 , name : 'thinhle'}
    ]
  };
  
  const rootReducer = (state = initState, action) => {
    return state;
  };
  
  export default rootReducer;
  