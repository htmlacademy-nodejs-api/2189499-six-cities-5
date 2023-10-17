import { TSVFileReader } from '../../shared/types/index.js';
import { Command } from './command.interface.js';
import { createRent } from '../../shared/types/libs/file-reader/offer.js';
import {getErrorMessage} from '../../shared/types/helpers/common.js';

export class ImportCommand implements Command{
  public getName(): string {
    return '--import';
  }

  private onImportedLine(line: string) {
    const offer = createRent(line);
    console.info(offer);
  }

  private onCompleteImport(count: number) {
    console.info(`${count} rows imported.`);
  }

  public async execute(...parameters: string[]): Promise<void> {
    const [fileName] = parameters;
    const fileReader = new TSVFileReader(fileName.trim());

    fileReader.on('line', this.onImportedLine);
    fileReader.on('end', this.onCompleteImport);

    try {
      await fileReader.read();
    } catch(err) {
      console.error(`Can't import data from file ${fileName}`);
      console.error(getErrorMessage(err));
    }
  }
}
