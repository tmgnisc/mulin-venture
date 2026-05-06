import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <main className="relative overflow-hidden bg-[linear-gradient(180deg,#1f3a34_0%,#2d4e45_16%,#d5e4d2_36%,#f7f3e8_100%)] pt-20 text-[#1d2d25]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 right-[10%] h-72 w-72 rounded-full bg-[#89b29f]/20 blur-3xl" />
        <div className="absolute top-0 left-[-8%] h-64 w-64 rounded-full bg-[#bfd3c5]/18 blur-3xl" />
      </div>

      <section className="relative pt-[clamp(36px,6vw,72px)] pb-[clamp(28px,5vw,56px)]">
        <div className="mx-auto max-w-[1320px] px-[clamp(20px,5vw,80px)]">
          <div className="mx-auto max-w-3xl text-center">
            <Skeleton className="mx-auto mb-4 h-8 w-52 rounded-full bg-[#d7e3d8]/80" />
            <Skeleton className="mx-auto h-14 w-full max-w-3xl rounded-2xl bg-[#d8e2d6]" />
            <Skeleton className="mx-auto mt-4 h-5 w-full max-w-2xl rounded-md bg-[#e2e9e0]" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-[clamp(20px,5vw,80px)] pb-[clamp(40px,6vw,72px)]">
        <div className="relative overflow-hidden rounded-[26px] border border-[#dfd3bd] bg-[#f7f1e6]/90 px-[clamp(20px,4vw,48px)] py-[clamp(28px,4vw,44px)] shadow-[0_18px_42px_rgba(18,28,22,0.04)]">
          <div className="pointer-events-none absolute inset-0 opacity-[0.16] [background-image:radial-gradient(rgba(122,158,126,0.07)_1px,transparent_1px)] [background-size:18px_18px]" />

          <div className="relative mx-auto mb-10 max-w-3xl text-center">
            <Skeleton className="mx-auto mb-4 h-8 w-44 rounded-full bg-[#eef2ee]" />
            <Skeleton className="mx-auto h-11 w-full max-w-3xl rounded-2xl bg-[#ece6d8]" />
            <Skeleton className="mx-auto mt-4 h-5 w-full max-w-2xl rounded-md bg-[#eee9de]" />
          </div>

          <div className="relative grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="rounded-[18px] border border-[#dfd3bd] bg-[#f7f1e6] p-4 sm:p-5">
                <div className="flex items-start justify-between gap-3">
                  <Skeleton className="h-10 w-10 rounded-[10px] bg-[#eef2ee]" />
                  <Skeleton className="h-6 w-9 rounded-full bg-[#f1eee7]" />
                </div>
                <Skeleton className="mt-4 h-5 w-28 rounded bg-[#e7e0d0]" />
                <div className="mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                  <Skeleton className="h-6 w-28 rounded-full bg-[#f1efe9]" />
                  <Skeleton className="h-6 w-20 rounded-full bg-[#f1efe9]" />
                  <Skeleton className="h-6 w-24 rounded-full bg-[#f1efe9]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative pt-[clamp(36px,6vw,72px)] pb-[clamp(72px,9vw,120px)]">
        <div className="mx-auto max-w-[1320px] px-[clamp(20px,5vw,80px)]">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <Skeleton className="mx-auto mb-4 h-8 w-48 rounded-full bg-[#d7e3d8]/80" />
            <Skeleton className="mx-auto h-12 w-full max-w-4xl rounded-2xl bg-[#d8e2d6]" />
            <Skeleton className="mx-auto mt-4 h-5 w-full max-w-3xl rounded-md bg-[#e2e9e0]" />
          </div>

          <section className="relative overflow-hidden rounded-3xl border border-[#dfd3bd] bg-[#f7f1e6]/90 p-6 shadow-[0_24px_60px_rgba(17,31,24,0.12)] backdrop-blur-md md:p-8">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className={`space-y-2 ${index === 4 ? 'md:col-span-2' : ''}`}>
                  <Skeleton className="h-4 w-28 rounded bg-[#ede7dc]" />
                  <Skeleton className="h-12 w-full rounded-xl bg-[#fcf8f0]" />
                </div>
              ))}
              <div className="md:col-span-2">
                <Skeleton className="h-4 w-36 rounded bg-[#ede7dc]" />
                <Skeleton className="mt-2 h-28 w-full rounded-xl bg-[#fcf8f0]" />
              </div>
              <div className="md:col-span-2">
                <Skeleton className="h-12 w-44 rounded-full bg-[#244135]/20" />
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}
