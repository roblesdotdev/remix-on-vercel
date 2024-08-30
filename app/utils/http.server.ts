import { cacheHeader } from 'pretty-cache-header'

export const CACHE_CONTROL = {
  DEFAULT: cacheHeader({
    public: true,
    maxAge: '15m',
    sMaxage: '1month',
    staleWhileRevalidate: '1year',
  }),
  REVALIDATE: cacheHeader({
    noCache: true,
  }),
}
