import { atomFamily, useRecoilState } from 'recoil';
import { selectedElementAtom } from '../../Canvas';
import { Drag } from '../Drag';
import { RectangleContainer } from './RectangleContainer';
import { RectangleInner } from './RectangleInner';

export type ElementStyle = {
  position: { top: number; left: number };
  size: { width: number; height: number };
};
export type Element = { style: ElementStyle };

const elementAtomFamily = atomFamily<Element, number>({
  key: 'element',
  default: {
    style: {
      position: { top: 0, left: 0 },
      size: { width: 50, height: 50 },
    },
  },
});

export const Rectangle = ({ id }: { id: number }) => {
  // Create a new atom for each Rectangle
  const [element, setElement] = useRecoilState(elementAtomFamily(id));
  const [selectedElement, setSelectedElement] =
    useRecoilState(selectedElementAtom);

  return (
    <Drag
      position={element.style.position}
      onDrag={position => {
        setElement({
          style: {
            ...element.style,
            position,
          },
        });
      }}
    >
      <div>
        <RectangleContainer
          position={element.style.position}
          size={element.style.size}
          onSelect={() => {
            setSelectedElement(id);
          }}
        >
          <RectangleInner selected={id === selectedElement} />
        </RectangleContainer>
      </div>
    </Drag>
  );
};
