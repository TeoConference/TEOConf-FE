declare module '*.svg' {
  import React = require('react')

  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
}

declare module '*.png' {
  const src: string
  export default src
}

interface Window {
  kakao: any
}
