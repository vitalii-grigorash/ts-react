import { FC, useState, ChangeEvent, MouseEvent } from "react";

interface EventsExampleProps {

}

export const EventsExample: FC<EventsExampleProps> = (props) => {

    const {

    } = props;

    const [value, setValue] = useState<string>('');

    function changeHandler(e: ChangeEvent<HTMLInputElement>) {
        setValue(e.target.value);
    }

    const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
        console.log(value);
    }

    return (
        <div>
            <input
                type="text"
                value={value}
                onChange={changeHandler}
            />
            <button
                onClick={clickHandler}
            >
                Click
            </button>
        </div>
    )
}