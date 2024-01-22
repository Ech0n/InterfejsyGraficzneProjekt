<script setup>
import { useCartStore } from '@/store.js'
import {buyItems} from '@/DatabaseMock.js';
import {ref} from 'vue'
let timer = ref(6)

async function buy()
{
    const cartStore = useCartStore()
    await buyItems(sessionStorage.getItem("userId"),cartStore.getCourses,cartStore.getTutorings)
    cartStore.buy()
    window.location.href = '/'
}

function wait()
{
    if (timer.value == 1)
    {
        buy()
    }
    timer.value -=1
    setTimeout(wait, 1000);
}
wait()

</script>

<template>
    <div class ="container d-flex align-items-center justify-content-center" style="min-height: 100vh;">

        <h3>
            Przekierowanie do zewnętrznej strony płatności nastąpi za {{timer}} sek...
        </h3>

    </div>
</template>