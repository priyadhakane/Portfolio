import { describe, it, expect } from 'vitest';
import validateContactForm from './validateContactForm.js';

const valid = {
  name: 'Recruiter',
  email: 'recruiter@company.com',
  subject: 'Interview opportunity',
  message: 'We would like to schedule a call with you.',
};

describe('validateContactForm', () => {
  it('returns no errors for a fully valid submission', () => {
    expect(validateContactForm(valid)).toEqual({});
  });

  it('flags every missing required field', () => {
    const errors = validateContactForm({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    expect(Object.keys(errors).sort()).toEqual([
      'email',
      'message',
      'name',
      'subject',
    ]);
  });

  it('rejects a malformed email address', () => {
    const errors = validateContactForm({ ...valid, email: 'not-an-email' });
    expect(errors.email).toBeDefined();
    expect(errors.name).toBeUndefined();
  });

  it('requires a message of at least 10 characters', () => {
    expect(validateContactForm({ ...valid, message: 'short' }).message).toBeDefined();
  });

  it('treats whitespace-only values as empty', () => {
    const errors = validateContactForm({ ...valid, name: '   ' });
    expect(errors.name).toBeDefined();
  });
});
