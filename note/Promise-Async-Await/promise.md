# Promise

## 01. Promise Object
```javascript
let promise = new Promise((resolve, reject) => {
    // Call this executor
    // Need to call resolve or reject callback func in this body
})
```
<br>

## 02. State change of promise object

new Promise( state: pending, result: undefined )<br>
=> resolve(value)<br>
=> (state: fulfilled, result: value)

---

new Promise( state: pending, result: undefined )<br>
=> reject(err: Error)<br>
=> (state: rejected, result: err)
<br><br>

## 03. Resolve & Reject
- Promise 객체는 executor에서 resolve나 reject를 반드시 call해야 하며, 이때 변경된 상태는 더 이상 변하지 않는다.
- 즉, 한번 호출된 이후 resolve나 reject가 call 되어도 상태 변화가 없다.
<br><br>

## 04. then, catch, finally
- then
  ```javascript
  let promise = new Promise((resolve, reject) => { ... })
  
  // then의 첫번재 인자는 promise가 fulfilled 일 때,
  // 두번째 인자는 rejected 일 때 실행되며,
  // 인자를 하나만 넘겨줄 수 있다.
  promise.then(console.log, alert)
  ```

- catch
  ```javascript
  let promise = new Promise((resolve, reject) => {
      setTimeout(() => { reject(new Error('에러 발생')) }, 1000);
  });
  // .catch(func)는 .then(null, func)와 동일하게 작동
  promise.catch(alert);
  ```

- finally
  ```javascript
  // finally(func)는 .then(func, func)와 유사하지만, promise state를 알 수 없다.
  new Promise((resolve, reject) => { ... })
  .finally(() => alert("promise가 준비되었습니다."))
  .then((result) => console.log(result));
  ```