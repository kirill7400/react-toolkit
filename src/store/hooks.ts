import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "./store";

export const useAppSelector: TypedUseSelectorHook<any> = useSelector
export const useAppDispatch:  () => AppDispatch = useDispatch