
A React Hook which subscribes Observable streams.

## Usage

```javascript
import React from 'react';
import { useStream } from 'react-hooks-use-stream';

import { Subject } from 'rxjs';
import { scan } from 'rxjs/operators';

const increment$ = new Subject();
const count$ = increment$.pipe(
  scan(acc => acc + 1, 0),
)

const Counter = () => {
  const count = useStream(0, count$);
  return (
    <div className="Counter">
      <div>Counter: {count}</div>
      <button onClick={() => { increment$.next() }}>Increment</button>
    </div>
  );
}

```