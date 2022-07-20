import { atom, useRecoilState, useRecoilValue } from 'recoil';

const darkAtom = atom<boolean>({
  key: 'dark',
  default: false,
});

export const DarkSwitch = () => {
  const [dark, setDark] = useRecoilState(darkAtom);
  return (
    <input
      type="checkbox"
      checked={dark}
      onChange={() => setDark(dark => !dark)}
    />
  );
};

const Button = () => {
  const dark = useRecoilValue(darkAtom);
  return (
    <button style={{ background: dark ? 'gray' : 'white' }}>UI Button</button>
  );
};

export const Atom = () => (
  <>
    <div>
      <DarkSwitch />
    </div>
    <div>
      <Button />
    </div>
  </>
);
