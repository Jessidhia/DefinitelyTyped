import * as React from "react";
import { CSSModule } from "../index";

export type CardTitleProps<T = {}> = React.HTMLAttributes<HTMLElement> & {
    tag?: React.ReactType;
    className?: string;
    cssModule?: CSSModule;
} & T;

declare class CardTitle<T = { [key: string]: any }> extends React.Component<
    CardTitleProps<T>
> {}
export default CardTitle;
