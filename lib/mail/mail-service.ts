import nodemailer from 'nodemailer'

export type ConsultationMailPayload = {
  fullName: string
  organizationName?: string
  email: string
  phone?: string
  selectedService: string
  message: string
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

export async function sendConsultationMail(payload: ConsultationMailPayload) {
  const smtpHost = process.env.SMTP_HOST || 'smtp.ethereal.email'
  const smtpPortRaw = process.env.SMTP_PORT || '587'
  const smtpUser = process.env.SMTP_USER
  const smtpPass = process.env.SMTP_PASS
  const mailTo = process.env.CONSULTATION_MAIL_TO || smtpUser
  const fromName = process.env.CONSULTATION_MAIL_FROM_NAME || 'Mulin Venture'

  const smtpPort = Number(smtpPortRaw)
  if (!smtpUser || !smtpPass || !mailTo || !Number.isFinite(smtpPort)) {
    throw new Error('SMTP_CONFIG_INVALID')
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  })

  const submissionSummary = [
    `Full Name: ${payload.fullName}`,
    `Organization Name: ${payload.organizationName || 'N/A'}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone || 'N/A'}`,
    `Service: ${payload.selectedService}`,
    '',
    'Project Details (User Message):',
    payload.message,
  ].join('\n')

  const safeFullName = escapeHtml(payload.fullName)
  const safeOrganizationName = escapeHtml(payload.organizationName || 'N/A')
  const safeEmail = escapeHtml(payload.email)
  const safePhone = escapeHtml(payload.phone || 'N/A')
  const safeSelectedService = escapeHtml(payload.selectedService)
  const safeMessage = escapeHtml(payload.message).replace(/\n/g, '<br/>')

  try {
    const info = await transporter.sendMail({
      from: `"${fromName}" <${smtpUser}>`,
      to: mailTo,
      replyTo: payload.email,
      subject: `New Consultation Request: ${payload.selectedService}`,
      text: submissionSummary,
      html: `
        <h2>New Consultation Request</h2>
        <p><strong>Full Name:</strong> ${safeFullName}</p>
        <p><strong>Organization Name:</strong> ${safeOrganizationName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Phone:</strong> ${safePhone}</p>
        <p><strong>Service:</strong> ${safeSelectedService}</p>
        <p><strong>Project Details:</strong></p>
        <p>${safeMessage}</p>
      `,
    })

    console.log('Message sent: %s', info.messageId)
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
  } catch (err) {
    void payload
    void submissionSummary
    console.error('Error while sending mail:', err)
    throw err
  }
}
