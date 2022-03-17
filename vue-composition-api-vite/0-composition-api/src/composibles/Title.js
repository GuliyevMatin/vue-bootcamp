import {ref,computed,} from 'vue'

export default function ()
{
    //!****************************************************************
    const title = ref("Bu bir setup baslikdir");
    
    const titleLengthMessage = computed(() => title.value.length + " uzunlugundadir");


    //!****************************************************************
    return {title,titleLengthMessage}

}