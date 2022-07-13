import { useState } from 'react';
import styled from "styled-components";
import { Frequency, RRule } from "rrule";
import { TestSharedComp } from '@apps/shared';
import { config } from './config';
import { Bells } from "./images";
import { ThemeMounter } from './themeMounter';

const StyledDiv = styled.div`
  color: orange;
`;

const Main = () => {
  const [clickCount, setClickCount] = useState(0);
  const [themeEnabled, setThemeEnabled] = useState(true);

  const rrule = new RRule({
    freq: Frequency.WEEKLY,
    count: 20,
    interval: 3,
  });

  return (
    <div onClick={() => setClickCount(c => c + 1)}>
      <ThemeMounter enabled={themeEnabled} />
      <h3>App 1 (test) {rrule.toText()}</h3>
      <TestSharedComp />
      <div className="test">Click count: {clickCount}</div>
      <img src={Bells} />
      <StyledDiv>Dev test: {config.devTest}</StyledDiv>
      <button onClick={handleToggleTheme}>Toggle Theme</button>
    </div>
  );

  function handleToggleTheme() {
    setThemeEnabled(t => !t);
  }
};

export default Main;
