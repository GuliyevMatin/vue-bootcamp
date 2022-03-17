import {ref,watchEffect} from 'vue'

export default function ()
{
    //!****************************************************************
     // WATCH EFFECT
     const seacrhText = ref("");
     const isTyping = ref(false);
     watchEffect((onValidate) => {
       if (seacrhText.value.length > 0) {
         isTyping.value = true;
       }
       const typing = setTimeout(() => {
         isTyping.value = false;
       }, 1500);
 
       onValidate(() => clearTimeout(typing));
     });
    //!****************************************************************
    return {seacrhText,isTyping}

}