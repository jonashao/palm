import AV from 'leancloud-storage';


/**
 * Post object that store all data in a post page
 * attributes:
 *  - title  : string
 *  - author : string
 *  - description : string
 *  - checkList : jsonArray
 *      - header : string
 *      - description : string
 *      - content : string
 *  - like : integer
 *  - fork : integer
 *  - read : integer
 *  - comments : relationship with Comment
 *  - tags: jsonArray
 * 
 * @class PostObject
 * @extends {AV.Object}
 */
export var PostObject = AV.Object.extend('Post');


// example of saving object
var TestObject = AV.Object.extend('TestObject');
var testObject = new TestObject();
testObject.save({
    words: 'Hello World!'
}).then(function(object) {
    alert('LeanCloud Rocks!');
})


// example of saving array
var reminder1 = new Date('2015-11-11 07:10:00');
var reminder2 = new Date('2015-11-11 07:20:00');
var reminder3 = new Date('2015-11-11 07:30:00');

var reminders = [reminder1, reminder2, reminder3];

var todo = new AV.Object('Todo');
// 指定 reminders 是做一个 Date 对象数组
todo.addUnique('reminders', reminders);
todo.save().then(function(todo) {
    console.log(todo.id);
}, function(error) {
    // 异常处理
    console.error(error);
});

