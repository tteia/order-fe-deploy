<template>
    <v-container>
        <v-row class="d-flex justify-content-between mt-5">
            <v-col>
                <v-form @submit.prevent="searchProducts">
                    <v-row>
                        <v-col cols="auto">
                            <v-select v-model="searchType" :items="searchOptions" item-title="text" item-value="value">

                            </v-select>
                        </v-col>
                        <v-col>
                            <v-text-field v-model="searchValue" label="Search">

                            </v-text-field>
                        </v-col>
                        <v-col cols="auto" :style="{marginTop:'10px'}"><v-btn type="submit" style="background-color: cornflowerblue;">🔎 검색</v-btn></v-col>
                    </v-row>
                </v-form>
            </v-col>

            <v-col cols="auto" v-if="!isAdmin" :style="{marginTop:'10px'}">
                <v-btn class="mr-2" style="background-color:aliceblue;">🛒 장바구니</v-btn>
                <v-btn style="background-color:aliceblue;">🪄 주문하기</v-btn>
            </v-col>

            <v-col cols="auto" v-if="isAdmin" :style="{marginTop:'10px'}">
                <v-btn href="/product/create" style="background-color:lightgoldenrodyellow;">🖥️ 상품 등록</v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-card>
                    <v-card-title class="text-p text-center" style="background-color: aliceblue;">{{pageTitle}}</v-card-title>
                    <v-card-text style="background-color: cornsilk;">
                        <v-table>
                            <thead>
                                <tr>
                                    <th style="text-align: center;">제품 사진</th>
                                    <th style="text-align: center;">제품명</th>
                                    <th style="text-align: center;">가격</th>
                                    <th style="text-align: center;">재고 수량</th>
                                    <th v-if="!isAdmin" style="text-align: center;">주문 수량</th>
                                    <th v-if="!isAdmin" style="text-align: center;">주문 선택</th>
                                    <th v-if="isAdmin" style="text-align: center;">관리자 권한</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="p in productList" :key="p.id">
                                    <td>
                                        <v-img :src="p.imagePath" style="height: 100px; width:auto;"></v-img>
                                    </td>
                                    <td>{{p.name}}</td>
                                    <td>{{p.price}}</td>
                                    <td>{{p.stockQuantity}}</td>
                                    <td></td>
                                    <td></td>
                                    <td v-if="isAdmin">
                                        <v-btn color="secondary" @click="deleteProduct(p.id)">❌ 삭제하기</v-btn>
                                    </td>
                                </tr>
                            </tbody>
                        </v-table>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import axios from 'axios';
    export default{
        props: ['isAdmin', 'pageTitle'],
        data(){
            return{
                searchType: 'optional',
                searchOptions:[
                    {text:"✔️ 선택", value:'optional'},
                    {text:"🏷️ 상품명", value:'name'},
                    {text:"📋 카테고리", value:'category'},
                ],
                searchValue: "",
                productList: [],
                pageSize: 5,
                currentPage: 0,
                isLastPage: false,
                isLoading: false
            }
        },
        created(){ // 화면 열림과 동시에 목록이 불러와지는 created hook 함수.
            this.loadProduct();
            window.addEventListener('scroll', this.scrollPagination); // scroll 로 정해져 있음 !
        },
        methods:{
            searchProducts(){
                this.productList = [];
                this.currentPage = 0;
                this.isLastPage = false;
                this.loadProduct();
            },
            deleteProduct(productId){
                console.log(productId);
            },
            async loadProduct(){
                try{
                    if(this.isLoading || this.isLastPage) return;
                    this.isLoading = true;
                    const params = {
                        size: this.pageSize,
                        page: this.currentPage
                    }
                    // params 라는 객체 안에 추가해주기! 지금 size 랑 page 밖에 없다.
                    // params = {size:5, page:0, category:"fruits"}
                    // params = {size:5, page:0, name:"cherry"}
                    if(this.searchType === 'name'){
                        params.name = this.searchValue;
                    }
                    else if(this.searchType === 'category'){
                        params.category = this.searchValue;
                    }
                    // localhost:8080/product/list?category=fruites&size=5&page=0
                    // localhost:8080/product/list?name=cherry&size=5&page=0
                    // 위와 같이 파라미터로 전달. 우리는 백엔드 서버에서 ModelAttribute 가 생략됐을 뿐, 모델로 받고 있는 것.
                    const response = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/product/list`, {params}); // url 에 ? 달고 들어가야 됨.
                    const additionalData = response.data.result.content;
                    this.isLastPage = response.data.result.last;
                    // if(this.isLastPage)return;
                    // if(additionalData.length == 0){
                    //     this.isLastPage = true;
                    //     return
                    // }
                    this.productList = [...this.productList, ...additionalData];
                    this.currentPage++;
                    this.isLoading = false;
                }
                catch(e){
                    console.log(e);
                }
            },
            scrollPagination(){
                // 현재 화면 + 스크롤로 이동한 화면 > 전체화면 - 이동한 숫자(n) 의 조건이 성립하면 추가 데이터를 로드하겠다.
                const isBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
                if(isBottom && !this.isLastPage && !this.isLoading){
                    this.loadProduct();
                }
            }
        }
    }
</script>