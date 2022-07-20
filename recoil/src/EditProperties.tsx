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
import { selector, useRecoilState } from 'recoil';

const selectedElementSelector = selector<Element | undefined>({
  key: 'selectedElementProperties',

  get: ({ get }) => {
    const selectedElementId = get(selectedElementAtom);
    if (selectedElementId === null) return;
    return get(elementAtomFamily(selectedElementId));
  },

  set: ({ get, set }, newElement) => {
    const selectedElementId = get(selectedElementAtom);
    if (selectedElementId === null || !newElement) return;
    set(elementAtomFamily(selectedElementId), newElement);
  },
});

export const EditProperties = () => {
  const [selectedElementProperties, setSelectedElementProperties] =
    useRecoilState(selectedElementSelector);
  if (!selectedElementProperties) return null;

  const setPosition = (position: 'top' | 'left', value: number) =>
    setSelectedElementProperties(properties => {
      if (!properties) return;
      Number.isNaN(value) && (value = 0);

      return {
        style: {
          ...properties.style,
          position: { ...properties.style.position, [position]: value },
        },
      };
    });

  const setSize = (size: 'width' | 'height', value: number) =>
    setSelectedElementProperties(properties => {
      if (!properties) return;
      Number.isNaN(value) && (value = 0);

      return {
        style: {
          ...properties.style,
          size: { ...properties.style.size, [size]: value },
        },
      };
    });

  return (
    <Card>
      <Section heading="Position">
        <Property
          label="Top"
          value={selectedElementProperties.style.position.top}
          onChange={value => setPosition('top', value)}
        />
        <Property
          label="Left"
          value={selectedElementProperties.style.position.left}
          onChange={value => setPosition('left', value)}
        />
      </Section>

      <Section heading="Size">
        <Property
          label="Width"
          value={selectedElementProperties.style.size.width}
          onChange={value => setSize('width', value)}
        />
        <Property
          label="Height"
          value={selectedElementProperties.style.size.height}
          onChange={value => setSize('height', value)}
        />
      </Section>
    </Card>
  );
};

const Section: React.FC<{ heading: string }> = ({ heading, children }) => {
  return (
    <VStack spacing={2} align="flex-start">
      <Text fontWeight="500">{heading}</Text>
      {children}
    </VStack>
  );
};

const Property = ({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
}) => {
  return (
    <div>
      <Text fontSize="14px" fontWeight="500" mb="2px">
        {label}
      </Text>
      <InputGroup size="sm" variant="filled">
        <NumberInput value={value} onChange={(_, value) => onChange(value)}>
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
