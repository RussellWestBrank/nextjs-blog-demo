import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
  } from 'typeorm';
  import {User} from './User';
  import {Comment} from './Comment';
  
  @Entity()
  export class Post {
    @PrimaryGeneratedColumn('increment')
    id: number;
    @Column('varchar')
    title: string;
    @Column('text')
    content: string;
    @CreateDateColumn('time')
    createdAt: Date;
    @UpdateDateColumn('time')
    updateAt: Date;
    @ManyToOne(type => User, user => user.posts)
    author: User;
    @OneToMany(type => Comment, comment => comment.post)
    comments: Comment[];
  }