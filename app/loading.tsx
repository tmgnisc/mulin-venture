import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <div className="bg-cream">
      <header className="fixed top-0 left-0 right-0 z-40">
        <div className="mx-auto max-w-[1320px] px-[clamp(20px,5vw,80px)] py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Skeleton className="h-11 w-11 rounded-full bg-white/25" />
              <Skeleton className="h-5 w-28 rounded bg-white/20" />
            </div>
            <div className="hidden lg:flex items-center gap-6">
              <Skeleton className="h-4 w-16 rounded bg-white/20" />
              <Skeleton className="h-4 w-16 rounded bg-white/20" />
              <Skeleton className="h-4 w-16 rounded bg-white/20" />
              <Skeleton className="h-4 w-16 rounded bg-white/20" />
              <Skeleton className="h-4 w-16 rounded bg-white/20" />
            </div>
            <Skeleton className="hidden lg:block h-10 w-44 rounded-full bg-white/20" />
          </div>
        </div>
      </header>

      <main>
        <section className="relative min-h-[100svh] overflow-hidden bg-[#1c2d1f]">
          <Skeleton className="absolute inset-0 h-full w-full rounded-none bg-white/10" />
          <div className="relative z-10 mx-auto max-w-5xl px-[clamp(16px,5vw,80px)] pt-40 text-center">
            <Skeleton className="mx-auto h-16 w-full max-w-4xl rounded-2xl bg-white/20" />
            <Skeleton className="mx-auto mt-3 h-16 w-full max-w-3xl rounded-2xl bg-white/20" />
            <Skeleton className="mx-auto mt-8 h-5 w-full max-w-2xl rounded bg-white/20" />
            <div className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row sm:justify-center">
              <Skeleton className="h-11 flex-1 rounded-full bg-white/25" />
              <Skeleton className="h-11 flex-1 rounded-full bg-white/20" />
            </div>
            <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-3 md:grid-cols-4">
              <Skeleton className="h-18 rounded-xl bg-white/15" />
              <Skeleton className="h-18 rounded-xl bg-white/15" />
              <Skeleton className="h-18 rounded-xl bg-white/15" />
              <Skeleton className="h-18 rounded-xl bg-white/15" />
            </div>
          </div>
        </section>

        <section className="bg-cream-dark">
          <div className="mx-auto max-w-[1320px] px-[clamp(20px,5vw,80px)] pt-[clamp(60px,8vw,100px)]">
            <div className="mb-12 text-center">
              <Skeleton className="mx-auto h-4 w-32 rounded bg-[#d8e1d6]" />
              <Skeleton className="mx-auto mt-4 h-10 w-72 rounded-xl bg-[#ced8cc]" />
            </div>
          </div>
          <div className="mx-auto max-w-[1320px] px-[clamp(20px,5vw,80px)] pb-[clamp(60px,8vw,100px)]">
            <div className="grid grid-cols-1 gap-0 overflow-hidden rounded-2xl border border-gold/20 md:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Skeleton key={i} className="h-56 rounded-none border-b border-r border-gold/20 bg-[#e6ede3]" />
              ))}
            </div>
          </div>
          <div className="border-t border-b border-sage/20 py-4">
            <Skeleton className="mx-auto h-4 w-[92%] rounded bg-[#d6e0d4]" />
          </div>
        </section>

        <section className="relative h-[60vh] min-h-[400px] overflow-hidden bg-[#192518]">
          <div className="mx-auto px-[clamp(20px,5vw,80px)] pt-28 text-center">
            <Skeleton className="mx-auto h-12 w-full max-w-3xl rounded-xl bg-white/20" />
            <Skeleton className="mx-auto mt-3 h-12 w-full max-w-2xl rounded-xl bg-white/15" />
            <Skeleton className="mx-auto mt-8 h-4 w-64 rounded bg-white/15" />
          </div>
        </section>

        <div className="flex items-center justify-center bg-cream py-8">
          <Skeleton className="h-1 w-24 rounded-full bg-[#d3ddd0]" />
          <Skeleton className="mx-6 h-6 w-28 rounded bg-[#d3ddd0]" />
          <Skeleton className="h-1 w-24 rounded-full bg-[#d3ddd0]" />
        </div>

        <section className="bg-cream py-[clamp(80px,10vw,140px)]">
          <div className="mx-auto max-w-[1320px] px-[clamp(20px,5vw,80px)]">
            <div className="mb-14 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <Skeleton className="h-4 w-24 rounded bg-[#d3ddd0]" />
                <Skeleton className="mt-4 h-12 w-64 rounded-xl bg-[#cad5c7]" />
              </div>
              <Skeleton className="h-10 w-72 rounded bg-[#d9e2d6]" />
            </div>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-12">
              <Skeleton className="min-h-115 rounded-[28px] bg-[#d7e0d4] md:col-span-7 md:row-span-2" />
              <Skeleton className="min-h-65 rounded-[28px] bg-[#dfe7dc] md:col-span-5" />
              <Skeleton className="min-h-65 rounded-[28px] bg-[#e6ede4] md:col-span-3" />
              <Skeleton className="min-h-65 rounded-[28px] bg-[#44624e]/25 md:col-span-2" />
              <Skeleton className="min-h-85 rounded-[28px] bg-[#d7e0d4] md:col-span-4" />
              <Skeleton className="min-h-85 rounded-[28px] bg-[#e3eade] md:col-span-4" />
              <Skeleton className="min-h-85 rounded-[28px] bg-[#44624e]/30 md:col-span-4" />
              <Skeleton className="min-h-40 rounded-[28px] bg-[#e8d5b0]/55 md:col-span-12" />
            </div>
          </div>
        </section>

        <section className="bg-cream py-[clamp(80px,10vw,140px)]">
          <div className="mx-auto max-w-[1320px] px-[clamp(20px,5vw,80px)]">
            <div className="grid grid-cols-1 gap-12 rounded-[20px] bg-cream-dark p-8 md:p-12 lg:grid-cols-2 lg:p-16">
              <Skeleton className="h-80 rounded-2xl bg-[#dce6da]" />
              <div>
                <Skeleton className="h-4 w-20 rounded bg-[#d1dccf]" />
                <Skeleton className="mt-4 h-12 w-80 rounded-xl bg-[#c8d4c5]" />
                <Skeleton className="mt-6 h-5 w-full max-w-xl rounded bg-[#d7e1d5]" />
                <Skeleton className="mt-2 h-5 w-full max-w-lg rounded bg-[#d7e1d5]" />
                <Skeleton className="mt-8 h-20 w-full max-w-xl rounded-lg bg-[#d3ded0]" />
              </div>
            </div>
          </div>
        </section>

        <div className="flex items-center justify-center bg-cream py-8">
          <Skeleton className="h-1 w-24 rounded-full bg-[#d3ddd0]" />
          <Skeleton className="mx-6 h-6 w-28 rounded bg-[#d3ddd0]" />
          <Skeleton className="h-1 w-24 rounded-full bg-[#d3ddd0]" />
        </div>

        <section className="bg-cream py-[clamp(80px,10vw,140px)]">
          <div className="mx-auto max-w-[1320px] px-[clamp(20px,5vw,80px)]">
            <Skeleton className="mx-auto h-10 w-72 rounded-xl bg-[#cad5c7]" />
            <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
              <Skeleton className="aspect-[3/4] rounded-xl bg-[#dbe5d9]" />
              <Skeleton className="aspect-[3/4] rounded-xl bg-[#dbe5d9]" />
              <Skeleton className="aspect-[3/4] rounded-xl bg-[#dbe5d9]" />
            </div>
          </div>
        </section>

        <section className="bg-cream-dark py-[clamp(80px,10vw,140px)]">
          <div className="mx-auto max-w-[1320px] px-[clamp(20px,5vw,80px)]">
            <Skeleton className="mx-auto h-10 w-64 rounded-xl bg-[#cad5c7]" />
            <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
              <Skeleton className="mx-auto h-[500px] w-[380px] rounded-2xl bg-[#dbe5d9]" />
              <div>
                <Skeleton className="h-20 w-full max-w-xl rounded-lg bg-[#d4dfd2]" />
                <Skeleton className="mt-6 h-5 w-full max-w-xl rounded bg-[#dce6da]" />
                <Skeleton className="mt-2 h-5 w-full max-w-lg rounded bg-[#dce6da]" />
                <Skeleton className="mt-6 h-5 w-full max-w-xl rounded bg-[#dce6da]" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#ecf0ec] px-[clamp(20px,5vw,80px)] py-[clamp(24px,4vw,46px)]">
          <div className="mx-auto w-full max-w-[1280px]">
            <Skeleton className="mx-auto h-12 w-full max-w-2xl rounded-xl bg-[#d2ddd2]" />
            <Skeleton className="mx-auto mt-5 h-5 w-full max-w-xl rounded bg-[#dae4da]" />
            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
              <Skeleton className="h-64 rounded-2xl bg-white/80" />
              <Skeleton className="h-64 rounded-2xl bg-white/80" />
              <Skeleton className="h-64 rounded-2xl bg-white/80" />
            </div>
          </div>
        </section>

        <section className="bg-cream py-[clamp(80px,10vw,140px)]">
          <div className="mx-auto max-w-[1320px] px-[clamp(20px,5vw,80px)]">
            <Skeleton className="mx-auto h-10 w-72 rounded-xl bg-[#cad5c7]" />
            <div className="mt-12 columns-1 gap-4 space-y-4 md:columns-2 lg:columns-3">
              {Array.from({ length: 12 }).map((_, i) => (
                <Skeleton
                  key={i}
                  className={`w-full break-inside-avoid rounded-xl bg-[#dbe5d9] ${i % 3 === 0 ? 'h-80' : 'h-56'}`}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-cream-dark py-[clamp(80px,10vw,140px)]">
          <div className="mx-auto max-w-[1320px] px-[clamp(20px,5vw,80px)]">
            <Skeleton className="mx-auto h-10 w-60 rounded-xl bg-[#cad5c7]" />
            <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
              <Skeleton className="h-72 rounded-xl bg-[#ecf1ea]" />
              <Skeleton className="h-72 rounded-xl bg-[#ecf1ea]" />
              <Skeleton className="h-72 rounded-xl bg-[#ecf1ea]" />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#122018] px-[clamp(20px,5vw,80px)] py-14">
        <div className="mx-auto max-w-[1320px]">
          <Skeleton className="h-8 w-48 rounded bg-white/20" />
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-4">
            <Skeleton className="h-24 rounded bg-white/10" />
            <Skeleton className="h-24 rounded bg-white/10" />
            <Skeleton className="h-24 rounded bg-white/10" />
            <Skeleton className="h-24 rounded bg-white/10" />
          </div>
        </div>
      </footer>
    </div>
  )
}
