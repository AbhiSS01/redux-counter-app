import { DECREMENT, INCREMENT, RESET } from "./ActionType"


export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const reset = () => ({ type: RESET });
