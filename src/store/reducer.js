import * as home from './action-type';

let defaultVal=0
export default (count = defaultVal, action) => {
  switch (action.type) {
    case home.INCREMENT:
      return count + 1;
    case home.DECREMENT:
      return count - 1;
    case home.RESET:
      return count=defaultVal
    default:
      return count
  }
}