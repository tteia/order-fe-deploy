// 어딘가의 공간에 count 값을 전역적으로 관리하는 다른 공간이 있다 . . . .
// 상태(변수)를 관리하는 공간이 있는 것 !

function initState(){
    return{
        count: 0,
        message: ""
    }
}


const practice = {
    // state : 상태를 의미하는 객체로서 initState 를 통해 상태를 초기화한다.
    state: initState,

    // mutations : 상태를 변경하기 위한 함수들의 집합.
    // 직접 호출되기 보다는, actions 를 통해 mutation 이 호출된다.
    // 그 이유는 여러 mutation 을 연속적으로 호출하는 등의 경우가 있을 수 있기 때문.
    mutations:{
        increment(state){
            state.count++;
        },
        updateMessage(state, newMessage){
            state.message = newMessage;
        }
    },
    actions:{
        // 아래와 같이 actions 의 함수를 통해 mutation 의 함수를 호출한다.
        // 그러면 결국 component 에서는 actions 의 함수를 호출 !
        incrementCount(context){
            context.commit('increment');
        },
        updateMessage(context, newMessage){
            context.commit('updateMessage', newMessage)
        }
    },
    // 상태를 get 하기 위한 함수들의 집합.
    getters:{
        getCount: state => state.count,
        getUpdateMessage: state => state.message
    }

}

export default practice;