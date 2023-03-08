export interface Token {
  hits: Hits;
}

interface Hits {
  hits: Hit[];
}

interface Hit {
  _source: Source;
}

interface Source {
  symbol: string;
  price: string;
  id: number;
  timestamp: number;
}