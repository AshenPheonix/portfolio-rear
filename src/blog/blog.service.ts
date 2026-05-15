import { Injectable } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Blog } from './entities/blog.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BlogService {
  constructor(
    @InjectRepository(Blog) 
    private blogs: Repository<Blog>
  ) {}

  create(createBlogDto: CreateBlogDto) {
    throw new Error('Method not implemented.');
  }

  async findAll() {
    return await this.blogs.find();
  }

  async findOne(id: number) {
    return await this.blogs.findOne({ where: { id } });
  }

  async update(id: number, updateBlogDto: UpdateBlogDto) {
    await this.blogs.update(id, updateBlogDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.blogs.delete(id);
  }
}
