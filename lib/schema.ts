import { z } from 'zod'

export const consultationServiceTypes = [
  'leed-certification',
  'well-certification',
  'sustainable-building-design',
  'green-wall-systems',
  'roof-gardens',
] as const

export const consultationSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, 'Full name is required.')
    .max(80, 'Full name is too long.')
    .regex(/^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/, 'Use a valid name (letters, spaces, apostrophe, hyphen only).'),
  organizationName: z
    .string()
    .trim()
    .max(120, 'Business name is too long.')
    .regex(/^[A-Za-z0-9&.,' -]*$/, 'Use a valid business name (letters, numbers, spaces, and &.,\'- only).')
    .optional()
    .or(z.literal('')),
  email: z
    .string()
    .trim()
    .min(1, 'Email is required.')
    .max(120, 'Email is too long.')
    .email('Please enter a valid email address.')
    .regex(/^[\x20-\x7E]+$/, 'Email contains invalid characters.'),
  phone: z
    .string()
    .trim()
    .regex(/^\+?[0-9 -]*$/, 'Use a valid phone number format.')
    .refine((value) => {
      if (!value) return true
      const digits = value.replace(/\D/g, '')
      return digits.length >= 7 && digits.length <= 15
    }, 'Phone number must contain 7 to 15 digits.')
    .optional(),
  serviceType: z.enum(consultationServiceTypes, {
    errorMap: () => ({ message: 'Please select a service.' }),
  }),
  message: z
    .string()
    .trim()
    .min(1, 'Project details are required.')
    .refine((value) => value.split(/\s+/).filter(Boolean).length >= 10, 'Project details must be at least 10 words.'),
})

export type ConsultationFormValues = z.infer<typeof consultationSchema>
