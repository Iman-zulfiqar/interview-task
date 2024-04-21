import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const email = ref("");
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }
  function setEmail(param) {
    console.log(">>> i am calling ", param);
    email.value = param;
  }
  return { count, setEmail, email, doubleCount, increment };
});
