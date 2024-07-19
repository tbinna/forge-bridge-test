import {invoke} from "@forge/bridge";
import {useEffect, useState} from "react";

export function App() {
  const [data, setData] = useState<unknown|null>(null);

  useEffect(() => {
    invoke('getText', { example: 'my-invoke-variable' }).then(setData);
  }, []);

  return (
    <div>
      {data ? JSON.stringify(data) : 'Loading...'}
    </div>
  );
}

export default App;
