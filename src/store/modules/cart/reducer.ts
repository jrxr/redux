import { ICartState } from "./types";
import { Reducer } from "redux";

const INITIAL_STATE: ICartState = {
  items: [],
}

const cart:Reducer<ICartState> = (state, aciton) => {
  return INITIAL_STATE
}

export default cart;