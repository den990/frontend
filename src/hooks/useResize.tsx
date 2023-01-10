import {useEffect, useRef} from "react";

function useResize() {
    const refBox = useRef<HTMLDivElement>(null);
    const refLeft = useRef<HTMLDivElement>(null);
    const refTop = useRef<HTMLDivElement>(null);
    const refRight = useRef<HTMLDivElement>(null);
    const refBottom = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (refBox.current === null) throw new Error("Элемента с заданным ID не существует!");
        const resizeableElement: HTMLElement = refBox.current;

        const styles = window.getComputedStyle(resizeableElement);
        let width = parseInt(styles.width, 10);
        let height = parseInt(styles.height, 10);

        let xCord = 0;
        let yCord = 0;

        resizeableElement.style.top = "50px";
        resizeableElement.style.left = "50px";

        // Right resize
        const onMouseMoveRightResize = (event: MouseEvent) => {
            const dx = event.clientX - xCord;
            xCord = event.clientX;
            width = width + dx;
            resizeableElement.style.width = `${width}px`;
        };

        const onMouseUpRightResize = () => {
            document.removeEventListener("mousemove", onMouseMoveRightResize);
        };

        const onMouseDownRightResize = (event: MouseEvent) => {
            xCord = event.clientX;
            resizeableElement.style.left = styles.left;
            resizeableElement.style.right = '';
            document.addEventListener("mousemove", onMouseMoveRightResize);
            document.addEventListener("mouseup", onMouseUpRightResize);
        };

        // Top resize
        const onMouseMoveTopResize = (event: MouseEvent) => {
            const dy = event.clientY - yCord;
            height = height - dy;
            yCord = event.clientY;
            resizeableElement.style.height = `${height}px`;
        };

        const onMouseUpTopResize = () => {
            document.removeEventListener("mousemove", onMouseMoveTopResize);
        };

        const onMouseDownTopResize = (event: MouseEvent) => {
            yCord = event.clientY;
            const styles = window.getComputedStyle(resizeableElement);
            resizeableElement.style.bottom = styles.bottom;
            resizeableElement.style.top = '';
            document.addEventListener("mousemove", onMouseMoveTopResize);
            document.addEventListener("mouseup", onMouseUpTopResize);
        };

        // Bottom resize
        const onMouseMoveBottomResize = (event: MouseEvent) => {
            const dy = event.clientY - yCord;
            height = height + dy;
            yCord = event.clientY;
            resizeableElement.style.height = `${height}px`;
        };

        const onMouseUpBottomResize = () => {
            document.removeEventListener("mousemove", onMouseMoveBottomResize);
        };

        const onMouseDownBottomResize = (event: MouseEvent) => {
            yCord = event.clientY;
            const styles = window.getComputedStyle(resizeableElement);
            resizeableElement.style.top = styles.top;
            resizeableElement.style.bottom = '';
            document.addEventListener("mousemove", onMouseMoveBottomResize);
            document.addEventListener("mouseup", onMouseUpBottomResize);
        };

        // Left resize
        const onMouseMoveLeftResize = (event: MouseEvent) => {
            const dx = event.clientX - xCord;
            xCord = event.clientX;
            width = width - dx;
            resizeableElement.style.width = `${width}px`;
        };

        const onMouseUpLeftResize = () => {
            document.removeEventListener("mousemove", onMouseMoveLeftResize);
        };

        const onMouseDownLeftResize = (event: MouseEvent) => {
            xCord = event.clientX;
            resizeableElement.style.right = styles.right;
            resizeableElement.style.left = '';
            document.addEventListener("mousemove", onMouseMoveLeftResize);
            document.addEventListener("mouseup", onMouseUpLeftResize);
        };

        // Add mouse down event listener
        if (refRight.current === null) throw new Error("Элемента с заданным ID не существует!");
        if (refTop.current === null) throw new Error("Элемента с заданным ID не существует!");
        if (refBottom.current === null) throw new Error("Элемента с заданным ID не существует!");
        if (refLeft.current === null) throw new Error("Элемента с заданным ID не существует!");
        const resizerRight: HTMLElement = refRight.current;
        resizerRight.addEventListener("mousedown", onMouseDownRightResize);
        const resizerTop: HTMLElement = refTop.current;
        resizerTop.addEventListener("mousedown", onMouseDownTopResize);
        const resizerBottom: HTMLElement = refBottom.current;
        resizerBottom.addEventListener("mousedown", onMouseDownBottomResize);
        const resizerLeft: HTMLElement = refLeft.current;
        resizerLeft.addEventListener("mousedown", onMouseDownLeftResize);

        return () => {
            resizerRight.removeEventListener("mousedown", onMouseDownRightResize);
            resizerTop.removeEventListener("mousedown", onMouseDownTopResize);
            resizerBottom.removeEventListener("mousedown", onMouseDownBottomResize);
            resizerLeft.removeEventListener("mousedown", onMouseDownLeftResize);
        };
    });
    return [refBox, refLeft, refTop, refRight, refBottom];
}

export default useResize