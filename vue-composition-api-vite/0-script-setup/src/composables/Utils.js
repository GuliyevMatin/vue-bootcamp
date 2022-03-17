import {ref } from "vue"

export default function(){
    const title = ref("Metin")
    const counter = ref(0)
    
    const inc = ()=>{
      counter.value++
    }
    const alertMsg = (info)=>{
      alert(info)
    }

    return {title,counter,inc,alertMsg}
}
