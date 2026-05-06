import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <main className="min-h-[100svh] bg-[#edf2ed]">
      <section className="border-b border-[#cfd9d2] bg-[#123327] px-6 pt-28 pb-20 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <Skeleton className="h-4 w-24 rounded-full bg-white/20" />
            <Skeleton className="mt-4 h-16 w-full max-w-xl rounded-2xl bg-white/30" />
            <Skeleton className="mt-6 h-5 w-full max-w-4xl rounded-md bg-white/20" />
            <Skeleton className="mt-2 h-5 w-full max-w-3xl rounded-md bg-white/20" />
          </div>
          <Skeleton className="h-[360px] rounded-3xl bg-white/15 md:h-[460px]" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <Skeleton className="h-4 w-40 rounded-full bg-[#dbe4dc]" />
            <Skeleton className="mt-4 h-12 w-full max-w-2xl rounded-xl bg-[#d3ddd5]" />
            <Skeleton className="mt-5 h-5 w-full max-w-xl rounded-md bg-[#dfe7e1]" />
            <div className="mt-8 border-l border-[#d1ddd3] pl-5">
              <Skeleton className="h-4 w-28 rounded bg-[#dbe4dc]" />
              <Skeleton className="mt-2 h-10 w-full max-w-xl rounded bg-[#dfe7e1]" />
            </div>
            <div className="mt-6 border-l border-[#d1ddd3] pl-5">
              <Skeleton className="h-4 w-24 rounded bg-[#dbe4dc]" />
              <Skeleton className="mt-2 h-10 w-full max-w-xl rounded bg-[#dfe7e1]" />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-[1.08fr_0.72fr]">
            <Skeleton className="min-h-[420px] rounded-[28px] bg-[#dce6da]" />
            <div className="flex flex-col gap-4">
              <Skeleton className="min-h-[200px] rounded-[24px] bg-[#dce6da]" />
              <Skeleton className="rounded-[24px] bg-[#f7faf6] p-6 h-[200px]" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 md:px-10">
        <Skeleton className="h-16 w-48 rounded-full bg-[#dbe4dc]" />
        <Skeleton className="mt-4 h-14 w-full max-w-4xl rounded-2xl bg-[#d3ddd5]" />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Skeleton className="h-36 rounded-2xl bg-[#dfe7e1]" />
          <Skeleton className="h-36 rounded-2xl bg-[#dfe7e1]" />
          <Skeleton className="h-36 rounded-2xl bg-[#dfe7e1]" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 md:px-10">
        <Skeleton className="h-44 rounded-[22px] bg-[#17392d]/30" />
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24 md:px-10">
        <Skeleton className="h-44 rounded-[22px] bg-[#f8fbf7]" />
      </section>
    </main>
  )
}
