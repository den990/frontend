import {useEffect, useRef} from "react";
import {editBlockPositionHandler} from "../stateManager/stateManagerFunctions";

export function useDragAndDrop(slideIndex: number, blockIndex: number, id: string, coordX: number, coordY: number) {
  const isClicked = useRef<boolean>(false);
  
  const coords = useRef<{
    startX: number,
    startY: number,
    lastX: number,
    lastY: number
  }>({
    startX: coordX,
    startY: coordY,
    lastX: coordX,
    lastY: coordY
  })

  useEffect(() => {

    const target = document.getElementById(id);
    if (!target) throw new Error("Элемента с заданным ID не существует!");

    const container = target.parentElement;
    if (!container) throw new Error("У элемента отсутствует родительский элемент!");

    const onMouseDown = (e: MouseEvent) => {
      isClicked.current = true;
      coords.current.startX = e.clientX;
      coords.current.startY = e.clientY;
    }

    const onMouseUp = (e: MouseEvent) => {
      isClicked.current = false;
      coords.current.lastX = target.offsetLeft;
      coords.current.lastY = target.offsetTop;
      editBlockPositionHandler(slideIndex, blockIndex, coords.current.lastX, coords.current.lastY);
    }

    const onMouseMove = (e: MouseEvent) => {
      if (!isClicked.current) return;

      const nextX = e.clientX - coords.current.startX + coords.current.lastX;
      const nextY = e.clientY - coords.current.startY + coords.current.lastY;

      target.style.top = `${nextY}px`;
      target.style.left = `${nextX}px`;
    }

    target.addEventListener('mousedown', onMouseDown);
    target.addEventListener('mouseup', onMouseUp);
    container.addEventListener('mousemove', onMouseMove);
    container.addEventListener('mouseleave', onMouseUp);

    return () => {
      target.removeEventListener('mousedown', onMouseDown);
      target.removeEventListener('mouseup', onMouseUp);
      container.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('mouseleave', onMouseUp);
    };
  }, [id, blockIndex, slideIndex])
}
export default useDragAndDrop;