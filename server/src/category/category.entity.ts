import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'category' }) // 생성될 테이블 이름
export class Category {
  @PrimaryGeneratedColumn() // 자동생성되며, 1씩 증가하는 PK
  id: number;

  @Column()
  title: string;
}
