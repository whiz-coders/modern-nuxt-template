<template>
  <div class="dark:bg-black bg-white dark:text-white">
    <Icon name="uil:github" />
    <select v-model="locale">
      <option value="en">
        en
      </option>
      <option value="ch">
        ch
      </option>
    </select>
    <p>{{ $t('welcome') }}</p>
    <div>
      <h1 class="text-xl font-bold">
        {{ $t('heroSection.title') }}
      </h1>
      <p>{{ $t('heroSection.content') }}</p>
    </div>
    <p>Programming Languages: {{ languages }}</p>
    <NuxtWelcome />
    {{ reference }}
  </div>
</template>
<script setup lang="ts">
const { locale } = useI18n()
const reference = ref('Normal Ref variable')
const languages = useLanguages()

useSeoMeta({
  title: 'Home',
  description: 'Welcome to my website',
  ogImage: () => 'https://alnafi-main-backend.s3.amazonaws.com/media/tracks/DevOps_Advancement_Track.webp'
})

definePageMeta({
  colorMode: 'dark'
})

</script>
