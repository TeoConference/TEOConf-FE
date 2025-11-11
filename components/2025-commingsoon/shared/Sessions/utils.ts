import { Speaker, TrackType } from './types'
import { TRACK_COLORS, TRACK_ORDER } from './constants'

export const getTrackColor = (track: TrackType): string => {
  return TRACK_COLORS[track]
}

export const getCardBgColor = (tab: number, track: TrackType): string => {
  if (tab === 0) {
    return track === 'TRACK B' ? 'bg-purple-100' : 'bg-purple-50'
  }
  return track === 'TRACK B' ? 'bg-purple-50' : 'bg-purple-100'
}

export const groupBySeq = (speakers: Speaker[]): Speaker[][] => {
  const groupedBySeq: Record<number, Speaker[]> = {}

  speakers.forEach((speaker) => {
    const seqNumber = speaker.seq

    if (!groupedBySeq[seqNumber]) {
      groupedBySeq[seqNumber] = []
    }

    groupedBySeq[seqNumber].push(speaker)
  })

  const seqNumbers = Object.keys(groupedBySeq) // ['1', '2', '3']
  const sortedSeqNumbers = seqNumbers.sort((a, b) => Number(a) - Number(b))

  return sortedSeqNumbers.map((seqNumber) => {
    const speakersInSeq = groupedBySeq[Number(seqNumber)]

    // 각 seq 그룹 내에서 트랙 순서대로 정렬 (TRACK A -> TRACK B)
    return speakersInSeq.sort(
      (speakerA, speakerB) =>
        TRACK_ORDER.indexOf(speakerA.track) -
        TRACK_ORDER.indexOf(speakerB.track)
    )
  })
}
