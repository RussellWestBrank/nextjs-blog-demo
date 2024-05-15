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