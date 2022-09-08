import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Book, Prisma } from '@prisma/client';

@Injectable()
export class BookService {
  constructor(private prisma: PrismaService) {}

  private readonly logger = new Logger(BookService.name);

  async getAllBooks(): Promise<Book[]> {
    try {
      this.logger.log('Retrieving all books...');
      return this.prisma.book.findMany();
    } catch (error) {
      this.logger.error('There was an error while retrieving all books', error);
      throw new BadRequestException('There was an error retrieving books');
    }
  }

  async getBookById(id: string): Promise<Book> {
    try {
      this.logger.log(`Retrieving book by id ${id}`);
      return this.prisma.book.findFirst({ where: { id } });
    } catch (error) {
      this.logger.error(
        `There was an error retrieving book by id ${id}`,
        error,
      );
      throw new BadRequestException(
        'There was an error retrieving the book by id',
      );
    }
  }

  async addBook(data: Prisma.BookCreateInput): Promise<Book> {
    try {
      this.logger.log('Adding a book...');
      return this.prisma.book.create({ data });
    } catch (error) {
      this.logger.error('There was an error adding the book', error);
      throw new BadRequestException('There was an error adding the book');
    }
  }

  async editBook(id: string, book: BookDTO): Promise<Book> {
    try {
      this.logger.log(`Editing book ${id}`);
      return this.prisma.book.update({ where: { id }, data: book });
    } catch (error) {
      this.logger.error(`There was an error editing book ${id}`, error);
      throw new BadRequestException('There was an error editing the book');
    }
  }

  async deleteBook(id: string): Promise<Book> {
    try {
      this.logger.log(`Deleting book ${id}`);
      return this.prisma.book.delete({ where: { id } });
    } catch (error) {
      this.logger.error(`There was an error deleting the book ${id}`, error);
      throw new BadRequestException('There was an error deleting the book');
    }
  }
}
