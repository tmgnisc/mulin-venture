import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <main className="min-h-[100svh] bg-[#e9efe8] text-[#1d2c24]">
      <section className="px-6 pt-28 pb-12 md:px-10">
        <div className="mx-auto max-w-6xl rounded-3xl bg-[#2f4b3b] px-6 py-14 text-center">
          <Skeleton className="mx-auto h-4 w-56 rounded-full bg-white/20" />
          <Skeleton className="mx-auto mt-6 h-16 w-full max-w-2xl rounded-2xl bg-white/30" />
          <Skeleton className="mx-auto mt-3 h-16 w-full max-w-xl rounded-2xl bg-white/30" />
          <Skeleton className="mx-auto mt-6 h-5 w-full max-w-2xl rounded-md bg-white/20" />
          <div className="mx-auto mt-10 flex max-w-xl justify-center gap-4">
            <Skeleton className="h-11 w-52 rounded-full bg-white/25" />
            <Skeleton className="h-11 w-36 rounded-full bg-white/20" />
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 rounded-2xl bg-[#dce5d8] px-6 py-7 md:grid-cols-3">
          <Skeleton className="h-16 rounded-xl bg-[#cfdbca]" />
          <Skeleton className="h-16 rounded-xl bg-[#cfdbca]" />
          <Skeleton className="h-16 rounded-xl bg-[#cfdbca]" />
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-6 py-16 md:grid-cols-3 md:px-10">
        <Skeleton className="h-44 rounded-3xl bg-[#dde6d9]" />
        <Skeleton className="h-44 rounded-3xl bg-[#dde6d9]" />
        <Skeleton className="h-44 rounded-3xl bg-[#dde6d9]" />
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16 md:px-10">
        <Skeleton className="mx-auto h-6 w-32 rounded-full bg-[#cfdbca]" />
        <Skeleton className="mx-auto mt-4 h-11 w-72 rounded-lg bg-[#d7e1d3]" />
        <Skeleton className="mx-auto mt-4 h-5 w-full max-w-3xl rounded-md bg-[#dce5d8]" />
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          <Skeleton className="h-80 rounded-xl bg-[#dfe7da]" />
          <Skeleton className="h-80 rounded-xl bg-[#dfe7da]" />
          <Skeleton className="h-80 rounded-xl bg-[#dfe7da]" />
        </div>
      </section>
    </main>
  )
}
