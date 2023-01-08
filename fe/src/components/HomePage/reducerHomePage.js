const initialState = {
    isLoading: false,
};
const reducerHomePage = (state = initialState, action) => {
    switch (action.type) {
        // case GET_BANK_LIST:
        //   return {
        //     ...state,
        //     isLoading: true,
        //     navigateToHome: false,

        //   };
        default:
            return state;
    }
};

export default reducerHomePage;
