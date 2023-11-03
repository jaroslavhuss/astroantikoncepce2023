import React from 'react';

interface Props {
 seznam: string[];
}

const List: React.FC<Props> = ({ seznam}) => {
  return (
    <div>
        <ul>
      {
        seznam.length > 0 ? seznam.map((item, index) => (
            <li key={index}>{item}</li>
        )) : <li>Seznam je prázdný</li>
      }
      </ul>
    </div>
  );
};

export default List;