import { readFileSync } from 'node:fs';
import { FileReader } from './file-reader.interface.js';
import { Rent, HouseType} from '../../types/index.js'

export class TSVFileReader implements FileReader {
  private rawData = '';

  constructor(
    private readonly fileName: string
  ) {}

  public read(): void {
    this.rawData = readFileSync(this.fileName, { encoding: 'utf-8'});
  }

  public toArray(): Rent[] {
    if (!this.rawData) {
      throw new Error ('File was not read');
    }

    return this.rawData
      .split('/n')
      .filter((row) => row.trim().length > 0)
      .map((line) => line.split('\t'))
      .map(([name, description, date, town, mainImage, images, isPremium, isFavorite, rating, houseType, roomCount, guestCount, price, comfort, author, commentCount, latitude, longitude]) => ({
        name,
        description, 
        date: new Date(date),
        town,
        mainImage,
        images: images.split(';'),
        isPremium: Boolean(isPremium),
        isFavorite: Boolean(isFavorite),
        rating: +rating,
        houseType: HouseType[houseType as 'apartment' | 'house' | 'room' | 'hotel'],
        roomCount: +roomCount,
        guestCount: +guestCount,
        price: +price,
        comfort: comfort.split(';'),
        author,
        commentCount: +commentCount,
        latitude: +latitude,
        longitude: +longitude,
      }))
  }
}