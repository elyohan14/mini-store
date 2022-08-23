import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { ObjectId } from 'mongodb';
@Injectable()
export class ParseObjectIdPipe implements PipeTransform<string> {
  transform(value: string, metadata: ArgumentMetadata): string {
    if (!ObjectId.isValid(value)) {
      throw new BadRequestException('Invalid id');
    }
    if (String(new ObjectId(value)) === value) return value;
  }
}
