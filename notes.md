### 练习内容：

1.父传子：
父组件向子组件传值，
需要在父组件里先 引入 注册 并且使用注册好的子组件，需要传的值在data return里保存或定义
子组件内 使用props进行接收，props里是所传值的验证类型.

2.子传父：
子组件向父组件传值，需要传的值要在data里保存或定义，
在方法里 通过$emit将想要传递的值以函数的形式传出 再在父组件接收这个函数 它会带一个返回值 这个返回值就是我们需要从子组件传的值
this.$emit(arg1,arg2) arg1:方法名字，arg2:要传出的值
父组件里接收的方法名要和子组件里定义的命名一致.

3.非父子组件传参：
主要使用两个方法
this.bus.$emit 传出
this.bus.$on 接收
bus是一个中间值
在第二个子组件里面通过beforeCreate生命周期来获得传过来的值，这时候需要用this.bus.$on来接收，
第一个参数是this.bus.$emit定义的方法名，第二个参数是一个方法，此方法带一个返回参数。这里用了箭头函数.

