import { FC, ReactNode, useState } from "react";

export enum CardVariant {
    outlined = 'outlined',
    primary = 'primary',
}

interface CardProps {
    width: string;
    height: string;
    children: ReactNode;
    variant: CardVariant;
    onClick: (num: number) => void;
}

export const Card: FC<CardProps> = (props) => {

    const {
        width,
        height,
        variant,
        children,
        onClick,
    } = props;

    const [state, setState] = useState<number>(0);

    return (

        <div style={{
            width,
            height,
            border: variant === CardVariant.outlined ? '1px solid gray' : 'none',
            background: variant === CardVariant.primary ? 'lightgray' : ''
        }}
            onClick={() => onClick(state)}
        >
            {children}
        </div>
        
    )

}
