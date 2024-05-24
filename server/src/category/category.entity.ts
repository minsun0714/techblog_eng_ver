import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';

@Entity({ name: 'category' }) // 생성될 테이블 이름
export class Category {
  @PrimaryGeneratedColumn() // 자동생성되며, 1씩 증가하는 PK
  id: number;

  @Column()
  title: string;
  // 부모 엔티티가 여러 자식 엔티티를 참조

  @OneToMany(() => Category, (category) => category.parent)
  children: Category[];

  // 자식 엔티티가 부모 엔티티를 참조
  @ManyToOne(() => Category, (category) => category.children) // 부모의 children 필드로 자식에 접근 가능
  @JoinColumn({ name: 'parentId' })
  parent: Category | null;

  @Column({ nullable: true })
  parentId: number | null;
}
