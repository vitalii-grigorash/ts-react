import { ReactNode } from "react";

interface ListProps<T> {
    items: T[];
    renderItem: (item: T) => ReactNode;
}

export function List<T>(props: ListProps<T>) {

    const {
        items,
        renderItem
    } = props;

    return (
        <div>
            {items.map(renderItem)}
        </div>
    )

}
