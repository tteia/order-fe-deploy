<template>
    <!-- 문자열로 넘길 경우에는 변수명=, 그 외에는 :변수명= -->
    <ProductListComponent :isAdmin="false" pageTitle="📋 상품 목록"/>

</template>

<script>
import ProductListComponent from './ProductListComponent.vue';

export default{
    components:{
        ProductListComponent // 내가 만든 거 갖다 쓸 때 -> default 에 components 추가
    }
}
</script>