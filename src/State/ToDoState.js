const defaultValue = [];

const ADD = 'TODO@ADD';
const REMOVE = 'TODO@REMOVE';
const EDIT = 'TODO@EDIT';
 
export function addItems(items) {
    return {
        type: ADD,
        payload:items
    }
        
}
export function removeItems(id) {
    return {
        type: REMOVE,
        payload:id
    }
}
export function editItems(id, data) {
    // console.log(id);
    return {
        type: EDIT,
        payload:{id,data}
    }
}

export function toDoReducer(state = defaultValue, action) {
    switch (action.type) {
        case ADD:{
            return [...state,action.payload]
        }
        case REMOVE: {
            return state.filter(items=>items.id !== action.payload)
        }
        case EDIT: {
            return state.map(items => {
                if (items.id === action.payload.id) {
                    return [...items,...action.payload.data]
                }
                return items
            })
        }

        default: {
            return state
        }
    }
}