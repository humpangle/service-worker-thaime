<script>
import { DateTime } from 'luxon'

const formats = {
  time: DateTime.TIME_WITH_SECONDS,
  'time-24': DateTime.TIME_24_WITH_SECONDS,
}

export default {
  name: `timer-24`,
  props: {
    currentTime: DateTime,
  },
  data() {
    return {
      timeFormat: `time-24`,
    }
  },
  computed: {
    displayedTime() {
      const isLuxonDateTime = this.currentTime instanceof DateTime
      if (!isLuxonDateTime) return `00:00:00`
      return this.currentTime
        .setLocale(`en`)
        .toLocaleString(formats[this.timeFormat])
    },
  },
  methods: {
    toggleFormat() {
      this.timeFormat = this.timeFormat === `time-24` ? `time` : `time-24`
    },
    increase() {
      this.$emit(`change`, this.currentTime.hour + 1)
    },
    decrease() {
      this.$emit(`change`, this.currentTime.hour - 1)
    },
  },
}
</script>

<template lang="pug">
.timer-24
  t-button-icon.timer-24__button(icon="remove-circle" @click="decrease")
  p(:class="`text text--${timeFormat}`" @click="toggleFormat") {{ displayedTime }}
  t-button-icon.timer-24__button(icon="add-circle" @click="increase")
</template>

<style scoped lang="scss">
@import '../config.scss';

.timer-24 {
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  max-width: 300px;
  height: 50px;

  @media #{$mq-big} {
    height: 70px;
  }

  .text {
    flex-grow: 1;
    font-size: 1.75rem;
    margin: 0;
    text-align: center;
    font-weight: 300;
    color: var(--c-primary-lighter);
    // https://www.client9.com/css-system-font-stack-monospace-v2/
    font-family: var(--monospace);
    text-transform: lowercase;

    &--time {
      font-size: 1.5rem;
    }
  }
  &__button {
    &:first-child {
      margin-right: var(--half-gutter);
    }
    &:last-child {
      margin-left: var(--half-gutter);
    }
  }
}
</style>
