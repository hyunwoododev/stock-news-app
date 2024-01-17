import { AbstractDocument } from '@app/common/database/abstract.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ versionKey: false })
export class News extends AbstractDocument {
  @Prop({ required: true })
  url: string;
  @Prop({ required: false })
  description: string;
}

export const NewsSchema = SchemaFactory.createForClass(News);
