import { HouseType } from "./house.type.js";

export type MockServerData = {
  name: string[],
  description: string[],
  date: Date[],
  town: string[],
  mainImage: string[],
  images: string[],
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
