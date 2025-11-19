export interface KakaoMapPosition {
  lat: number
  lng: number
}

export interface MarkerImageConfig {
  src: string
  size: {
    width: number
    height: number
  }
  offset: {
    x: number
    y: number
  }
}

export interface LocationData {
  lat: number
  lng: number
  placeId: string
}
