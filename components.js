
var myComponent = Vue.component('my-component',{
    data(){
        return {
            title: '标题',
            content: '内容',
        }
    },
    template: 
    `<div>
        <h2>{{title}}</h2>
        <h3>作者：匿名  发布时间： 2019年6月9日</h3>
        <p>{{content}}</p>
    </div>`,
    props: [
        "title",
        "content",
        "key"
        ]
})

