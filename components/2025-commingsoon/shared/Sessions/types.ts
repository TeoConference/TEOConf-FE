import { StaticImageData } from 'next/image'

export type TrackType = 'TRACK A' | 'TRACK B' | 'TRACK C'

export interface Speaker {
  title: string
  desc: string
  name: string
  image: StaticImageData
  keywords: string[]
  role: string
  track: TrackType
  seq: number
}

export interface SessionData {
  date: string
  speakers: Speaker[]
}
