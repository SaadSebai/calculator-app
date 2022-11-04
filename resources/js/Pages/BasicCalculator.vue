<script setup>
import { ref } from 'vue';
import Layout from '../Shared/Layout.vue';
import { useBasicOperation } from '../composables/useBasicOperation';

const param_1 = ref('');
const param_2 = ref('');
const operator = ref('');

let { addition, subtraction, multiplication, division } = useBasicOperation();

function calculat()
{
    if(param_1.value !== '' && param_2.value !== '')
    {
        let result;

        switch(operator.value)
        {
            case '+':
                result = addition(param_1.value, param_2.value);
                break;
            case '-':
                result = subtraction(param_1.value, param_2.value);
                break;
            case '*':
                result = multiplication(param_1.value, param_2.value);
                break;
            case '/':
                result = division(param_1.value, param_2.value);
                break;
        }

        return result
    }
}

function clear()
{
    param_1.value = '';
    param_2.value = '';
    operator.value = '';
}

</script>

<template>
    <Layout>
        <div class="flex flex-col bg-stone-300 text-stone-600 px-24 py-10 rounded-lg">
            <label for="param_1">First parameter:</label>
            <input type="number" id="param_1" v-model="param_1" class="border-stone-400 bg-stone-100 h-10 border text-lg rounded-md mb-8 px-2" />

            <div class="flex space-x-10 mb-8">
                <p>Operation: </p>
                <div>
                    <label for="operator">+</label>
                    <input type="radio" class="ml-1" name="operator" v-model="operator" value="+" />
                </div>


                <div>
                    <label for="operator">-</label>
                    <input type="radio" class="ml-1" name="operator" v-model="operator" value="-" />
                </div>

                <div>
                    <label for="operator">*</label>
                    <input type="radio" class="ml-1" name="operator" v-model="operator" value="*" />
                </div>

                <div>
                    <label for="operator">/</label>
                    <input type="radio" class="ml-1" name="operator" v-model="operator" value="/" />
                </div>
            </div>

            <label for="param_2">Second parameter:</label>
            <input type="number" id="param_2" v-model="param_2" class="border-stone-400 bg-stone-100 h-10 border text-lg rounded-md mb-8 px-2" />

            <p>Result:</p>
            <div class="border-stone-400 bg-stone-100 h-10 border text-lg rounded-md mb-8 px-2 p-1">
                <p>= {{ calculat() }}</p>
            </div>

            <div class="flex justify-center">
                <button @click="clear" class="bg-stone-400 w-24 h-8 rounded-md">
                    Clear
                </button>
            </div>
        </div>
    </Layout>
</template>
