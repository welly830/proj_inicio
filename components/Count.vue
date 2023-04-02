<template >
    <div class="max-w-sm mt-4 ml-4 p-6 bg-white border border-gray-200 rounded-lg shadow bg-gradient-to-br from-green-200 to-blue-200">
        <p class="text-lg font-semibold text-center">{{ counterStore.count }}</p>
        <br>
        <div class="text-center">            
            <button  @click="counterStore.increment" class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl  focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Clique</button>
        </div>
        
    </div>
</template>
<script setup>
import { useCounterStore } from '@/stores/counter';
        const counterStore = useCounterStore();
</script>
<style >
    
</style>