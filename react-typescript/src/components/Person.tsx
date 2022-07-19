import { ChangeEvent, FC, useContext, useState } from 'react';
import { AppContext } from 'contexts/AppContext';

export enum GenderEnum {
  female = 'girl',
  male = 'boy',
}

type GradeType = 'first' | 'second' | 'third' | 'fourth';

interface PersonProps {
  name: string;
  age: number;
  gender: GenderEnum;
  email?: string;
  grade: GradeType;
  //   sayHi: (name: string) => string;
}

// const Person = ({ name, age, email }: Props) => {
//   return (
//     <div>
//       {name} {age} {email}
//     </div>
//   );
// };

const Person: FC<PersonProps> = ({ name, age, gender, email, grade }) => {
  const [country, setCountry] = useState<string | null>(null);
  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setCountry(e.target.value);

  const isTall = useContext(AppContext)?.isTall;

  return (
    <div>
      <input onChange={onChange} />
      <p>
        {isTall && 'Tall'} {gender} on {grade} grade from {country}
      </p>
    </div>
  );
};

export default Person;
