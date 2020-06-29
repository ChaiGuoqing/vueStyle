

### install dependency
npm install


```
# 启动服务
npm run dev
```

## 发布

```
# 构建生产环境
npm run build:prod
```
### 浏览器访问
 https://chaiguoqing.github.io/vueStyle/dist/#

### 克隆项目
git clone https://github.com/ChaiGuoqing/vueStyle.git

### 父组件调用子组件方法

<!--父组件-->
```
<template>
  <div class="">
    <div>
      <el-row>
        <el-button type="primary" @click="showA">A弹框</el-button>
        <el-button type="success" @click="showB">B弹框</el-button>
      </el-row>
    </div>
    <childA ref="childA" />
    <childB ref="childB" />
  </div>
</template>
<script>
  export default {
    methods: {
      showA() {
        this.$refs.childA.showDialog()
      },
      showB() {
        this.$refs.childB.showDialog()
      }
    }
  }
</script>

```

<!--子组件-->

```
<script>
  export default {
    methods: {
      showDialog() {
        this.dialogA = !this.dialogA
      }
    }
  }
</script>

```

### 子组件调用父组件方法

<!--子组件-->

```
<script>
  export default {
    methods: {
      showDialog() {
        this.$parent.showB()
      }
    }
  }
</script>

```

### 兄弟组件间通讯

```
##父传子 子传父方式 
  brotherA.vue 
  brotherB.vue

##建中转站方式
  brotherC.vue
  brotherD.vue

##vuex方式
  brotherE.vue
  brotherF.vue  

```
