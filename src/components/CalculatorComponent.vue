<template>
  <number-pad>
    <div slot="pad-area">
      <div class="row">
        <btn>
          <div class="btn-text orange-txt">C</div>
        </btn>
        <btn>
          <div class="btn-text green-txt">( )</div>
        </btn>
        <btn>
          <div class="btn-text green-txt">%</div>
        </btn>
        <btn>
          <div class="btn-text green-txt">/</div>
        </btn>
      </div>
      <div class="row">
        <btn>
          <div class="btn-text dark-grey-txt">7</div>
        </btn>
        <btn>
          <div class="btn-text dark-grey-txt">8</div>
        </btn>
        <btn>
          <div class="btn-text dark-grey-txt">9</div>
        </btn>
        <btn>
          <div class="btn-text green-txt">X</div>
        </btn>
      </div>
      <div class="row">
        <btn>
          <div class="btn-text dark-grey-txt">4</div>
        </btn>
        <btn>
          <div class="btn-text dark-grey-txt">5</div>
        </btn>
        <btn>
          <div class="btn-text dark-grey-txt">6</div>
        </btn>
        <btn>
          <div class="btn-text green-txt">-</div>
        </btn>
      </div>
      <div class="row">
        <btn>
          <div class="btn-text dark-grey-txt">1</div>
        </btn>
        <btn>
          <div class="btn-text dark-grey-txt">2</div>
        </btn>
        <btn>
          <div class="btn-text dark-grey-txt">3</div>
        </btn>
        <btn>
          <div class="btn-text green-txt">+</div>
        </btn>
      </div>
      <div class="row">
        <btn>
          <div class="btn-text dark-grey-txt">+/-</div>
        </btn>
        <btn>
          <div class="btn-text dark-grey-txt">0</div>
        </btn>
        <btn>
          <div class="btn-text dark-grey-txt">,</div>
        </btn>
        <btn :greyBG="false">
          <div class="btn-text white-txt">=</div>
        </btn>
      </div>
    </div>
  </number-pad>
</template>

<script>
import NumberPad from "@/components/NumberPadComponent.vue";
import Button from "@/components/ButtonComponent.vue";
export default {
  name: "Calculator",
  components: {
    "number-pad": NumberPad,
    btn: Button
  }
};
</script>
