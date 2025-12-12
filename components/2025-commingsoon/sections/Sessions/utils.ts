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

export const getDownloadButtonColor = (
  tab: number,
  track: TrackType,
  hasMaterials: boolean
): string => {
  const isPurpleBg =
    (tab === 0 && track === 'TRACK B') || (tab === 1 && track !== 'TRACK B')

  if (hasMaterials) {
    return isPurpleBg
      ? 'bg-purple-400 text-slate-50 hover:bg-purple-500'
      : 'bg-white text-purple-600 border border-purple-600 hover:bg-purple-50'
  }

  return isPurpleBg
    ? 'bg-gray-400 text-gray-700 font-semibold opacity-60'
    : 'bg-gray-300 text-gray-800 font-semibold opacity-50'
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

/**
 * 단일 이미지 프리로드 함수
 */
const preloadSingleImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve()
    img.onerror = () => reject(new Error(`Failed to load image: ${src}`))
    img.src = src
  })
}

/**
 * 이미지 프리로드 함수
 * 다음 탭의 이미지를 미리 로드하여 캐시에 저장
 * @returns Promise that resolves when all images are loaded
 */
export const preloadImages = async (speakers: Speaker[]): Promise<void> => {
  if (typeof window === 'undefined') return

  const imagePromises = speakers.map((speaker) => {
    const src =
      typeof speaker.image === 'string' ? speaker.image : speaker.image.src
    return preloadSingleImage(src)
  })

  try {
    await Promise.all(imagePromises)
  } catch (error) {
    // 개별 이미지 로드 실패는 무시하고 계속 진행
    console.warn('Some images failed to preload:', error)
  }
}
