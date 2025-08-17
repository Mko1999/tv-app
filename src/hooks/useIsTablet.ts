import { useEffect, useState } from 'react'

function useIsTablet() {
  const [isTablet, setIsTablet] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 768 : false,
  )

  useEffect(() => {
    const handleResize = () => setIsTablet(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return isTablet
}

export default useIsTablet
