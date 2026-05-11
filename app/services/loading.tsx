import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <main className="bg-[#f4f1e8] text-[#1d2d25]">
      <section className="overflow-hidden border-b border-[#d8ddd7] bg-[#17342c]">
        <div className="mx-auto grid max-w-[1320px] gap-10 px-[clamp(20px,5vw,80px)] pt-28 pb-16 lg:grid-cols-[1.02fr_0.98fr] lg:items-end lg:pb-20">
          <div className="max-w-3xl">
            <Skeleton className="h-7 w-40 rounded-full bg-white/10" />
            <Skeleton className="mt-5 h-20 w-full max-w-4xl rounded-[18px] bg-white/15" />
            <Skeleton className="mt-4 h-6 w-full max-w-2xl rounded bg-white/10" />
            <Skeleton className="mt-2 h-6 w-full max-w-xl rounded bg-white/10" />
            <div className="mt-8 flex flex-wrap gap-3">
              <Skeleton className="h-12 w-48 rounded-full bg-white/15" />
              <Skeleton className="h-12 w-36 rounded-full bg-white/10" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 rounded-[30px] border border-white/10 bg-white/5 p-4">
            <Skeleton className="h-28 rounded-2xl bg-white/10" />
            <Skeleton className="h-28 rounded-2xl bg-white/10" />
            <Skeleton className="h-28 rounded-2xl bg-white/10" />
            <Skeleton className="col-span-3 h-24 rounded-2xl bg-white/8" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-[clamp(20px,5vw,80px)] py-[clamp(56px,7vw,96px)]">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <Skeleton key={index} className="min-h-64 rounded-[28px] bg-[#e5ebe6]" />
          ))}
        </div>
      </section>
    </main>
  )
}

