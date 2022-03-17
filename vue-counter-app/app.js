const app = Vue.createApp({
data(){
    return {
         counter:0   
    }
},
methods:{
   
},
watch: {
    counter(newValue, oldValue){
        console.log(oldValue, "=>",newValue);
    }
}
}).mount(".container")