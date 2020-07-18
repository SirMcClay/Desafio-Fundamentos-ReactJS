import { parseISO } from 'date-fns';

const formatDate = (value: Date): string => {
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  };
  return Intl.DateTimeFormat('pt-BR', options).format(parseISO(String(value)));
};

export default formatDate;
