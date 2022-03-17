<template>
  <section class="bg-gray-900 w-1/3 mx-auto mt-10 p-2 px-5 rounded-md shadow-2xl">
    <!-- FAtura Bilgileri -->
    <HeadingText title="Fatura Bilgileri" />
    <!-- Contact Section -->
    <ContactSection :contact="state.contactInfo"/>
    <!-- iTemlists -->
    <ItemLists :items="state.items" :addInvoiceItem="addInvoiceItem" />
    <!-- Summary -->
    <Summary :items="state.items"/>

    <hr class="bg-gradient-to-r h-[1px] border-none from-gray-700 mt-5" />
    <div class="actionbar text-right my-5">
      <button class="purple-button">Kaydet</button>
    </div>
  </section>
</template>
<script setup>
import Summary from "./Summary.vue";
import ItemLists from "./ItemLists.vue";
import ContactSection from "./Contactsection.vue";
import {reactive,provide} from "vue";

const state = reactive({
    contactInfo:{
        client_name:null,
        email:null,
        city:null,
        country:null,
        zip:null,
    
    },
    items:[]
})
const addInvoiceItem = ()=>{
    state.items.push({
        id: new Date().getTime(),
        name:null,
        count:null,
        price:0.0,
        totalPrice:0.0
    })
}

const deleteInvoiceItem = (invoiceItem) =>{
    state.items = state.items.filter(i => i.id != invoiceItem.id)
}

provide("deleteInvoiceItem",deleteInvoiceItem)


</script>

