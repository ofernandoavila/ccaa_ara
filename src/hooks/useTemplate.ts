import { useContext } from 'react';
import { TemplateContext } from '../contexts/TemplateContext';

export function useTemplate() {
  const value = useContext(TemplateContext)

  return value;
}