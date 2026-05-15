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

  findAll() {
    return this.blogs.find();
  }

  findOne(id: number) {
    return this.blogs.findOne({ where: { id } });
  }

  update(id: number, updateBlogDto: UpdateBlogDto) {
    throw new Error('Method not implemented.');
    // return this.blogs.update(id, updateBlogDto);
  }

  remove(id: number) {
    return this.blogs.delete(id);
  }
}
