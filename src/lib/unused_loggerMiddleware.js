const loggerMiddleware = (store) => (next) => (action) => {
  // prior state -> action info -> new state
  console.group(action && action.type); // 액션 타입으로 log를 그룹화 함
  console.log("prior state", store.getState());
  console.log("action", action);
  next(action); // 다음 미들웨어 혹은 리듀서에게 전달
  console.log("new state", store.getState());
  console.groupEnd();
};

export default loggerMiddleware;

// const loggerMiddleware = function loggerMiddleware(store){
//   return function(next){
//     return function(action){
//       basic structure of middle ware
//     }
//   }
// }
