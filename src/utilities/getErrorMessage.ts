import { ErrorLike, InternalRequestError, i18n } from '@configs';

export function getErrorMessage(error?: unknown | false | null): string {
  if (!error) {
    return '';
  }

  // ✅ InternalRequestError (using your static guard)
  if (InternalRequestError.isRequestError(error)) {
    return error.message || i18n.t('common.error.errorOccurred');
  }

  // ✅ string error
  if (typeof error === 'string') {
    return error;
  }

  // ✅ native Error or error-like object
  if (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    typeof (error as ErrorLike).message === 'string'
  ) {
    return (error as ErrorLike).message!;
  }

  return i18n.t('common.error.errorOccurred');
}
