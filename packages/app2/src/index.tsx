import { App } from '@apps/shared';
import { StrictMode } from 'react';
import { render } from 'react-dom';
import Main from 'components/Main';

const appWrapper = document.getElementById('app');

render(
  <StrictMode>
    <App>
      <Main />
    </App>
  </StrictMode>,
  appWrapper
);
