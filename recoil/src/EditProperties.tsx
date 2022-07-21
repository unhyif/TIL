import {
  InputGroup,
  InputRightElement,
  NumberInput,
  NumberInputField,
  Text,
  VStack,
} from '@chakra-ui/react';
import { selectedElementAtom } from 'Canvas';
import { Element, elementAtomFamily } from 'components/Rectangle/Rectangle';
import {
  selector,
  selectorFamily,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from 'recoil';
import _ from 'lodash';
import produce from 'immer';

// const selectedElementSelector = selector<Element | undefined>({
//   key: 'selectedElementProperties',

//   get: ({ get }) => {
//     const selectedElementId = get(selectedElementAtom);
//     if (selectedElementId === null) return;
//     return get(elementAtomFamily(selectedElementId));
//   },

//   set: ({ get, set }, newElement) => {
//     const selectedElementId = get(selectedElementAtom);
//     if (selectedElementId === null || !newElement) return;
//     set(elementAtomFamily(selectedElementId), newElement);
//   },
// });

// 인수에 따라 조금 다르게 동작하는 Selector. 동일한 인수에 대한 Selector는 한 번만 run함
const editPropertySelectorFamily = selectorFamily<
  number,
  { id: number; path: string }
>({
  key: 'editProperty',

  get:
    ({ id, path }) =>
    ({ get }) => {
      const selectedElement = get(elementAtomFamily(id));
      return _.get(selectedElement, path);
    },

  set:
    ({ id, path }) =>
    ({ get, set }, newValue) => {
      Number.isNaN(newValue) && (newValue = 0);
      const selectedElement = get(elementAtomFamily(id));
      const newElement = produce(selectedElement, draft =>
        _.set(draft, path, newValue)
      );
      set(elementAtomFamily(id), newElement);
    },
});

export const EditProperties = () => {
  // const [selectedElementProperties, setSelectedElementProperties] =
  //   useRecoilState(selectedElementSelector);
  // if (!selectedElementProperties) return null;
  //
  // const setPosition = (position: 'top' | 'left', value: number) =>
  //   setSelectedElementProperties(properties => {
  //     if (!properties) return;
  //     Number.isNaN(value) && (value = 0);
  //
  //     return {
  //       style: {
  //         ...properties.style,
  //         position: { ...properties.style.position, [position]: value },
  //       },
  //     };
  //   });
  //
  // const setSize = (size: 'width' | 'height', value: number) =>
  //   setSelectedElementProperties(properties => {
  //     if (!properties) return;
  //     Number.isNaN(value) && (value = 0);
  //
  //     return {
  //       style: {
  //         ...properties.style,
  //         size: { ...properties.style.size, [size]: value },
  //       },
  //     };
  //   });

  const selectedElementId = useRecoilValue(selectedElementAtom);
  if (selectedElementId === null) return null;

  return (
    <Card>
      <Section heading="Position">
        <Property
          label="Top"
          target={{ id: selectedElementId, path: 'style.position.top' }}
        />
        <Property
          label="Left"
          target={{ id: selectedElementId, path: 'style.position.left' }}
        />
      </Section>

      <Section heading="Size">
        <Property
          label="Width"
          target={{ id: selectedElementId, path: 'style.size.width' }}
        />
        <Property
          label="Height"
          target={{ id: selectedElementId, path: 'style.size.height' }}
        />
      </Section>
    </Card>
  );
};

const Section: React.FC<{ heading: string }> = ({ heading, children }) => (
  <VStack spacing={2} align="flex-start">
    <Text fontWeight="500">{heading}</Text>
    {children}
  </VStack>
);

const Property = ({
  label,
  target,
}: {
  label: string;
  target: { id: number; path: string };
}) => {
  const [value, setValue] = useRecoilState(editPropertySelectorFamily(target));
  return (
    <div>
      <Text fontSize="14px" fontWeight="500" mb="2px">
        {label}
      </Text>
      <InputGroup size="sm" variant="filled">
        <NumberInput value={value} onChange={(_, value) => setValue(value)}>
          <NumberInputField borderRadius="md" />
          <InputRightElement
            pointerEvents="none"
            children="px"
            lineHeight="1"
            fontSize="12px"
          />
        </NumberInput>
      </InputGroup>
    </div>
  );
};

const Card: React.FC = ({ children }) => (
  <VStack
    position="absolute"
    top="20px"
    right="20px"
    backgroundColor="white"
    padding={2}
    boxShadow="md"
    borderRadius="md"
    spacing={3}
    align="flex-start"
    onClick={e => e.stopPropagation()}
  >
    {children}
  </VStack>
);
