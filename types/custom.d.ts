declare module '*.svg' {
  import React = require('react')

  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
}

declare module '*.png' {
  const src: string
  export default src
}

// Kakao Maps API
declare global {
  interface Window {
    kakao: {
      maps: {
        load: (callback: () => void) => void
        Map: new (container: HTMLElement, options: any) => any
        LatLng: new (lat: number, lng: number) => any
        Marker: new (options: any) => any
        MarkerImage: new (src: string, size: any) => any
        Size: new (width: number, height: number) => any
      }
    }
  }
}
