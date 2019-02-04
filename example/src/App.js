import React from 'react';
import './App.css';
import { useStream } from 'react-hooks-use-stream';

import { Subject } from 'rxjs';
import { scan, tap } from 'rxjs/operators';

const increment$ = new Subject();
const count$ = increment$.pipe(
  scan((acc, curr) => {
    return acc + 1;
  }, 0),
  tap(v => console.log(v))
)

const App = () => {
  return (
    <Counter></Counter>
  );
}

const Counter = () => {
  const count = useStream(0, count$);
  return (
    <div className="Counter">
      <div>Counter: {count}</div>
      <button onClick={() => { increment$.next() }}>Increment</button>
    </div>
  );
}

export default App;
