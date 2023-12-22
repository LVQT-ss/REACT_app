// rootReducer.js
const initState = {
  users: [
    { id: 1, name: 'eric' },
    { id: 2, name: 'hehe' },
    { id: 3, name: 'thinhle' }
  ],
  posts:[]
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case 'DELETE_USER':
      console.log('run into delete user', action)
      let users   =  state.users;
      users = users.filter(item => item.id !== action.payload.id)
      return {
          ...state,users
      };
      break;
    // case '':
    //   break;
    default:
      return state;
  }
  return state;
};

export default rootReducer;
