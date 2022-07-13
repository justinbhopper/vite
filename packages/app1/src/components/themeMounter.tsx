import { useLayoutEffect, useMemo } from "react";
import theme from "./theme.scss?inline";

export interface ThemeMounterProps {
  enabled: boolean;
}

export function ThemeMounter(props: ThemeMounterProps) {
  const { enabled } = props;

  const styleEl = useMemo(createStyleElement, []);

  useLayoutEffect(() => {
    if (enabled) {
      const head = document.head as any as HTMLElement;
      head.insertBefore(styleEl, null);
    }
    return () => {
      styleEl.remove();
    };
  }, [enabled]);

  return <></>;

  function createStyleElement(): HTMLStyleElement {
    const style = document.createElement("style");
    style.appendChild(document.createTextNode(theme));
    return style;
  }
}
