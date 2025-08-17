import { useCallback } from 'react'
import type { EmblaCarouselType } from 'embla-carousel'

function useEmblaScrollToStart(embla: EmblaCarouselType | undefined) {
  return useCallback(() => {
    if (embla) {
      embla.scrollTo(0) // scroll to first slide
    }
  }, [embla])
}

export default useEmblaScrollToStart
