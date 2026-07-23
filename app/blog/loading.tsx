import { Skeleton } from '@/components/ui/skeleton'

export default function BlogLoading() {
  return (
    <div className="bg-cream min-h-screen">
      {/* Hero skeleton */}
      <div className="bg-moss pb-20 pt-28">
        <div className="mx-auto max-w-[1320px] px-[clamp(20px,5vw,80px)]">
          <div className="flex flex-col items-center gap-4">
            <Skeleton className="h-6 w-28 rounded-full bg-white/10" />
            <Skeleton className="h-12 w-48 bg-white/10" />
            <Skeleton className="h-5 w-96 bg-white/10" />
          </div>
        </div>
      </div>

      {/* Filter skeleton */}
      <div className="border-b border-border-sage">
        <div className="mx-auto max-w-[1320px] px-[clamp(20px,5vw,80px)] py-6">
          <div className="flex justify-center gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="h-9 w-20 rounded-full" />
            ))}
          </div>
        </div>
      </div>

      {/* Grid skeleton */}
      <div className="mx-auto max-w-[1320px] px-[clamp(20px,5vw,80px)] py-[clamp(60px,8vw,100px)]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i}>
              <Skeleton className="aspect-[4/3] w-full rounded-xl mb-5" />
              <div className="flex gap-3 mb-2">
                <Skeleton className="h-3 w-20" />
                <Skeleton className="h-3 w-24" />
              </div>
              <Skeleton className="h-5 w-full mb-2" />
              <Skeleton className="h-5 w-3/4 mb-2" />
              <Skeleton className="h-4 w-full mb-1" />
              <Skeleton className="h-4 w-5/6 mb-3" />
              <Skeleton className="h-4 w-24" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
