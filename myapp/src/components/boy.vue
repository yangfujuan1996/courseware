<template>
    <h2>{{className.className}}--{{className.sex}}</h2>

</template>

<script>
export default {
    computed: {
        className(){
            let className = this.$route.params.class;
            let sex = this.$route.params.sex;
            let classObj = {
                className:{
                    'one': '一班',
                    'two': '二班'
                },
                sex:{
                    'boy': "男生",
                    'girl': "女生"
                }                
            }
            return {
                className: classObj['className'][className],
                sex: classObj['sex'][sex]
            };
        }
    }
}
</script>

