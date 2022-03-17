const app= Vue.createApp({

    data(){
        return{
            search:"",
            itemlist:["alma","banan","ciyelek","gilas"]
        }
    },

    computed:{
        fildered(){
            return this.itemlist.filter(i=>i.includes(this.search));
        }
    }

}).mount("#app")