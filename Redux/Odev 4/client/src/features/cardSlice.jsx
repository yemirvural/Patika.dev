import { createSlice, nanoid } from "@reduxjs/toolkit";

const shuffle = (array) => {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array
}

const initialState = {
    items: [],
    process: [],
    completed: [],
    score: 0
}

export const cardSlice = createSlice({
    name: "card",
    initialState,
    reducers:{
        setProcess: (state, actions) => {
            state.process = [...state.process, actions.payload];
        },
        newProcess: (state) => {
            state.process = [];
            state.score -= 10
        },
        addCompleted: (state, actions) => {
            state.completed = [...state.completed, actions.payload];
            state.process = [];
            state.score += 50
        },
        prepareCards: {
            reducer: (state, actions) => {
                state.items = [...state.items, actions.payload]
                shuffle(state.items)
            },
            prepare: (name) => {
                const id = nanoid()
                return { 
                    payload: {id, name}
                }
            }
        },
        resetGame: () => initialState
    },
    extraReducers:{

    }
})

export const { setProcess, newProcess, addCompleted, prepareCards, resetGame } = cardSlice.actions
export default cardSlice.reducer