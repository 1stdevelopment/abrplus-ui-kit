import { createFormContext } from 'react-hook-form-context';

export interface SearchHeaderValues {
  input?: string;
  select1?: string;
  select2?: string;
}

export const SearchHeaderForm = createFormContext<SearchHeaderValues>({});
