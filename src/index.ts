import "reflect-metadata";
import {createConnection} from "typeorm";
import {Post} from "./entity/Post";

createConnection().then(async connection => {
  const posts = await connection.manager.find(Post);
  console.log(posts);
  const p = new Post();
  p.title = "Post 1";
  p.content = '我的第一篇文章'
  await connection.manager.save(p);

  const post1 = await connection.manager.findOne(Post);
  console.log(post1);

  connection.close()
}).catch(error => console.log(error));