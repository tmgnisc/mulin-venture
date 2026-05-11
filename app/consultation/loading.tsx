import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <main className="relative overflow-hidden bg-[linear-gradient(180deg,#1f3a34_0%,#2d4e45_16%,#d5e4d2_36%,#f7f3e8_100%)] pt-20 text-[#1d2d25]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 right-[10%] h-72 w-72 rounded-full bg-[#89b29f]/20 blur-3xl" />
        <div className="absolute top-0 left-[-8%] h-64 w-64 rounded-full bg-[#bfd3c5]/18 blur-3xl" />
      </div>

      <header className="fixed top-0 left-0 right-0 z-50">
        <nav className="mx-auto flex max-w-[1320px] items-center justify-between px-[clamp(20px,5vw,80px)] py-4">
          <div className="flex items-center gap-3">
            <Skeleton className="h-11 w-11 rounded-full bg-white/20" />
            <Skeleton className="h-5 w-28 rounded bg-white/20" />
            <Skeleton className="hidden h-5 w-5 rounded-full bg-white/20 lg:block" />
          </div>

          <div className="hidden items-center gap-8 lg:flex">
            <Skeleton className="h-4 w-16 rounded bg-white/18" />
            <Skeleton className="h-4 w-16 rounded bg-white/18" />
            <Skeleton className="h-4 w-16 rounded bg-white/18" />
            <Skeleton className="h-4 w-16 rounded bg-white/18" />
            <Skeleton className="h-4 w-16 rounded bg-white/18" />
          </div>

          <Skeleton className="hidden h-11 w-52 rounded-full bg-white/18 lg:block" />
          <Skeleton className="h-10 w-10 rounded-full bg-white/18 lg:hidden" />
        </nav>
      </header>

      <section className="relative pt-[clamp(36px,6vw,72px)] pb-[clamp(72px,9vw,120px)]">
        <div className="mx-auto max-w-[1320px] px-[clamp(20px,5vw,80px)]">
          <div className="mx-auto max-w-3xl text-center">
            <Skeleton className="mx-auto mb-4 h-8 w-52 rounded-full bg-[#d7e3d8]/80" />
            <Skeleton className="mx-auto h-14 w-full max-w-3xl rounded-2xl bg-[#d8e2d6]" />
            <Skeleton className="mx-auto mt-4 h-5 w-full max-w-2xl rounded-md bg-[#e2e9e0]" />
          </div>
        </div>
      </section>

      <section className="relative pb-[clamp(72px,9vw,120px)]">
        <div className="mx-auto max-w-[1320px] px-[clamp(20px,5vw,80px)]">
          <div className="mx-auto max-w-4xl rounded-3xl border border-[#dfd3bd] bg-[#f7f1e6]/90 p-6 shadow-[0_24px_60px_rgba(17,31,24,0.12)] backdrop-blur-md md:p-8">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <Skeleton className="h-4 w-24 rounded bg-[#ede7dc]" />
                <Skeleton className="h-12 w-full rounded-xl bg-[#fcf8f0]" />
              </div>

              <div className="space-y-2">
                <Skeleton className="h-4 w-36 rounded bg-[#ede7dc]" />
                <Skeleton className="h-12 w-full rounded-xl bg-[#fcf8f0]" />
              </div>

              <div className="space-y-2">
                <Skeleton className="h-4 w-16 rounded bg-[#ede7dc]" />
                <Skeleton className="h-12 w-full rounded-xl bg-[#fcf8f0]" />
              </div>

              <div className="space-y-2">
                <Skeleton className="h-4 w-16 rounded bg-[#ede7dc]" />
                <Skeleton className="h-12 w-full rounded-xl bg-[#fcf8f0]" />
              </div>

              <div className="space-y-2">
                <Skeleton className="h-4 w-20 rounded bg-[#ede7dc]" />
                <Skeleton className="h-12 w-full rounded-xl bg-[#fcf8f0]" />
              </div>

              <div className="space-y-2 md:col-span-2">
                <Skeleton className="h-4 w-36 rounded bg-[#ede7dc]" />
                <Skeleton className="h-28 w-full rounded-xl bg-[#fcf8f0]" />
              </div>

              <div className="md:col-span-2">
                <Skeleton className="h-12 w-44 rounded-full bg-[#244135]/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#17342c]">
        <div className="mx-auto max-w-[1320px] px-[clamp(20px,5vw,80px)] py-16 md:py-20">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <Skeleton className="h-12 w-12 rounded-full bg-white/10" />
              <Skeleton className="h-6 w-28 rounded bg-white/10" />
              <Skeleton className="hidden h-6 w-6 rounded-full bg-white/10 md:block" />
            </div>
            <Skeleton className="h-6 w-44 rounded bg-white/10" />
          </div>

          <div className="my-12 h-px bg-white/10" />

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-3">
              <Skeleton className="h-4 w-full max-w-sm rounded bg-white/10" />
              <Skeleton className="h-4 w-full max-w-xs rounded bg-white/10" />
              <div className="flex gap-4 pt-2">
                <Skeleton className="h-5 w-5 rounded-full bg-white/10" />
                <Skeleton className="h-5 w-5 rounded-full bg-white/10" />
                <Skeleton className="h-5 w-5 rounded-full bg-white/10" />
              </div>
            </div>

            <div className="space-y-3">
              <Skeleton className="h-4 w-16 rounded bg-white/10" />
              <Skeleton className="h-4 w-28 rounded bg-white/10" />
              <Skeleton className="h-4 w-24 rounded bg-white/10" />
              <Skeleton className="h-4 w-20 rounded bg-white/10" />
            </div>

            <div className="space-y-3">
              <Skeleton className="h-4 w-20 rounded bg-white/10" />
              <Skeleton className="h-4 w-24 rounded bg-white/10" />
              <Skeleton className="h-4 w-28 rounded bg-white/10" />
              <Skeleton className="h-4 w-20 rounded bg-white/10" />
            </div>

            <div className="space-y-4">
              <Skeleton className="h-10 w-full rounded-b-full border-b border-white/10 bg-white/10" />
              <Skeleton className="h-4 w-40 rounded bg-white/10" />
              <Skeleton className="h-4 w-52 rounded bg-white/10" />
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-6">
            <Skeleton className="mx-auto h-4 w-full max-w-xl rounded bg-white/10" />
          </div>
        </div>
      </footer>
    </main>
  )
}
