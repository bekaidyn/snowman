import stringify from 'csv-stringify';
import { Readable } from 'stream';

import { FileResponseFormat, JSONFileResponse } from '../server/types';

export type FileResponse<
  Format extends FileResponseFormat = FileResponseFormat
> = Format extends FileResponseFormat.Csv ? Readable : JSONFileResponse;

const toFileResponseFormat: {
  [Format in FileResponseFormat]: (
    response: JSONFileResponse
  ) => FileResponse<Format>;
} = {
  [FileResponseFormat.Csv]: ({ data, header }) =>
    stringify([header, ...data], {
      delimiter: ',',
      quote: '"',
      escape: "'",
    }),
  [FileResponseFormat.Json]: (response) => response,
};

export function convertFileResponse<Format extends FileResponseFormat>(
  response: JSONFileResponse,
  targetFormat?: Format
): FileResponse<Format> {
  return toFileResponseFormat[targetFormat ?? FileResponseFormat.Json](
    response
  ) as FileResponse<Format>;
}
