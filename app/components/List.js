import { v4 as uuidv4 } from 'uuid';
import { HEADER_DETAILS } from '@/config/static-data';
import { useState } from 'react';

export function List() {
  const [count, setCount] = useState(0);

  const listItems = HEADER_DETAILS.navMenu.map((item) => {
    return (
      <li key={uuidv4()}>
        <a href={item.navUrl}>{item.navText}</a>
      </li>
    );
  });

  return (
    <ul className="flex gap-4">
      {listItems}
      {/* <button onClick={() => setCount(count + 1)}>Count{count}</button> */}
    </ul>
  );
}
