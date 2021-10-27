import React from "react";

const LEFT_DOWN = 'LEFT_DOWN';
const RIGHT_DOWN = 'RIGHT_DOWN';
const UP_DOWN = 'UP_DOWN';
const DOWN_DOWN = 'DOWN_DOWN';


let initialState = {
    right: 0,
    down: 0
};

const experimentalReducer = (state = initialState, action) => {
    switch (action.type) {
        case LEFT_DOWN:{
            return {
                ...state,
                down: action.down
            }
        }case RIGHT_DOWN:{
            return {
                ...state,
                right: action.right
            }
        }case UP_DOWN:{
            return {
                ...state,
                right: action.down
            }
        }case DOWN_DOWN:{
            return {
                ...state,
                right: action.right
            }
        }

        default:
            return state;

    }
};

export const leftAC = (right) =>
    ({type: LEFT_DOWN, right})
export const rightAC = (right) =>
    ({type: RIGHT_DOWN, right});
export const upAC = (right) =>
    ({type: UP_DOWN, right});
export const downAC = (right) =>
    ({type: DOWN_DOWN, right});


export default experimentalReducer;