import { Category } from 'src/category/category.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'articles' })
export class Articles {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @ManyToOne(() => Articles)
  @Column()
  category1: Category;

  @ManyToOne(() => Articles)
  @Column()
  category2: Category;

  @Column()
  content: string;
}
