import { Skeleton } from '@/components/ui/skeleton'

export function ProductPageLoading() {
  return (
    <main className="bg-[#f3efe6] text-[#1e241f]">
      <section className="relative overflow-hidden bg-[#17342c]">
        <div className="mx-auto grid max-w-[1320px] gap-10 px-[clamp(20px,5vw,80px)] pt-28 pb-18 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
          <div className="max-w-2xl">
            <Skeleton className="h-7 w-44 rounded-full bg-white/10" />
            <Skeleton className="mt-5 h-24 w-full max-w-4xl rounded-[28px] bg-white/10" />
            <Skeleton className="mt-4 h-6 w-full max-w-2xl rounded bg-white/10" />
            <Skeleton className="mt-2 h-6 w-full max-w-xl rounded bg-white/10" />
            <div className="mt-8 flex flex-wrap gap-3">
              <Skeleton className="h-12 w-48 rounded-full bg-white/10" />
              <Skeleton className="h-12 w-36 rounded-full bg-white/10" />
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
              <Skeleton className="h-7 w-28 rounded-full bg-white/10" />
              <Skeleton className="h-7 w-28 rounded-full bg-white/10" />
              <Skeleton className="h-7 w-28 rounded-full bg-white/10" />
            </div>
          </div>

          <div className="relative">
            <Skeleton className="min-h-[430px] rounded-[44px] bg-white/10" />
          </div>
        </div>
      </section>

      <section className="bg-[#214136]">
        <div className="mx-auto max-w-[1320px] px-[clamp(20px,5vw,80px)] py-6">
          <Skeleton className="h-5 w-full rounded-full bg-white/12" />
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-[clamp(20px,5vw,80px)] py-[clamp(56px,7vw,96px)]">
        <div className="grid gap-8 lg:grid-cols-[0.84fr_1.16fr] lg:items-start">
          <div>
            <Skeleton className="h-6 w-40 rounded bg-[#d9e1d3]" />
            <Skeleton className="mt-3 h-12 w-full max-w-xl rounded-xl bg-[#d9e1d3]" />
            <Skeleton className="mt-5 h-5 w-full max-w-xl rounded bg-[#d9e1d3]" />
            <Skeleton className="mt-2 h-5 w-full max-w-lg rounded bg-[#d9e1d3]" />
          </div>
          <div className="space-y-6">
            <Skeleton className="h-[520px] rounded-[44px] bg-white/70" />
            <div className="grid gap-3 md:grid-cols-3">
              <Skeleton className="h-[88px] rounded-[28px] bg-white/70" />
              <Skeleton className="h-[88px] rounded-[28px] bg-white/70" />
              <Skeleton className="h-[88px] rounded-[28px] bg-white/70" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-[clamp(20px,5vw,80px)] py-[clamp(56px,7vw,96px)]">
        <div className="grid gap-8 lg:grid-cols-[0.84fr_1.16fr] lg:items-start">
          <Skeleton className="h-[420px] rounded-[44px] bg-white/70" />
          <div className="space-y-6">
            <Skeleton className="h-[260px] rounded-[40px] bg-white/70" />
            <div className="grid gap-4 md:grid-cols-3">
              <Skeleton className="h-[160px] rounded-[32px] bg-white/70" />
              <Skeleton className="h-[160px] rounded-[32px] bg-white/70" />
              <Skeleton className="h-[160px] rounded-[32px] bg-white/70" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
