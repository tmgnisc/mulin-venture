import { Skeleton } from '@/components/ui/skeleton'

export function ProductsHubLoading() {
  return (
    <main className="bg-[#f3efe6] text-[#1e241f]">
      <section className="relative overflow-hidden bg-[#dfe8d9]">
        <div className="mx-auto grid max-w-[1320px] gap-10 px-[clamp(20px,5vw,80px)] pt-28 pb-18 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
          <div className="max-w-2xl">
            <Skeleton className="h-7 w-52 rounded-full bg-white/55" />
            <Skeleton className="mt-5 h-24 w-full max-w-4xl rounded-[28px] bg-white/55" />
            <Skeleton className="mt-4 h-6 w-full max-w-2xl rounded bg-white/55" />
            <Skeleton className="mt-2 h-6 w-full max-w-xl rounded bg-white/55" />
            <div className="mt-8 flex flex-wrap gap-3">
              <Skeleton className="h-12 w-48 rounded-full bg-white/55" />
              <Skeleton className="h-12 w-36 rounded-full bg-white/55" />
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
              <Skeleton className="h-7 w-28 rounded-full bg-white/55" />
              <Skeleton className="h-7 w-28 rounded-full bg-white/55" />
              <Skeleton className="h-7 w-28 rounded-full bg-white/55" />
            </div>
          </div>

          <div className="relative">
            <Skeleton className="min-h-[430px] rounded-[44px] bg-white/60" />
          </div>
        </div>
      </section>

      <section className="bg-[#e9eedf]">
        <div className="mx-auto max-w-[1320px] px-[clamp(20px,5vw,80px)] py-6">
          <Skeleton className="h-5 w-full rounded-full bg-white/45" />
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-[clamp(20px,5vw,80px)] py-[clamp(56px,7vw,96px)]">
        <div className="space-y-8">
          <Skeleton className="h-[440px] rounded-[42px] bg-white/70" />
          <Skeleton className="h-[440px] rounded-[42px] bg-white/70" />
        </div>
      </section>

      <section className="bg-[#e9eedf]">
        <div className="mx-auto max-w-[1320px] px-[clamp(20px,5vw,80px)] py-[clamp(40px,6vw,72px)]">
          <Skeleton className="h-[140px] rounded-[40px] bg-white/55" />
        </div>
      </section>
    </main>
  )
}
