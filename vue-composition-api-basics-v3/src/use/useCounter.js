import { reactive, computed, nextTick } from "vue";
export function useCounter() {
    const counterData = reactive({
        count: 0,
        title: 'My Counter'
    })

    const decrement = () => {
        // Reactive object update
        counterData.count--;
    };
    const increment = async () => {
        // Reactive object update
        counterData.count++;
        await nextTick()
        console.log('Updated Dom after incremented')
        // without async
        // nextTick(()=>{
        //    console.log('Updated Dom after incremented')
        // })
    };

    const isEven = computed(() => {
        const result = counterData.count % 2 === 0;
        return result
    })

    return {
        counterData,
        decrement,
        increment,
        isEven
    }
}