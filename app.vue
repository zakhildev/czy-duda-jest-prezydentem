<template>
  <main>
    <h1 class="que">Czy Andrzej Duda jest prezydentem?</h1>
    <div class="ans">
      <h2 v-if="isPresident" class="ans__yes">Tak!</h2>
      <h2 v-else class="ans__no">Nie!</h2>
    </div>
    <div v-if="isPresident" class="countdown">
      <p>Andrzej Duda będzie jeszcze prezydentem przez:</p>
      <span class="years" v-if="duration.years() !== 0">
        {{ `${duration.years()} rok ` }}
      </span>
      <span class="months" v-if="duration.months() !== 0">
        {{ `${duration.months()} ${getWordForm(duration.months(), 'month')} ` }}
      </span>
      <span class="weeks" v-if="duration.weeks() !== 0">
        {{ `${duration.weeks()} ${getWordForm(duration.weeks(), 'week')} ` }}
      </span>
      <span class="days" v-if="duration.days() !== 0">
        {{ `${duration.days()} ${getWordForm(duration.days(), 'day')} ` }}
      </span>
      <span class="hours" v-if="duration.hours() !== 0">
        {{ `${duration.hours()} ${getWordForm(duration.hours(), 'hour')} ` }}
      </span>
      <span class="minutes" v-if="duration.minutes() !== 0">
        {{
          `${duration.minutes()} ${getWordForm(duration.minutes(), 'minute')} `
        }}
      </span>
      <span class="seconds" v-if="duration.seconds() !== 0">
        {{
          `${duration.seconds()} ${getWordForm(duration.seconds(), 'second')} `
        }}
      </span>
    </div>
    <div v-else class="countdown">
      <p>Andrzej Duda nie jest już prezydentem!</p>
      <p>Miłego dnia, smacznej kawusi, wiadomo kogo i wiadomo co. UwU</p>
    </div>
  </main>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import moment from 'moment';
  import type { Duration, Moment } from 'moment';

  moment.locale('pl');
  const endDate = moment(20250806, 'YYYYMMDD');

  const nowDate = ref<Moment>(moment());
  const isPresident = ref<boolean>(moment().isBefore(endDate));
  const duration = ref<Duration>(moment.duration(endDate.diff(nowDate.value)));

  onMounted(() => {
    const updateInterval = setInterval(() => {
      nowDate.value = moment();
      duration.value = moment.duration(endDate.diff(nowDate.value));
    }, 1000);
  });
</script>

<style>
  main {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
    padding: 5px;
  }

  .que {
    font-size: 4.5rem;
    text-align: center;
    font-weight: bolder;
    margin-bottom: 20px;
  }

  .ans {
    font-size: 2rem;
    font-weight: bolder;
  }

  .ans__yes {
    color: var(--green);
  }

  .ans__no {
    color: var(--red);
  }

  .countdown {
    font-size: 1.8rem;
    text-align: center;
    margin-top: 20px;
  }

  .countdown > p {
    font-size: 1.5rem;
  }

  @media (max-width: 780px) {
    .que {
      font-size: 2rem;
    }

    .ans {
      font-size: 1.5rem;
    }

    .countdown > p {
      font-size: 1.1rem;
    }

    .countdown {
      font-size: 1rem;
    }
  }
</style>
