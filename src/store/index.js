import { reactive } from 'vue';

/** sysStore */
export const sysStore =  reactive({
  count: 1,
})

setInterval(() => {
  sysStore.count++
}, 1000)
