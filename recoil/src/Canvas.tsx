import { atom, useRecoilValue, useSetRecoilState } from 'recoil';
import { Rectangle } from './components/Rectangle/Rectangle';
import { PageContainer } from './PageContainer';
import { Toolbar } from './Toolbar';

export const elementsAtom = atom<number[]>({ key: 'elements', default: [] });

export const selectedElementAtom = atom<number | null>({
  key: 'selectedElement',
  default: null,
});

function Canvas() {
  const elements = useRecoilValue(elementsAtom);
  const setSelectedElement = useSetRecoilState(selectedElementAtom);

  return (
    <PageContainer
      onClick={() => {
        setSelectedElement(null);
      }}
    >
      <Toolbar />
      {elements.map(id => (
        <Rectangle key={id} id={id} />
      ))}
    </PageContainer>
  );
}

export default Canvas;
