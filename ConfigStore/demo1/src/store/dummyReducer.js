const InitialState = { test: 'It works'};

export default (state=InitialState,action) => {
    switch(action.type) { 
        default:
            return state;
    }
};

