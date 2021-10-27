const SET_MUSIC = 'SET_MUSIC';


let initialState = {
    music: []
};

const musicReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MUSIC: {
            return {
                ...state,
                music: [...state.music, ...action.music]
            }
        }
        default:
            return state;
    }
};

export const setMusicAC = (music) => ({type: SET_MUSIC, music});


export default musicReducer;