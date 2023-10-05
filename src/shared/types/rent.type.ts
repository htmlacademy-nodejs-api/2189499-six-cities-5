import { HouseType } from "./house.type.js"
import { Comfort } from "./comfort.type.js"
import { User } from "./users.type.js"

export type Rent = {
  name: string,
  description: string,
  date: Date,
  town: string,
  mainImage: string,
  images: string[],
  isPremium: boolean,
  isFavorite: boolean,
  rating: number,
  houseType: HouseType,
  roomCount: number,
  guestCount: number,
  price: number,
  comfort: Comfort[],
  author: User,
  commentCount: number,
  latitude: number;
  longitude: number;
}