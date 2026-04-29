import { handleConsultationPost } from './controller'

export async function POST(request: Request) {
  return handleConsultationPost(request)
}
