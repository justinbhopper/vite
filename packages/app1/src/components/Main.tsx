import { TestSharedComp } from '@apps/shared';
import { useState } from 'react';
import { config } from './config';
import { Bells } from "./images";
import "./theme.scss";

const Main = () => {
  const [clickCount, setClickCount] = useState(0);

  return (
    <div onClick={() => setClickCount(c => c + 1)}>
      <h3>App 1 (test)</h3>
      <TestSharedComp />
      <div className="test">Click count: {clickCount}</div>
      <img src={Bells} />
      <div>Dev test: {config.devTest}</div>
    </div>
  );
};

export default Main;
