const app = Vue.createApp({


    data(){
        return {
            border:false,
            red:false,
            green:false,
            yellow:false,
        }
    },
    computed:{
            boxClasses(){
                return {border:this.border , red:this.red,yellow:this.yellow,green:this.green}
            }
    }

}).mount("#app")