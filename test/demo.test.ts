import {hello} from '../src/main';

describe('main', function () {
  test('hello', function(){
    expect(hello()).toEqual("hello3");
  })
})