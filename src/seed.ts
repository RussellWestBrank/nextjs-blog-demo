import "reflect-metadata";
import {createConnection} from "typeorm";
import {Post} from "./entity/Post";

createConnection().then(async connection => {
  const posts = await connection.manager.find(Post);
  if(posts.length === 0) {
    // 如果没有文章，则创建一些示例文章
    await connection.manager.save([
        new Post('Post 1', 'This is the content of Post 1'),
        new Post('Post 2', 'This is the content of Post 2'),
        new Post('Post 3', 'This is the content of Post 3'),
        new Post('Post 4', 'This is the content of Post 4'),
        new Post('Post 5', 'This is the content of Post 5'),
        new Post('Post 6', 'This is the content of Post 6'),
        new Post('Post 7', 'This is the content of Post 7'),
        new Post('Post 8', 'This is the content of Post 8'),
        new Post('Post 9', 'This is the content of Post 9'),
        new Post('Post 10', 'This is the content of Post 10'),
    ]);
  }
  connection.close()
}).catch(error => console.log(error));