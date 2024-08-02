<template>
    <v-app-bar app style="background-color: aliceblue;">
        nav-bar
    </v-app-bar>
    <!-- v-container, v-row, v-col -->
    <v-container>
        <v-row>
            <!-- col 은 전체 사이즈가 12 이므로 둘이 나눠 가진다. 더 크게 잡으면 아래로 밀림 ! -->
            <v-col cols="8" style="background-color:cornflowerblue;">
                123
            </v-col>
            <v-col cols="4" style="background-color:bisque">
                123
            </v-col>
        </v-row>
        <v-row>
            <!-- v-card : 회원 가입, 로그인할 때 자주 쓰임 -->
            <v-card>
                <!-- v-card-title (제목), card-text (내용) -->
                <v-card-title style="background-color: aliceblue;">
                    👋🏻 안내 문구 _ 카드 타이틀
                </v-card-title>
                <v-card-text>
                    <br/>
                    🫠 반 갑 습 니 다 _ 카드 텍스트
                </v-card-text>
            </v-card>
        </v-row>
        <v-row>
            <v-simple-table>
                <thead>
                    <tr>
                        <th>이름</th>
                        <th>이메일</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>아로롱</td>
                        <td>test@test.com</td>
                    </tr>
                    <tr>
                        <td>예로롱</td>
                        <td>test2@test.com</td>
                    </tr>
                </tbody>
            </v-simple-table>
        </v-row>
    </v-container>
    <v-card>
                <v-card-title style="background-color: aliceblue;">
                    🙇🏻‍♀️ 회원 가입
                </v-card-title>
                <v-card-text>
                    <v-form>
                        <v-text-field label="name" type="name">
                            
                        </v-text-field>
                        <v-text-field label="email" type="email">

                        </v-text-field>
                        <v-text-field label="password" type="password">

                        </v-text-field>
                        <v-btn style="background-color: aliceblue;">✔️ 제 출 하 기</v-btn>
                    </v-form>
                </v-card-text>            
            </v-card>
            <br/>
            <v-btn @click.stop="cancel()"> 취소 </v-btn>
            <!-- 모달창을 위한 v-dialog(모달창을 다이얼로그 라고도 부른다.) -->
            <v-dialog v-model="dialog" max-width="400px">
                <v-card>
                    <v-card-title>
                        진 짜 취 소 하 실 건 가 여 ?
                    </v-card-title>
                <v-card-actions>
                    <v-btn style="background-color: aliceblue;">확인</v-btn>
                    <v-btn style="background-color: lightgray;" @click="dialog=false">취소</v-btn>
                </v-card-actions>
            </v-card>
            </v-dialog>
            <br />
            <br />
            <!-- reload 방식 : 화면 전체 리로드 / SPA 방식 : 전체 리로드가 아님 -->
            <!-- 리로드 방식(href) : created 함수가 호출됨. / SPA 는 안됨 ! -->
            <v-btn href="/practice/modeling">일반 라우팅</v-btn>
            <!-- SinglePageApplication -->
            <v-btn :to="{path: '/practice/modeling'}">SPA 라우팅 (router 기능 활용)</v-btn>
            <v-btn :to="{name: 'ModelingComponent'}">SPA 라우팅 (name 호출)</v-btn>
</template>

<script>
    export default{
        // 변수 설정 : data() 함수를 통해 변수 세팅
        data(){
            return{
                dialog:false,
            }
        },
        methods: {
            cancel(){
                this.dialog = true;
            }
        }
    }
</script>