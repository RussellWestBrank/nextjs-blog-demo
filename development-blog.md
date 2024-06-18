# 页面中获取数据库数据
```js
import {createConnection} from 'typeorm';

const promise = (async function () {
  console.log('创建connection.')
  return await createConnection();
})();


export const getDatabaseConnection = async () => {
  return promise;
};
```
这是第一版代码

其中有显而易见的问题

每次修改页面，代码更新都会重新创建create，引起报错

```js
import {createConnection, getConnectionManager} from 'typeorm';

//闭包，保存这次连接
const promise = (async function () {
  const manager = getConnectionManager();
  if (!manager.has('default')) {
    return createConnection();
  } else {
    const current = manager.get('default');
    if(current.isConnected){
      return current
    }else{
      return createConnection();
    }
  }
})();


export const getDatabaseConnection = async () => {
  return promise;
};

```
这是正确的版本

思考：我们自己手写一个manager，通过闭包的形式保存，可不可行呢？

通过实践后发现，manager在每次更新会重新创建


结论：next框架，代码更新不会去重新加载node_moudules下的代码

# next.js如何利用session，实现登录态
结合next-iron-session
## 会话密码存储
使用环境变量来存储敏感信息是一个安全和推荐的做法
### 本地环境
使用 .env 文件
dotenv 是一个非常流行的库，用于从 .env 文件中加载环境变量。 .env 文件应位于项目的根目录，并设置在 .gitignore 中以避免敏感信息泄漏到版本控制系统中。

### 在生产环境中设置环境变量
1. 操作系统环境变量：在 Unix 或 Linux 系统中，可以在启动应用时设置环境变量：
2. 使用 Docker 容器：在 docker-compose.yml 文件中设置环境变量
3. 使用云服务