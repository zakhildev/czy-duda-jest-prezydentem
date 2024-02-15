// Na bank da sie to zrobić lepiej, gdy to pisałem nie chciało mi się zbytnio myśleć
export default function getWordForm(input: number, type: WordType) {
  switch (type) {
    case 'month':
      switch (input) {
        case 1:
          return 'miesiąc';
        case 2:
        case 3:
        case 4:
          return 'miesiące';
        default:
          return 'miesięcy';
      }
    case 'week':
      switch (input) {
        case 1:
          return 'tydzień';
        case 2:
        case 3:
        case 4:
          return 'tygodnie';
        default:
          return 'tygodni';
      }
    case 'day':
      switch (input) {
        case 1:
          return 'dzień';
        default:
          return 'dni';
      }
    case 'hour':
      switch (input) {
        case 1:
          return 'godzinę';
        case 2:
        case 3:
        case 4:
          return 'godziny';
        default:
          return 'godzin';
      }
    case 'minute':
      switch (input) {
        case 1:
          return 'minutę';
        case 2:
        case 3:
        case 4:
          return 'minuty';
        default:
          return 'minut';
      }
    case 'second':
      switch (input) {
        case 1:
          return 'sekundę';
        case 2:
        case 3:
        case 4:
          return 'sekundy';
        default:
          return 'sekund';
      }
  }
}

const wordTypes = {
  month: 'month',
  week: 'week',
  day: 'day',
  hour: 'hour',
  minute: 'minute',
  second: 'second',
} as const;

type WordType = keyof typeof wordTypes;
