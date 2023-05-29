import {Dispatch, SetStateAction} from "react";

export type WidgetBoxProps = {
    active:boolean,
    setActive: Dispatch<SetStateAction<boolean>>
}