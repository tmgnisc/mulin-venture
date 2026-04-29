import { NextResponse } from 'next/server'

import { sendConsultationMail } from '@/lib/mail/mail-service'

// const RECAPTCHA_VERIFY_ENDPOINT = 'https://www.google.com/recaptcha/api/siteverify'

type ConsultationPayload = {
  fullName?: string
  organizationName?: string
  email?: string
  phone?: string
  serviceType?: string
  message?: string
  // recaptchaToken?: string
}

// type RecaptchaVerifyResponse = {
//   success: boolean
// }

const serviceLabelMap: Record<string, string> = {
  'leed-certification': 'LEED Certification',
  'well-certification': 'WELL Certification',
  'sustainable-building-design': 'Sustainable Building Design',
  'green-wall-systems': 'Green Wall Systems',
  'roof-gardens': 'Roof Gardens',
}

export async function handleConsultationPost(request: Request) {
  // const recaptchaSecretKey = process.env.RECAPTCHA_SECRET_KEY
  // if (!recaptchaSecretKey) {
  //   return NextResponse.json({ ok: false, error: 'Server configuration error.' }, { status: 500 })
  // }

  let body: ConsultationPayload
  try {
    body = (await request.json()) as ConsultationPayload
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON body.' }, { status: 400 })
  }

  const fullName = body.fullName?.trim()
  const organizationName = body.organizationName?.trim() || ''
  const email = body.email?.trim()
  const phone = body.phone?.trim() || ''
  const serviceType = body.serviceType?.trim()
  const message = body.message?.trim()
  // const recaptchaToken = body.recaptchaToken?.trim()

  if (!fullName || !email || !serviceType || !message) {
    return NextResponse.json({ ok: false, error: 'Missing required fields.' }, { status: 400 })
  }

  // const ipHeader = request.headers.get('x-forwarded-for')
  // const remoteIp = ipHeader ? ipHeader.split(',')[0]?.trim() : ''

  // const verifyBody = new URLSearchParams({
  //   secret: recaptchaSecretKey,
  //   response: recaptchaToken,
  // })
  // if (remoteIp) {
  //   verifyBody.set('remoteip', remoteIp)
  // }

  // let verifyResult: RecaptchaVerifyResponse
  // try {
  //   const verifyResponse = await fetch(RECAPTCHA_VERIFY_ENDPOINT, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded',
  //     },
  //     body: verifyBody,
  //   })

  //   if (!verifyResponse.ok) {
  //     return NextResponse.json({ ok: false, error: 'Captcha verification service unavailable.' }, { status: 502 })
  //   }

  //   verifyResult = (await verifyResponse.json()) as RecaptchaVerifyResponse
  // } catch {
  //   return NextResponse.json({ ok: false, error: 'Captcha verification failed.' }, { status: 502 })
  // }

  // if (!verifyResult.success) {
  //   return NextResponse.json({ ok: false, error: 'Captcha verification failed.' }, { status: 403 })
  // }

  const selectedService = serviceLabelMap[serviceType] || 'General Inquiry'

  try {
    await sendConsultationMail({
      fullName,
      organizationName,
      email,
      phone,
      selectedService,
      message,
    })
  } catch (error) {
    if (error instanceof Error && error.message === 'SMTP_CONFIG_INVALID') {
      return NextResponse.json({ ok: false, error: 'Server configuration error.' }, { status: 500 })
    }

    return NextResponse.json({ ok: false, error: 'Failed to send consultation request.' }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
