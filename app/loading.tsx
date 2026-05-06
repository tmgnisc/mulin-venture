import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <main className="min-h-[100svh] bg-[#f3f6f1]">
      <section className="px-6 pt-24 pb-18 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <Skeleton className="h-4 w-44 rounded-full bg-[#d5ded0]" />
            <Skeleton className="mt-6 h-16 w-full max-w-xl rounded-2xl bg-[#c9d4c4]" />
            <Skeleton className="mt-3 h-16 w-full max-w-lg rounded-2xl bg-[#c9d4c4]" />
            <Skeleton className="mt-6 h-5 w-full max-w-md rounded-md bg-[#dde5d8]" />
            <Skeleton className="mt-2 h-5 w-full max-w-sm rounded-md bg-[#dde5d8]" />
            <div className="mt-8 flex gap-3">
              <Skeleton className="h-11 w-44 rounded-full bg-[#d0d9ca]" />
              <Skeleton className="h-11 w-36 rounded-full bg-[#d0d9ca]" />
            </div>
          </div>
          <Skeleton className="h-[430px] rounded-3xl bg-[#dbe4d7]" />
        </div>
      </section>

      <section className="px-6 py-12 md:px-10">
        <div className="mx-auto max-w-6xl">
          <Skeleton className="h-8 w-64 rounded-lg bg-[#d7e0d4]" />
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Skeleton className="h-40 rounded-2xl bg-[#e0e8dc]" />
            <Skeleton className="h-40 rounded-2xl bg-[#e0e8dc]" />
            <Skeleton className="h-40 rounded-2xl bg-[#e0e8dc]" />
          </div>
        </div>
      </section>

      <div className="mx-auto h-px w-full max-w-6xl bg-[#d7dfd3]" />

      <section className="px-6 py-12 md:px-10">
        <div className="mx-auto max-w-6xl">
          <Skeleton className="h-10 w-72 rounded-xl bg-[#d7e0d4]" />
          <Skeleton className="mt-4 h-5 w-full max-w-2xl rounded-md bg-[#dfe7db]" />
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            <Skeleton className="h-72 rounded-2xl bg-[#dce5d8]" />
            <Skeleton className="h-72 rounded-2xl bg-[#dce5d8]" />
            <Skeleton className="h-72 rounded-2xl bg-[#dce5d8]" />
          </div>
        </div>
      </section>

      <section className="px-6 py-10 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
          <Skeleton className="h-[340px] rounded-3xl bg-[#dfe7db]" />
          <div>
            <Skeleton className="h-8 w-56 rounded-lg bg-[#d7e0d4]" />
            <Skeleton className="mt-4 h-5 w-full max-w-md rounded-md bg-[#dfe7db]" />
            <Skeleton className="mt-2 h-5 w-full max-w-sm rounded-md bg-[#dfe7db]" />
            <div className="mt-6 space-y-3">
              <Skeleton className="h-14 rounded-xl bg-[#d5dfd2]" />
              <Skeleton className="h-14 rounded-xl bg-[#d5dfd2]" />
              <Skeleton className="h-14 rounded-xl bg-[#d5dfd2]" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 md:px-10">
        <div className="mx-auto max-w-6xl">
          <Skeleton className="h-8 w-60 rounded-lg bg-[#d7e0d4]" />
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Skeleton className="h-56 rounded-xl bg-[#dce5d8]" />
            <Skeleton className="h-56 rounded-xl bg-[#dce5d8]" />
            <Skeleton className="h-56 rounded-xl bg-[#dce5d8]" />
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 md:px-10">
        <div className="mx-auto max-w-6xl">
          <Skeleton className="h-36 rounded-3xl bg-[#d3ddd0]" />
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            <Skeleton className="h-36 rounded-xl bg-[#dfe7db]" />
            <Skeleton className="h-36 rounded-xl bg-[#dfe7db]" />
            <Skeleton className="h-36 rounded-xl bg-[#dfe7db]" />
            <Skeleton className="h-36 rounded-xl bg-[#dfe7db]" />
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <Skeleton className="h-40 rounded-2xl bg-[#dce5d8]" />
            <Skeleton className="h-40 rounded-2xl bg-[#dce5d8]" />
          </div>
        </div>
      </section>
    </main>
  )
}
