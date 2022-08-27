const initialState = {
  uid: '',
  userName: '',
  isUserLogin: false,
  hobby: [],
  moreData: {
    city: '',
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'setId':
      return {
        ...state,
        uid: action.id,
      };

    case 'setUserName':
      return {
        ...state,
        userName: action.uname,
      };

    case 'setUserData':
      const {userName, uid} = action.data;
      return {
        ...state,
        uid: uid,
        userName: userName,
      };

    case 'setIsUserLogin':
      return {
        ...state,
        isUserLogin: action.isUserAuthenticate,
      };

    default:
      return state;
  }
};

export default userReducer;
// userReducer({type: 'setId', id: 1});

// userReducer({type: 'setUserName', uname: 'Haresh'});

// userReducer({type: 'setUserData', data: {uid: 1, userName: 'Haresh'}});

// userReducer({type: 'setIsUserLogin', isUserAuthenticate: true});
