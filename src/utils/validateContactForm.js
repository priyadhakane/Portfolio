/**
 * Pure client-side validation for the contact form.
 * Returns an object of field -> error message; empty object means valid.
 */
export default function validateContactForm(values) {
  const errors = {};

  if (!values.name?.trim()) {
    errors.name = 'Please enter your name.';
  }

  if (!values.email?.trim()) {
    errors.email = 'Please enter your email.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!values.subject?.trim()) {
    errors.subject = 'Please enter a subject.';
  }

  if ((values.message ?? '').trim().length < 10) {
    errors.message = 'Message should be at least 10 characters.';
  }

  return errors;
}
