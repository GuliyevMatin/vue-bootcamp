const app = Vue.createApp({
data(){
    return{
        counter:0,
        
    }
},
computed:{
    bgColor(){
        if(this.counter == 0){
            return "white"
        }
        else if(this.counter < 0){
            return "red"
        }
        else
        return "blue"
    }
}
}).mount("#app")