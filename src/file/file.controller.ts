import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileService } from './file.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import * as multer from 'multer';
@Controller('file')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Post('audio/upload')
  @UseInterceptors(
    FileInterceptor('audio', {
      // form 태그에 있는 name 속성값이 audio인 파일을 업로드합니다.
      storage: multer.memoryStorage(),
    }),
  )
  uploadAudio(@UploadedFile() file: Express.Multer.File) {
    return this.fileService.uploadFile(file);
  }
  @Post('image/upload')
  @UseInterceptors(
    FileInterceptor('image', {
      // form 태그에 있는 name 속성값이 image인 파일을 업로드합니다.
      storage: multer.memoryStorage(),
    }),
  )
  uploadImage(@UploadedFile() file: Express.Multer.File) {
    return this.fileService.uploadFile(file);
  }
}
