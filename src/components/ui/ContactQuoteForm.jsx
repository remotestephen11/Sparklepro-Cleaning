import { useMemo, useState } from 'react'
import Button from './Button'
import Card from './Card'
import SectionHeader from './SectionHeader'

const inputClassName =
  'h-12 w-full rounded-2xl border border-surface-200 bg-surface-50 px-4 text-sm text-surface-700 outline-none transition placeholder:text-surface-400 focus:border-brand-green-400 focus:bg-surface-0'

const labelClassName = 'text-sm font-medium text-surface-700'

const initialFormData = {
  fullName: '',
  email: '',
  phone: '',
  serviceNeeded: '',
  propertyType: '',
  preferredDate: '',
  message: '',
}

function ContactQuoteForm() {
  const [formData, setFormData] = useState(initialFormData)
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const formEndpoint = useMemo(() => {
    const formId = import.meta.env.VITE_FORMSPREE_FORM_ID?.trim()
    return formId ? `https://formspree.io/f/${formId}` : ''
  }, [])

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!formEndpoint) {
      setStatus('error')
      setErrorMessage('Formspree is not configured yet. Add VITE_FORMSPREE_FORM_ID to continue.')
      return
    }

    setStatus('submitting')
    setErrorMessage('')

    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json().catch(() => ({}))

      if (!response.ok) {
        const message =
          result?.errors?.[0]?.message ||
          'Your request could not be sent. Please review the form and try again.'
        throw new Error(message)
      }

      setStatus('success')
      setFormData(initialFormData)
    } catch (error) {
      setStatus('error')
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Something went wrong while sending your request.',
      )
    }
  }

  return (
    <Card className="bg-surface-0">
      <SectionHeader
        eyebrow="Request a Quote"
        title="Tell us about your space."
        description="Share a few details about the property and the type of cleaning support you need. We will use this to understand the scope and follow up with the right next step."
        titleClassName="max-w-[11ch] text-[2rem] leading-tight sm:text-[2.35rem]"
        descriptionClassName="text-base leading-7 text-surface-500"
      />

      <form className="mt-8 space-y-5" onSubmit={handleSubmit} noValidate>
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="fullName" className={labelClassName}>
              Full Name
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              autoComplete="name"
              placeholder="Enter your full name"
              className={inputClassName}
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className={labelClassName}>
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Enter your email address"
              className={inputClassName}
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className={labelClassName}>
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="Enter your phone number"
              className={inputClassName}
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="serviceNeeded" className={labelClassName}>
              Service Needed
            </label>
            <select
              id="serviceNeeded"
              name="serviceNeeded"
              className={inputClassName}
              value={formData.serviceNeeded}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select a service
              </option>
              <option value="Residential Cleaning">Residential Cleaning</option>
              <option value="Office Cleaning">Office Cleaning</option>
              <option value="Deep Cleaning">Deep Cleaning</option>
              <option value="Move-In / Move-Out Cleaning">Move-In / Move-Out Cleaning</option>
              <option value="Post-Construction Cleaning">Post-Construction Cleaning</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="propertyType" className={labelClassName}>
              Property Type
            </label>
            <select
              id="propertyType"
              name="propertyType"
              className={inputClassName}
              value={formData.propertyType}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select a property type
              </option>
              <option value="House">House</option>
              <option value="Apartment">Apartment</option>
              <option value="Office">Office</option>
              <option value="Retail Space">Retail Space</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="preferredDate" className={labelClassName}>
              Preferred Date
            </label>
            <input
              id="preferredDate"
              name="preferredDate"
              type="date"
              className={inputClassName}
              value={formData.preferredDate}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className={labelClassName}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="6"
            placeholder="Tell us about the size of the space, preferred frequency, and any priorities for the quote."
            className="w-full rounded-2xl border border-surface-200 bg-surface-50 px-4 py-3 text-sm leading-6 text-surface-700 outline-none transition placeholder:text-surface-400 focus:border-brand-green-400 focus:bg-surface-0"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="space-y-3 border-t border-surface-200 pt-6">
          {status === 'success' ? (
            <p className="rounded-2xl border border-brand-green-200 bg-brand-green-50 px-4 py-3 text-sm leading-6 text-brand-green-700">
              Your request has been sent. We will follow up shortly.
            </p>
          ) : null}

          {status === 'error' ? (
            <p className="rounded-2xl border border-brand-red-200 bg-brand-red-50 px-4 py-3 text-sm leading-6 text-brand-red-600">
              {errorMessage}
            </p>
          ) : null}

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-reading text-sm leading-6 text-surface-500">
              Required fields help us quote the service accurately. Final pricing may vary
              based on property size, condition, and service frequency.
            </p>
            <Button
              type="submit"
              className="w-full sm:w-auto"
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? 'Sending...' : 'Send Request'}
            </Button>
          </div>
        </div>
      </form>
    </Card>
  )
}

export default ContactQuoteForm
