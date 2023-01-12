import React from "react";
import styles from "./MiniImageComponent.module.css";

export function MiniImageComponent(Props: {
    position: { x: number, y: number },
    height: number,
    width: number,
    url: string
}) {
    const style = {
        top: (Props.position.y / 6),
        left: (Props.position.x / 5.76),
        width: (Props.width / 5.76),
        height: (Props.height / 6),
        "background-image": "url(" + Props.url + ")",
        "background-repeat": "no-repeat"
    }

    return (
        <div
            onKeyDown={(e) => {
                if (e.key === "Enter") {
                    e.currentTarget.blur();
                }
            }
            }
            className={styles.image}
            style={style}>
        </div>
    );
}