export const formatDate = (dateStr: string): string => {
  return new Date(dateStr).toLocaleDateString("pt-BR");
};
