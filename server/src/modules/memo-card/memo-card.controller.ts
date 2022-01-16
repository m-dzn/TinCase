import { Controller, Post } from '@nestjs/common';
import { MemoCardService } from './memo-card.service';

@Controller('memos')
export class MemoCardController {
  constructor(private readonly memoService: MemoCardService) {}

  // @Post()
  // public async create();
}
