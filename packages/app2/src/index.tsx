import { createRoot } from "react-dom/client";
import { App } from '@apps/shared';
import Main from './components/Main';

const root = createRoot(document.getElementById("app")!);
root.render(
  <App>
    <Main />
  </App>
);
