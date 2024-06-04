# 初始化代码
## 创建数据库
```
mkdir blog-data
docker run -v "$PWD/blog-data":/var/lib/postgresql/data -p 5432:5432 -e POSTGRES_USER=blog -e POSTGRES_HOST_AUTH_METHOD=trust -d postgres:12.2

或者旧版 Windows Docker 客户端运行下面的代码

docker run -v "blog-data":/var/lib/postgresql/data -p 5432:5432 -e POSTGRES_USER=blog -e POSTGRES_HOST_AUTH_METHOD=trust -d postgres:12.2
```


## 清空之前的开发环境
```
docker ps
docker kill 容器id
docker rm 容器id
rm -rf blog-data

或

docker container prune 
docker volume rm blog-data
```

## 创建数据库
```
docker exec -it <id> bash
psql -U blog
CREATE DATABASE blog_development ENCODING 'UTF8' LC_COLLATE 'en_US.utf8' LC_CTYPE 'en_US.utf8';
CREATE DATABASE blog_prodution ENCODING 'UTF8' LC_COLLATE 'en_US.utf8' LC_CTYPE 'en_US.utf8';
CREATE DATABASE blog_test ENCODING 'UTF8' LC_COLLATE 'en_US.utf8' LC_CTYPE 'en_US.utf8';
```

## 查看数据库
docker exec -it <id> bash
psql -U blog
\l 用于list database
\c 用于connect database
\dt 用于查看数据库中所有的表

## 数据表
首先修改 ormconfig.json 中的 host，然后运行
```
yarn migration:run
node dist/seed.js
```

# 开发
```
yarn dev
or
npm run dev
```

# 部署
yarn build

yarn start
