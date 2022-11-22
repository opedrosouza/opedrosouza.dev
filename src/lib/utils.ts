// a function to calculate reading time
export const timeToRead = (text: string) => {
  const words = text.split(' ')
  const minutes = Math.ceil(words.length / 200)
  return `${minutes} min de leitura`
}

export const toFormattedDate = (date: string) => {
  return new Date(date).toLocaleDateString('pt-BR', {
    year: 'numeric', month: 'long', day: 'numeric'
  });
}
