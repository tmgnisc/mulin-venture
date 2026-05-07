import { Skeleton } from '@/components/ui/skeleton'

export function ServicePageLoading() {
  return (
    <main className="bg-[#f4f1e8] text-[#1d2d25]">
      <section className="relative overflow-hidden border-b border-[#d8ddd7] bg-[#17342c]">
        <div className="mx-auto grid max-w-[1320px] gap-10 px-[clamp(20px,5vw,80px)] pt-28 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-20">
          <div className="max-w-2xl">
            <Skeleton className="h-7 w-48 rounded-full bg-white/10" />
            <Skeleton className="mt-5 h-20 w-full max-w-2xl rounded-[16px] bg-white/15" />
            <Skeleton className="mt-4 h-6 w-full max-w-xl rounded bg-white/10" />
            <Skeleton className="mt-2 h-6 w-full max-w-lg rounded bg-white/10" />
            <div className="mt-8 flex flex-wrap gap-3">
              <Skeleton className="h-12 w-48 rounded-full bg-white/15" />
              <Skeleton className="h-12 w-36 rounded-full bg-white/10" />
            </div>
            <div className="mt-10 grid grid-cols-3 gap-3">
              <Skeleton className="h-24 rounded-2xl bg-white/10" />
              <Skeleton className="h-24 rounded-2xl bg-white/10" />
              <Skeleton className="h-24 rounded-2xl bg-white/10" />
            </div>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-white/5 p-4">
            <Skeleton className="h-[420px] rounded-[24px] bg-white/10 md:h-[520px]" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-[clamp(20px,5vw,80px)] py-[clamp(56px,7vw,96px)]">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <Skeleton className="h-4 w-32 rounded bg-[#d5ddd8]" />
            <Skeleton className="mt-3 h-12 w-full max-w-xl rounded-xl bg-[#c9d4cf]" />
            <Skeleton className="mt-5 h-5 w-full max-w-xl rounded bg-[#d5ddd8]" />
            <Skeleton className="mt-2 h-5 w-full max-w-lg rounded bg-[#d5ddd8]" />
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <Skeleton className="h-52 rounded-[24px] bg-[#f8f7f1]" />
            <Skeleton className="h-52 rounded-[24px] bg-[#f8f7f1]" />
            <Skeleton className="h-52 rounded-[24px] bg-[#f8f7f1]" />
          </div>
        </div>
      </section>

      <section className="border-y border-[#d8ddd7] bg-[#edf2ee]">
        <div className="mx-auto max-w-[1320px] px-[clamp(20px,5vw,80px)] py-[clamp(56px,7vw,96px)]">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <Skeleton className="h-4 w-28 rounded bg-[#d1d9d4]" />
              <Skeleton className="mt-3 h-12 w-80 rounded-xl bg-[#cad4cf]" />
            </div>
            <Skeleton className="h-5 w-full max-w-lg rounded bg-[#d1d9d4]" />
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            <Skeleton className="h-44 rounded-[24px] bg-white" />
            <Skeleton className="h-44 rounded-[24px] bg-white" />
            <Skeleton className="h-44 rounded-[24px] bg-white" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-[clamp(20px,5vw,80px)] py-[clamp(56px,7vw,96px)]">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="rounded-[28px] bg-[#17342c] p-8">
            <Skeleton className="h-4 w-32 rounded bg-white/10" />
            <Skeleton className="mt-3 h-12 w-full max-w-lg rounded-xl bg-white/15" />
            <Skeleton className="mt-4 h-5 w-full max-w-xl rounded bg-white/10" />
            <Skeleton className="mt-2 h-5 w-full max-w-lg rounded bg-white/10" />
            <Skeleton className="mt-8 h-11 w-52 rounded-full bg-white/15" />
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <Skeleton className="h-52 rounded-[24px] bg-[#f8f7f1]" />
            <Skeleton className="h-52 rounded-[24px] bg-[#f8f7f1]" />
            <Skeleton className="h-52 rounded-[24px] bg-[#f8f7f1]" />
          </div>
        </div>
      </section>
    </main>
  )
}
