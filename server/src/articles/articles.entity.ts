import { Category } from 'src/category/category.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'articles' })
export class Articles {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @ManyToOne(() => Category)
  @JoinColumn({
    name: 'category1_id',
    referencedColumnName: 'id',
    foreignKeyConstraintName: 'FK_category1',
  })
  category1: Category;

  @ManyToOne(() => Category)
  @JoinColumn({
    name: 'category2_id',
    referencedColumnName: 'id',
    foreignKeyConstraintName: 'FK_category2',
  })
  category2: Category;

  @Column()
  content: string;
}
