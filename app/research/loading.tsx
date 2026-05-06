import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <main className="min-h-[100svh] bg-[#f3f5f4] pb-20">
      <section className="border-b border-[#d8dfdc] bg-[#17392d]">
        <div className="mx-auto max-w-[1200px] px-[clamp(20px,5.2vw,80px)] pt-28 pb-20">
          <Skeleton className="mx-auto h-7 w-36 rounded-full bg-white/20" />
          <Skeleton className="mx-auto mt-6 h-14 w-full max-w-xl rounded-2xl bg-white/30" />
          <Skeleton className="mx-auto mt-4 h-5 w-full max-w-3xl rounded-md bg-white/20" />
          <Skeleton className="mx-auto mt-2 h-5 w-full max-w-2xl rounded-md bg-white/20" />
          <Skeleton className="mx-auto mt-12 h-12 w-full max-w-[700px] rounded-xl bg-white/30" />
          <div className="mx-auto mt-4 flex max-w-4xl flex-wrap justify-center gap-2">
            <Skeleton className="h-9 w-20 rounded-full bg-white/25" />
            <Skeleton className="h-9 w-52 rounded-full bg-white/20" />
            <Skeleton className="h-9 w-56 rounded-full bg-white/20" />
            <Skeleton className="h-9 w-52 rounded-full bg-white/20" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-[clamp(20px,5vw,56px)] pt-8">
        <Skeleton className="mb-8 h-10 w-64 rounded-xl bg-[#d7dfdc]" />
        <Skeleton className="mb-4 h-4 w-52 rounded-md bg-[#d7dfdc]" />
        <div className="space-y-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="border-b border-[#d5ddda] pb-8">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-[260px_1fr] md:items-start">
                <Skeleton className="h-[170px] rounded-xl bg-[#dce4e0]" />
                <div>
                  <Skeleton className="h-4 w-40 rounded-md bg-[#dce4e0]" />
                  <Skeleton className="mt-4 h-10 w-full max-w-3xl rounded-lg bg-[#d3ddd8]" />
                  <Skeleton className="mt-2 h-10 w-full max-w-2xl rounded-lg bg-[#d3ddd8]" />
                  <Skeleton className="mt-4 h-4 w-52 rounded-md bg-[#dce4e0]" />
                  <Skeleton className="mt-2 h-4 w-72 rounded-md bg-[#dce4e0]" />
                  <Skeleton className="mt-5 h-10 w-40 rounded-lg bg-[#ced9d3]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
