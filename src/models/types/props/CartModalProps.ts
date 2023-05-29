import {Dispatch, RefObject, SetStateAction} from "react";

export type CartModalProps = {
    active:boolean,
    setActive: Dispatch<SetStateAction<boolean>>,
    cartRef: RefObject<HTMLDivElement>
}