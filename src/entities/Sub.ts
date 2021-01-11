import {
  Column,
  Entity as TOEntity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import Post from "./Post";
import Entity from "./shared/Entity";
import User from "./User";

@TOEntity("subs")
export default class Sub extends Entity {
  constructor(sub: Partial<Sub>) {
    super();
    Object.assign(this, sub);
  }

  @Index()
  @Column({ unique: true })
  name: string;

  @Column()
  title: string;

  @Column({ nullable: true, type: "text" })
  description: string;

  @Column({ nullable: true, name: "image_urn" })
  imageUrn: string;

  @Column({ nullable: true, name: "banner_urn" })
  bannerUrn: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: "username", referencedColumnName: "username" })
  user: User;

  @OneToMany(() => Post, (post) => post.sub)
  posts: Post[];
}