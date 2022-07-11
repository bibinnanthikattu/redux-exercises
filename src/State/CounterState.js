const defaultValue = 0;

const INCREMENT = "COUNTER@INCREMENT";
const DECREMENT = 'COUNTER@DECREMENT';
const RESET = 'COUNTER@RESET';

export function incrementCount(by = 1) {
    return {
        type: INCREMENT,
        payload:by
    }
}
export function decrementCount(by = 1) {
    return {
        type: DECREMENT,
        payload:by
    }
}
export function resetCount() {
    return {
        type:RESET
    }
}