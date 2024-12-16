export interface Beer {
  id: string;
  name: string
  description: string
  type: string
  year: number
  brewery: string
  abv: number

  reviews: {
    rating: number;
    comment: string;
  }[];
}
