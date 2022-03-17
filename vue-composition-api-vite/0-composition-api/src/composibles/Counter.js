import {ref,computed,watch} from 'vue'

export default function ()
{
    //!****************************************************************
    const counter = ref(0);
    const oddOrEven = computed(() => (counter.value % 2 == 0 ? "Cut" : "tek"));
    watch([counter, oddOrEven], ([newCounter, newOdd], [oldCounter, oldOdd]) => {
      console.log(newCounter + "=>" + oldCounter);
    });
    //!****************************************************************
    return {counter,oddOrEven}

}