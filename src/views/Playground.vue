<template>
  <div class="app-container">
    <div class="calculator-container">
      <div class="calculator">
        <div class="screen pad"></div>
        <div class="tabs pad"></div>
        <div class="queries pad">
          <calculator />
        </div>
      </div>
    </div>
    <div class="footer">Made by Nonnie</div>
  </div>
</template>

<script>
// @ is an alias to /src
import Calculator from "@/components/CalculatorComponent.vue";
export default {
  name: "playground",
  components: {
    calculator: Calculator
  }
};
</script>
