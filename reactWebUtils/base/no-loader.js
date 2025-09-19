module.exports = function (content) {
  //console.log(' ai am here :' + content);
  console.log('no-loadinf components');
  this.cacheable && this.cacheable();
  this.value = content;
  return 'export default {} as any';
};
module.exports.seperable = true;
