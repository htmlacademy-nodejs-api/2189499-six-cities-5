import { HouseType } from "./house.type.js";
// import { City } from "./city.enum.js";
export type MockServerData = {
  name: string[],
  description: string[],
  date: Date[],
  city: string[],
  mainImage: string[],
  images: string[][],
  isPremium: boolean[],
  isFavorite: boolean[],
  rating: number[],
  houseType: HouseType[],
  roomCount: number[],
  guestCount: number[],
  price: number[],
  comfort: string[],
  author: string[],
  commentCount: number[],
  latitude: number[];
  longitude: number[];
};
