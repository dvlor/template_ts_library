import { add } from './service';

export function hello(){
  return 'hello' + add (1, 2);
}

console.log(hello());