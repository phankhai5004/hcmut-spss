declare module 'vite-plugin-svgr' {
  import { Plugin } from 'vite';
  export default function svgr(options?: any): Plugin;
}

declare module '*.svg?react' {
  import * as React from 'react';

  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;

  export default ReactComponent;
}
