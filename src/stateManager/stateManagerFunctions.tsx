import {createSlide} from "../utils/functions";
import {dispatch} from "./stateManager";
/**
 * @param {{}} editor
 * @param {Presentation} presentation,
 * @return {{}}
 */
export const addSlideHandler = () => {
    dispatch(createSlide, {});
}