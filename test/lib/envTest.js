import '../globalTest';
import env from '../../src/lib/env';

describe('@Env',()=>{
  it('should be a function returning and object',()=>{
    assert.typeOf(env,'Function','env should export a function');
    assert.typeOf(env(),'Object','env should export an object');
  });

  it('should have a name ',()=>{
    assert.typeOf(env().name,'String','env().name should be a string');
  });

  it('should have name default to \'production\'',()=>{
    assert.equal(env().name,'production','env().name should be a production by default');
  });

  it('should set the value of name to process.env.NODE_ENV if a value exits',()=>{
    process.env.NODE_ENV = 'development';
    assert.equal(env().name,'development','env().name should be a development');

    process.env.NODE_ENV = 'production';
    assert.equal(env().name,'production','env().name should be a production');
  });


});
