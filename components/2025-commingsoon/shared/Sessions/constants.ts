import { TrackType } from './types'

export const TRACK_COLORS: Record<TrackType, string> = {
  'TRACK A': '#FF383C',
  'TRACK B': '#007FEE',
  'TRACK C': '#00B72E',
}

export const TRACK_ORDER: TrackType[] = ['TRACK A', 'TRACK B', 'TRACK C']

export const TAB_DATES = ['12월 6일', '12월 7일'] as const
