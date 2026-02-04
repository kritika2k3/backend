 const path = require('path');

 const result = path.basename('/users/kriti/file.txt');
 console.log(result);

 console.log(path.delimeter);

 console.log(path.dirname('/users/kriti/file.txt'));   /**  folder aur directoery name of path dega **/

 console.log(path.extname('/users/kriti/file.txt'));


 path.format({
   dir: 'C:\\path\\dir',
   base: 'file.txt',
 });                     // Returns: 'C:\\path\\dir\\file.txt'

 console.log(path.matchesGlob('/foo/bar', '/foo/*')); // true
 console.log(path.matchesGlob('/foo/bar*', 'foo/bird')); // false


 console.log(path.isAbsolute('//server'));    // true console.log(path.isAbsolute('.'));           // false
 path.isAbsolute('/foo/bar');   // true
 path.isAbsolute('/baz/..');    // true
 path.isAbsolute('/baz/../..'); // true
 path.isAbsolute('qux/');       // false
 path.isAbsolute('.');          // false**/



console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux',''));


console.log(path.normalize('/foo/bar//baz/asdf/quux/..'));


console.log(path.parse('C:\\path\\dir\\file.txt'));


console.log(path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb'));
