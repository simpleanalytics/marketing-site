<template>
  <div>
    <div class="text-center max-w-5xl mx-auto">
      <h1
        class="text-2xl sm:text-2xl md:text-4xl font-medium"
        v-html="$t('ai.title', tColorsRed)"
      ></h1>
      <h2
        class="text-2xl sm:text-3xl md:text-5xl font-medium mt-6"
        v-html="$t('ai.subtitle', tColorsRed)"
      ></h2>

      <p
        class="max-w-4xl leading-loose mx-auto mt-6 text-xl text-gray-600 dark:text-gray-400"
      >
        {{ $t("ai.description") }}
      </p>
    </div>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      fill="none"
      viewBox="0 0 191 24"
      class="mx-auto mt-8 -mb-4 w-[500px]"
    >
      <path
        class="fill-gray-400"
        d="M40.1 20.11c-.46 0-.85-.13-1.18-.38-.32-.25-.57-.6-.75-1.04a4.21 4.21 0 0 1 .2-3.28c.29-.57.67-1.02 1.14-1.36.48-.35.98-.52 1.5-.52.43 0 .76.1 1 .29.23.2.34.42.34.68a.7.7 0 0 1-.14.42.8.8 0 0 1-.38.29.45.45 0 0 1-.03-.19l.03-.24c.02-.1.02-.18.02-.23a.43.43 0 0 0-.03-.17c-.09-.23-.34-.35-.76-.35l-.4.03a2 2 0 0 0-1.05.53 3.48 3.48 0 0 0-1.18 2.52c0 .41.07.8.2 1.18.14.37.34.66.6.89.26.23.57.34.93.34.47 0 .86-.06 1.16-.17.32-.11.62-.29.92-.52a.17.17 0 0 1 .11-.04c.08 0 .13.04.15.13.04.16-.07.33-.32.52a3.65 3.65 0 0 1-2.08.67Zm4.31-.13c-.03 0-.07-.12-.1-.38-.04-.26-.09-.7-.15-1.34-.1-1.04-.2-2-.32-2.86-.11-.87-.25-1.62-.43-2.25-.01-.05 0-.1.06-.14a.36.36 0 0 1 .22-.06l.11.01c.17.45.29.85.35 1.2.08.35.14.77.2 1.28l.05.39c.4-.24.77-.36 1.1-.36.6 0 1.04.28 1.3.83.25.55.38 1.33.38 2.34 0 .39-.02.71-.07.98-.04.26-.1.39-.17.39-.08 0-.18-.06-.29-.19v-.33l.01-1.09c0-.2 0-.46-.02-.77a2.15 2.15 0 0 0-.32-1.18c-.18-.27-.5-.4-.97-.4-.3 0-.6.11-.86.34a10.43 10.43 0 0 0 .12 1.56 16.5 16.5 0 0 1 .14 1.83.34.34 0 0 1-.14.16.4.4 0 0 1-.2.04Zm5.72.03a1.97 1.97 0 0 1-2.07-2.09c0-.67.24-1.16.73-1.49a3.2 3.2 0 0 1 1.8-.49 1.8 1.8 0 0 1 1.6.93c.18.3.27.65.27 1.04 0 .43-.11.8-.33 1.12-.22.31-.51.56-.87.73-.36.17-.73.25-1.13.25Zm-.11-.57c.62 0 1.09-.14 1.4-.42.33-.28.49-.69.49-1.23a1.33 1.33 0 0 0-1.42-1.35c-.3 0-.6.06-.91.17-.3.11-.56.28-.76.51-.2.23-.3.5-.3.82 0 .27.06.52.2.75.13.23.31.41.54.55.23.13.48.2.76.2Zm5.3.57a1.97 1.97 0 0 1-2.07-2.09c0-.67.25-1.16.73-1.49a3.2 3.2 0 0 1 1.81-.49c.33 0 .63.08.91.24.29.16.52.39.7.69.17.3.25.65.25 1.04 0 .43-.1.8-.33 1.12-.22.31-.5.56-.87.73-.35.17-.73.25-1.13.25Zm-.1-.57c.61 0 1.08-.14 1.4-.42.32-.28.48-.69.48-1.23a1.33 1.33 0 0 0-1.42-1.35c-.3 0-.6.06-.9.17-.31.11-.57.28-.77.51-.2.23-.3.5-.3.82 0 .27.07.52.2.75.14.23.32.41.54.55.24.13.49.2.76.2Zm3.28-.62c.1-.07.18-.11.27-.11.08 0 .16.02.23.07.08.05.16.1.24.18l.19.15c.15.12.36.21.63.28.27.07.55.1.85.1.34 0 .64-.06.9-.19.28-.13.42-.31.42-.53 0-.2-.07-.36-.22-.47-.15-.12-.32-.2-.53-.26a7.5 7.5 0 0 0-.82-.15 6.9 6.9 0 0 1-1.1-.2 1.35 1.35 0 0 1-.64-.39 1.16 1.16 0 0 1-.24-.78c0-.36.17-.63.5-.8.35-.18.74-.27 1.18-.27.4 0 .74.09 1.02.26.29.17.43.4.44.72a.7.7 0 0 1-.08.43c-.07.1-.15.15-.24.15a.2.2 0 0 1-.14-.06.24.24 0 0 1-.05-.16c0-.1.04-.22.1-.35-.02-.16-.13-.28-.32-.36a1.6 1.6 0 0 0-.65-.12c-.37 0-.67.07-.9.21-.21.13-.32.3-.32.48 0 .2.08.35.24.46.16.1.35.18.58.23.23.04.56.08.99.12.35.05.64.1.86.17.23.07.42.2.57.39.15.19.23.46.23.81 0 .37-.17.66-.51.87-.34.2-.75.31-1.22.31-.6 0-1.15-.1-1.63-.31-.47-.2-.75-.5-.83-.88ZM65.9 20c-.43 0-.82-.08-1.18-.25a2.1 2.1 0 0 1-.86-.71c-.22-.3-.32-.66-.32-1.06 0-.45.08-.86.25-1.25.16-.4.4-.7.73-.94.32-.24.7-.36 1.14-.36.45 0 .8.15 1.03.44.23.29.34.65.33 1.09 0 .4-.16.7-.47.9-.31.2-.7.31-1.18.31a4 4 0 0 1-.33-.02 1.8 1.8 0 0 1-.51-.11c-.1-.05-.15-.14-.15-.28 0-.05.01-.08.04-.1.02-.03.08-.04.16-.04s.24.02.46.06c.21.04.4.06.57.06.61 0 .92-.27.92-.8 0-.32-.06-.57-.18-.76-.12-.19-.32-.28-.61-.28-.32 0-.61.09-.86.26a1.7 1.7 0 0 0-.6.66c-.13.27-.2.56-.2.87 0 .53.15.96.45 1.3.29.33.74.5 1.36.5.07 0 .2 0 .37-.02.07 0 .16-.03.27-.06a11.13 11.13 0 0 1 .86-.22c.1 0 .17.03.23.08-.17.25-.42.44-.75.56-.33.11-.65.17-.97.17Zm6.69.01a1.97 1.97 0 0 1-2.07-2.09c0-.67.24-1.16.73-1.49a3.2 3.2 0 0 1 1.8-.49c.34 0 .64.08.92.24.29.16.52.39.69.69.17.3.26.65.26 1.04 0 .43-.11.8-.33 1.12-.22.31-.51.56-.87.73-.35.17-.73.25-1.13.25Zm-.11-.57c.62 0 1.09-.14 1.4-.42.33-.28.49-.69.49-1.23a1.33 1.33 0 0 0-1.42-1.35c-.3 0-.6.06-.91.17-.3.11-.56.28-.76.51-.2.23-.3.5-.3.82 0 .27.07.52.2.75.13.23.31.41.54.55.23.13.49.2.76.2Zm4.18.6-.16.04c-.05 0-.1-.03-.17-.08-.22-.33-.38-.9-.48-1.71-.09-.81-.14-1.51-.14-2.1 0-.1.07-.14.2-.14.2 0 .3.11.3.33v.15c.05-.14.17-.28.33-.43.17-.15.36-.27.58-.37.22-.1.45-.15.67-.15.72 0 1.24.32 1.56.95a5.03 5.03 0 0 1 .4 3.11c-.07.19-.16.28-.28.28-.12 0-.18-.04-.18-.11.05-.35.07-.7.07-1.04 0-.86-.15-1.51-.45-1.95-.3-.45-.7-.67-1.19-.67a1.48 1.48 0 0 0-1.24.68c-.13.21-.2.46-.2.73a5.58 5.58 0 0 0 .21 1.62c.08.31.14.6.17.86Zm6.35-.04c-.43 0-.82-.08-1.18-.25a2.1 2.1 0 0 1-.86-.71c-.22-.3-.32-.66-.32-1.06 0-.45.08-.86.25-1.25.16-.4.4-.7.73-.94.32-.24.7-.36 1.14-.36.45 0 .8.15 1.03.44.23.29.34.65.33 1.09 0 .4-.16.7-.47.9-.31.2-.7.31-1.18.31a4 4 0 0 1-.33-.02 1.8 1.8 0 0 1-.51-.11c-.1-.05-.15-.14-.15-.28 0-.05 0-.08.04-.1.02-.03.08-.04.16-.04s.24.02.46.06c.2.04.4.06.57.06.6 0 .92-.27.92-.8 0-.32-.06-.57-.18-.76-.12-.19-.32-.28-.61-.28-.32 0-.61.09-.86.26a1.7 1.7 0 0 0-.6.66c-.13.27-.2.56-.2.87 0 .53.15.96.45 1.3.29.33.74.5 1.36.5.07 0 .2 0 .37-.02.07 0 .16-.03.27-.06a10.94 10.94 0 0 1 .86-.22c.1 0 .17.03.23.08-.17.25-.42.44-.75.56-.33.11-.65.17-.97.17Zm6.69.01a1.97 1.97 0 0 1-2.07-2.09c0-.67.24-1.16.73-1.49a3.2 3.2 0 0 1 1.8-.49c.34 0 .64.08.92.24.29.16.52.39.69.69.17.3.26.65.26 1.04 0 .43-.11.8-.33 1.12-.22.31-.51.56-.87.73-.35.17-.73.25-1.13.25Zm-.11-.57c.62 0 1.09-.14 1.4-.42.33-.28.49-.69.49-1.23a1.33 1.33 0 0 0-1.42-1.35c-.3 0-.6.06-.91.17-.3.11-.56.28-.76.51-.2.23-.3.5-.3.82 0 .27.07.52.2.75.13.23.31.41.54.55.23.13.49.2.76.2Zm5.7-6.48c.3 0 .58.08.85.23.28.15.5.34.66.57.18.23.26.47.26.7h-.22a.44.44 0 0 1-.27-.09 2.91 2.91 0 0 1-.29-.29 2.77 2.77 0 0 0-.47-.42.89.89 0 0 0-.52-.14c-.36 0-.67.17-.92.51-.24.33-.39.73-.44 1.18a6.43 6.43 0 0 0 .04 1.56l.61.05a439.3 439.3 0 0 1 1.22.07c.07 0 .12.02.14.05.04.03.05.08.05.15 0 .18-.2.27-.6.27-.36 0-.8-.06-1.34-.19.08.3.17.58.28.83l.44.89.28.58c.06.13.1.25.1.34 0 .07-.03.13-.08.16a.4.4 0 0 1-.2.04c-.18 0-.35-.19-.5-.57-.16-.39-.34-.92-.54-1.6l-.18-.59c-.14.01-.33.05-.55.12l-.2.06c-.12.03-.22.04-.32.04s-.16-.06-.16-.19c0-.17.09-.28.26-.33.18-.06.34-.1.5-.1l.28-.03-.02-.68c0-.86.13-1.6.4-2.23.26-.63.74-.95 1.44-.95Zm6.28 7.04a.87.87 0 0 1-.13.02c-.2 0-.35-.15-.43-.46-.07-.3-.1-.74-.1-1.29a44.12 44.12 0 0 1 .03-1.72c-.82 0-1.23-.1-1.23-.28 0-.06 0-.1.02-.14.02-.03.06-.05.12-.05l1.1-.07a21 21 0 0 0-.06-1.07l-.05-.96c0-.07.03-.12.1-.15a.39.39 0 0 1 .18-.05c.08 0 .15.04.2.13.06.08.08.16.08.25l.07 1.83.83.04c.13-.01.24.01.32.07.1.06.15.16.15.3-.14.06-.3.1-.46.11l-.84.02c0 .62.03 1.64.1 3.06V20Zm2.85-.02c-.03 0-.07-.12-.1-.38-.04-.26-.09-.7-.15-1.34-.1-1.04-.2-2-.32-2.86-.11-.87-.25-1.62-.43-2.25-.01-.05 0-.1.06-.14a.36.36 0 0 1 .22-.06l.11.01c.17.45.28.85.35 1.2.08.35.14.77.2 1.28l.05.39c.4-.24.77-.36 1.1-.36.6 0 1.04.28 1.3.83.25.55.38 1.33.38 2.34 0 .39-.02.71-.07.98-.05.26-.1.39-.17.39-.09 0-.18-.06-.29-.19v-.33l.01-1.09c0-.2 0-.46-.02-.77a2.15 2.15 0 0 0-.32-1.18c-.19-.27-.5-.4-.97-.4-.3 0-.6.11-.86.34a10.43 10.43 0 0 0 .12 1.56 16.14 16.14 0 0 1 .14 1.83.34.34 0 0 1-.14.16.4.4 0 0 1-.2.04Zm6 .02c-.42 0-.81-.08-1.17-.25a2.1 2.1 0 0 1-.86-.71c-.22-.3-.32-.66-.32-1.06 0-.45.08-.86.25-1.25.17-.4.4-.7.73-.94.33-.24.7-.36 1.14-.36.45 0 .8.15 1.03.44.23.29.34.65.33 1.09 0 .4-.16.7-.47.9-.3.2-.7.31-1.18.31-.08 0-.19 0-.33-.02a1.8 1.8 0 0 1-.51-.11c-.1-.05-.15-.14-.15-.28 0-.05.01-.08.04-.1.02-.03.08-.04.16-.04s.24.02.46.06c.21.04.4.06.57.06.61 0 .92-.27.92-.8 0-.32-.06-.57-.18-.76-.11-.19-.32-.28-.61-.28-.32 0-.6.09-.86.26-.25.17-.45.39-.6.66-.13.27-.2.56-.2.87 0 .53.16.96.45 1.3.3.33.75.5 1.36.5.07 0 .2 0 .37-.02.07 0 .16-.03.27-.06a11.13 11.13 0 0 1 .86-.22c.1 0 .17.03.23.08-.17.25-.42.44-.75.56-.33.11-.65.17-.97.17Zm2.18-1.18c.1-.07.18-.11.27-.11.08 0 .16.02.23.07.08.05.16.1.24.18l.19.15c.15.12.36.21.63.28.27.07.55.1.85.1.34 0 .64-.06.91-.19s.41-.31.41-.53c0-.2-.07-.36-.22-.47-.15-.12-.32-.2-.53-.26-.2-.05-.48-.1-.82-.15a6.9 6.9 0 0 1-1.1-.2 1.36 1.36 0 0 1-.64-.39 1.16 1.16 0 0 1-.24-.78c0-.36.17-.63.51-.8.34-.18.73-.27 1.17-.27.4 0 .74.09 1.02.26.29.17.43.4.44.72a.7.7 0 0 1-.08.43c-.07.1-.15.15-.24.15a.2.2 0 0 1-.14-.06.24.24 0 0 1-.05-.16c0-.1.04-.22.11-.35-.03-.16-.14-.28-.33-.36a1.6 1.6 0 0 0-.65-.12c-.37 0-.67.07-.89.21-.22.13-.33.3-.33.48 0 .2.08.35.24.46.16.1.35.18.58.23.23.04.56.08.99.12.35.05.64.1.86.17.23.07.42.2.57.39.15.19.23.46.23.81 0 .37-.17.66-.51.87-.34.2-.75.31-1.22.31-.6 0-1.15-.1-1.63-.31-.47-.2-.75-.5-.83-.88ZM120 20c-.43 0-.82-.08-1.18-.25a2.1 2.1 0 0 1-.86-.71c-.21-.3-.32-.66-.32-1.06 0-.45.08-.86.25-1.25.17-.4.4-.7.73-.94.32-.24.7-.36 1.14-.36.45 0 .8.15 1.03.44.23.29.34.65.33 1.09 0 .4-.16.7-.47.9-.3.2-.7.31-1.18.31-.08 0-.19 0-.33-.02a1.8 1.8 0 0 1-.51-.11c-.1-.05-.15-.14-.15-.28 0-.05.01-.08.04-.1.03-.03.08-.04.16-.04s.24.02.46.06c.21.04.4.06.57.06.61 0 .92-.27.92-.8 0-.32-.06-.57-.18-.76-.12-.19-.32-.28-.61-.28-.32 0-.6.09-.86.26s-.45.39-.6.66c-.13.27-.2.56-.2.87 0 .53.15.96.45 1.3.3.33.75.5 1.36.5.07 0 .2 0 .37-.02.07 0 .16-.03.27-.06a13.47 13.47 0 0 1 .86-.22c.1 0 .18.03.23.08-.17.25-.42.44-.75.56-.33.11-.65.17-.97.17Zm6.98 0c-.43 0-.82-.08-1.18-.25a2.1 2.1 0 0 1-.86-.71 1.8 1.8 0 0 1-.32-1.06c0-.45.08-.86.25-1.25.17-.4.41-.7.73-.94.33-.24.7-.36 1.14-.36.45 0 .8.15 1.03.44.23.29.34.65.33 1.09 0 .4-.16.7-.47.9-.3.2-.7.31-1.18.31-.07 0-.18 0-.33-.02a1.8 1.8 0 0 1-.5-.11c-.1-.05-.16-.14-.16-.28 0-.05.01-.08.04-.1.03-.03.08-.04.16-.04.09 0 .24.02.46.06.21.04.4.06.57.06.61 0 .92-.27.92-.8 0-.32-.06-.57-.18-.76-.11-.19-.32-.28-.6-.28-.33 0-.62.09-.87.26a1.7 1.7 0 0 0-.59.66c-.13.27-.2.56-.2.87 0 .53.15.96.44 1.3.3.33.75.5 1.36.5.07 0 .2 0 .37-.02.07 0 .16-.03.27-.06a9.48 9.48 0 0 1 .86-.22c.1 0 .18.03.23.08-.17.25-.42.44-.75.56-.33.11-.65.17-.97.17Zm4.01-1.96a12.08 12.08 0 0 1 1.77 1.83c0 .12-.04.2-.12.25a.3.3 0 0 1-.25.05 8.29 8.29 0 0 1-1.26-1.25l-.48-.51c-.14.15-.36.42-.64.83-.14.2-.25.37-.35.49-.08.11-.16.18-.22.2a.45.45 0 0 1-.22-.05.2.2 0 0 1-.09-.17c0-.05.01-.1.03-.14.06-.17.18-.36.34-.57.18-.21.44-.5.8-.88l-.78-.77c-.3-.3-.5-.5-.59-.61-.09-.1-.17-.22-.24-.35a.35.35 0 0 1 .33-.31c.21.2.47.47.77.79.4.4.69.7.87.86l.23-.26c.37-.42.7-.76.97-1.02.29-.27.52-.4.7-.4.14 0 .22.08.24.23 0 .04-.09.15-.28.33l-.6.56-.93.87Zm5.17 1.96c-.7 0-1.3-.12-1.81-.36-.51-.25-.76-.68-.76-1.29 0-.22.06-.43.2-.64.13-.2.33-.37.59-.5.26-.13.57-.2.95-.2.28 0 .53.01.73.04.2.03.43.1.69.22.26.12.53.31.8.57-.1-.46-.26-.86-.47-1.21a2.67 2.67 0 0 0-.72-.8 1.3 1.3 0 0 0-.77-.29.84.84 0 0 0-.34.07c-.1.04-.23.1-.37.18-.17.1-.3.16-.37.16a.14.14 0 0 1-.1-.03.15.15 0 0 1-.02-.09.7.7 0 0 1 .35-.62c.24-.15.53-.21.87-.2.46.03.89.23 1.28.6.38.37.69.82.9 1.37a4.2 4.2 0 0 1 .33 1.98l-.32-.02a2.42 2.42 0 0 0-2.17-1.42c-.52 0-.88.08-1.1.23a.77.77 0 0 0-.33.67c0 .3.15.55.46.74.3.19.7.28 1.18.28.26 0 .48-.01.64-.04.16-.03.32-.08.5-.13a2.29 2.29 0 0 1 1.13-.09c.05.03.08.09.08.18 0 .07-.14.15-.41.25a8.1 8.1 0 0 1-1.62.39Zm9.32.01c-.1 0-.16-.03-.18-.08a.91.91 0 0 1-.03-.27v-.16c0-.07 0-.12.02-.15.04-.32.06-.62.06-.91 0-.63-.11-1.13-.32-1.48-.22-.36-.55-.54-1.01-.54-.26 0-.51.06-.76.19s-.45.28-.61.47c-.16.19-.23.36-.23.51.03.2.09.43.18.71l.08.31c.05.17.08.33.08.47v.19c0 .1-.05.16-.15.16-.14 0-.25-.09-.33-.26a5.6 5.6 0 0 1-.27-.81c-.1-.36-.2-.66-.3-.89-.09-.23-.21-.43-.37-.6a.8.8 0 0 0-.61-.25c-.34 0-.61.12-.8.35-.2.23-.28.52-.28.86 0 .23.02.53.06.9.03.28.05.52.05.72 0 .12-.02.21-.04.27-.03.06-.1.09-.2.09-.13 0-.22-.04-.27-.13a.87.87 0 0 1-.08-.42 17.75 17.75 0 0 0-.1-1.84 7.13 7.13 0 0 1-.01-.84v-.33a.2.2 0 0 1 .15-.06c.07 0 .13.05.18.14.05.09.08.22.08.4.1-.17.24-.33.44-.47.19-.14.4-.21.6-.21.37 0 .68.08.92.23.24.15.47.39.67.72a2.43 2.43 0 0 1 2-1.23c.42 0 .76.16 1.04.47.28.31.48.69.6 1.13a4.24 4.24 0 0 1 .12 2.18c-.06.3-.18.46-.38.46Zm2.45 3.55c-.13 0-.3-.36-.48-1.07a29.97 29.97 0 0 1-.7-4.02c0-.67.23-1.16.68-1.47a3.01 3.01 0 0 1 1.75-.47c.38 0 .74.08 1.08.24.34.15.61.38.82.67.2.29.31.62.31 1 0 .47-.17.8-.5 1-.33.2-.74.29-1.24.29a3.1 3.1 0 0 1-1.33-.26c-.36-.18-.54-.42-.54-.73l.01-.1c.05-.05.1-.08.15-.08.05 0 .1.02.15.06l.19.12c.2.15.41.28.61.37.2.1.46.14.77.14.42 0 .72-.07.89-.22.18-.15.27-.4.27-.72a.96.96 0 0 0-.24-.64 1.55 1.55 0 0 0-.62-.43c-.25-.1-.51-.15-.78-.15-.62 0-1.09.13-1.4.4-.31.26-.45.7-.42 1.31.06 1.04.15 1.91.28 2.62.13.7.36 1.3.69 1.8l.01.02c0 .01-.02.03-.05.04a.52.52 0 0 0-.06.05.48.48 0 0 1-.3.23Zm4.5-3.63c-.14-.73-.25-1.59-.33-2.58a39.87 39.87 0 0 1-.08-4.14c0-.09.06-.13.2-.13.1 0 .17.03.2.08s.05.14.05.25a54.32 54.32 0 0 0 .22 5.23l.08 1.15c0 .1-.05.16-.17.16-.04 0-.1 0-.16-.02Zm3.5.07c-.43 0-.82-.08-1.18-.25a2.1 2.1 0 0 1-.86-.71c-.22-.3-.32-.66-.32-1.06 0-.45.08-.86.25-1.25.16-.4.4-.7.73-.94.32-.24.7-.36 1.14-.36.45 0 .8.15 1.03.44.23.29.34.65.33 1.09 0 .4-.16.7-.47.9-.31.2-.7.31-1.18.31-.08 0-.19 0-.33-.02a1.8 1.8 0 0 1-.51-.11c-.1-.05-.15-.14-.15-.28 0-.05 0-.08.04-.1.02-.03.08-.04.16-.04s.24.02.46.06c.2.04.4.06.57.06.6 0 .92-.27.92-.8 0-.32-.06-.57-.18-.76-.12-.19-.32-.28-.61-.28-.32 0-.61.09-.86.26-.26.17-.45.39-.6.66-.13.27-.2.56-.2.87 0 .53.15.96.45 1.3.29.33.74.5 1.36.5.07 0 .2 0 .37-.02.07 0 .16-.03.27-.06a11.13 11.13 0 0 1 .86-.22c.1 0 .17.03.23.08-.17.25-.42.44-.75.56-.33.11-.65.17-.97.17Zm2.17-1.18c.1-.07.18-.11.27-.11.08 0 .16.02.23.07.08.05.16.1.24.18l.19.15c.15.12.36.21.63.28.27.07.55.1.85.1.34 0 .64-.06.9-.19.28-.13.42-.31.42-.53 0-.2-.08-.36-.22-.47-.15-.12-.33-.2-.53-.26-.2-.05-.48-.1-.82-.15a6.9 6.9 0 0 1-1.1-.2 1.36 1.36 0 0 1-.64-.39 1.16 1.16 0 0 1-.24-.78c0-.36.17-.63.5-.8.35-.18.74-.27 1.18-.27.4 0 .74.09 1.02.26s.43.4.44.72a.7.7 0 0 1-.08.43c-.07.1-.15.15-.24.15a.2.2 0 0 1-.14-.06.24.24 0 0 1-.05-.16c0-.1.03-.22.1-.35-.02-.16-.13-.28-.32-.36a1.6 1.6 0 0 0-.65-.12c-.38 0-.67.07-.9.21-.21.13-.32.3-.32.48 0 .2.08.35.24.46.16.1.35.18.58.23.23.04.56.08.99.12.35.05.64.1.86.17.22.07.41.2.57.39.15.19.23.46.23.81 0 .37-.17.66-.51.87-.34.2-.75.31-1.22.31-.6 0-1.15-.1-1.63-.31-.47-.2-.75-.5-.83-.88ZM2.3 19.14c.07.11.22.14.34.07l1.88-1.23a.25.25 0 0 0-.27-.42l-1.68 1.1-1.09-1.68a.25.25 0 1 0-.42.27l1.23 1.89Zm.44-.09a9.58 9.58 0 0 1 3.52-5.44c1.7-1.41 3.76-2.48 5.67-3.45 1.89-.96 3.66-1.84 4.73-2.86.55-.52.93-1.1 1.05-1.76a3.15 3.15 0 0 0-.5-2.17l-.43.26c.42.71.53 1.3.44 1.82-.1.53-.4 1.01-.9 1.49-1 .96-2.7 1.8-4.62 2.77-1.9.97-4 2.06-5.76 3.51a10.08 10.08 0 0 0-3.68 5.73l.48.1ZM17.22 3.37C16.3 1.82 15.05 1.04 13.8.9a4.11 4.11 0 0 0-4.5 4.75c.21 1.45 1.14 3.03 3.04 4.56l.32-.4C10.8 8.33 9.99 6.85 9.79 5.57a3.61 3.61 0 0 1 3.95-4.18c1.08.13 2.2.8 3.04 2.24l.44-.26Zm-4.88 6.83c3.77 3.01 6.93 4.72 10.13 5.66 3.2.95 6.45 1.14 10.39 1.14v-.5c-3.93 0-7.11-.19-10.24-1.12-3.14-.92-6.23-2.59-9.96-5.58l-.32.4ZM188.29 19.13c.07.12.22.16.34.08l1.92-1.17a.25.25 0 0 0-.26-.42l-1.7 1.04-1.05-1.71a.25.25 0 0 0-.42.26l1.17 1.92Zm.45-.07c.57-2.33.73-4.1.55-5.43-.17-1.33-.7-2.23-1.52-2.74a4.66 4.66 0 0 0-3.04-.48c-1.18.14-2.51.52-3.92 1.04-2.8 1.04-5.94 2.63-8.72 3.88a35.8 35.8 0 0 1-3.84 1.53 6.5 6.5 0 0 1-2.78.4l-.09.49c.81.13 1.85-.05 3.02-.42 1.17-.36 2.5-.92 3.9-1.55 2.8-1.26 5.9-2.83 8.69-3.86 1.38-.51 2.68-.88 3.8-1.01 1.12-.13 2.04-.02 2.71.4.67.42 1.13 1.16 1.3 2.39.16 1.23.02 2.94-.54 5.24l.48.12Z"
      />
    </svg>

    <div
      class="bg-gradient-to-t from-red-50 dark:from-gray-700 w-full relative overflow-hidden pb-40"
    >
      <div class="mx-auto text-sm md:text-base max-w-5xl">
        <div class="-mx-4 mt-5 flex flex-wrap">
          <div
            v-for="(example, index) in examples"
            :key="index"
            :class="['w-full sm:w-1/2 lg:w-1/3 p-4 group cursor-pointer']"
            @click="selectedExample = example"
          >
            <div
              :class="
                'bg-gray-100 dark:bg-gray-900 p-4 rounded-lg group-hover:bg-gray-200 dark:group-hover:bg-gray-700 border-2' +
                (selectedExample?.id && selectedExample?.id === example?.id
                  ? '  border-blue-500'
                  : ' border-transparent')
              "
            >
              <h2 class="text-lg font-semibold mb-2">{{ example.title }}</h2>
              <p>{{ example.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-4 mx-6 text-sm md:text-base">
        <BrowserWindow>
          <TransitionGroup
            tag="ul"
            v-if="selectedExample"
            class="chat-list mt-5 flex flex-col w-[90%] mx-auto"
            enter-active-class="transition ease-out duration-200"
            enter-from-class="opacity-0 translate-y-10"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 translate-y-10"
          >
            <li
              v-for="(chatItem, index) in displayChats"
              :key="index"
              :class="
                chatItem.type === 'question'
                  ? 'question rounded-lg px-4 py-3 bg-[#e6f2dd] dark:bg-gray-700 mr-auto mb-6 md:max-w-[70%] max-w-[90%]'
                  : 'answer rounded-lg px-4 py-3 md:max-w-[70%] max-w-[90%] ml-auto bg-[#eef9ff] dark:bg-gray-800 mb-6'
              "
            >
              <p v-if="chatItem.text">{{ chatItem.text }}</p>
              <div
                v-else-if="chatItem.html"
                v-html="chatItem.html"
                class="prose prose-ul:mt-0 prose-li:m-0"
              ></div>
              <p v-else>...</p>
              <img
                v-if="chatItem.image"
                :src="chatItem.image"
                alt="AI"
                class="w-full mt-2 mb-1 rounded-xl dark:opacity-50"
              />
            </li>
          </TransitionGroup>

          <div
            v-if="!selectedExample"
            class="mt-5 flex flex-col w-[90%] mx-auto"
          >
            <div
              class="rounded-lg px-4 py-3 bg-gray-100 dark:bg-gray-800 mt-10 mx-auto mb-6 md:max-w-[70%] max-w-[90%]"
            >
              <p>Hi there 👋</p>
              <p class="mt-2">
                I'm am the Simple Analytics' AI and here to help you with your
                data.
              </p>
              <p>
                Choose one of the examples above this window to get started.
              </p>
              <p class="mt-2">
                <span class="font-bold">Notice: </span>
                <span class="italic"
                  >This is a static demo, scroll down for the real deal.</span
                >
              </p>
            </div>
          </div>

          <div
            class="mt-auto pointer-events-none text-gray-300 border dark:border-transparent dark:bg-gray-800 rounded-3xl w-2/3 md:w-1/2 px-2 py-1 md:px-3 md:py-2 mx-auto mb-6 scroll-mb-10"
            ref="textInput"
          >
            <span v-if="selectedExample && typingText">{{ typingText }}</span>
            <span v-else-if="selectedExample"
              >Start typing...
              <span class="opacity-50">({{ $t("ai.not_really") }})</span></span
            >
            <span v-else>{{ $t("ai.choose_above_examples") }}...</span>
          </div>
        </BrowserWindow>
      </div>
    </div>

    <div class="-mt-60 pt-48 relative overflow-hidden">
      <ClientOnly>
        <div class="absolute top-0 left-1/2 transform -translate-x-1/2">
          <BackgroundChart
            class="fill-blue-50 stroke-red-500 dark:stroke-red-600 dark:fill-gray-800"
          />
        </div>
      </ClientOnly>

      <div class="bg-blue-50 dark:bg-gray-800 pb-20 -mb-10">
        <div class="max-w-5xl mx-auto text-center pt-20 px-6">
          <h2 class="text-2xl md:text-3xl font-medium mt-8">
            Play with public data yourself
          </h2>
          <p class="mt-4">Opens a Simple Analytics' chat window in a new tab</p>
          <div class="-mx-4 mt-5 flex flex-wrap">
            <a
              class="w-full sm:w-1/2 lg:w-1/3 p-4 group cursor-pointer"
              href="https://simpleanalytics.com/ai/simpleanalytics.com"
              target="_blank"
            >
              <div
                class="bg-red-100 dark:bg-gray-700 p-4 rounded-lg transform transition-transform group-hover:scale-105"
              >
                <LogosSimpleAnalytics class="h-20 w-auto mx-auto mt-2 mb-4" />
                <h2 class="text-lg font-semibold mb-2">Simple Analytics</h2>
                <p>Privacy-first web analytics</p>
              </div>
            </a>
            <a
              class="w-full sm:w-1/2 lg:w-1/3 p-4 group cursor-pointer"
              href="https://simpleanalytics.com/ai/bannerbear.com"
              target="_blank"
            >
              <div
                class="bg-[#ffd700] dark:bg-gray-700 p-4 rounded-lg transform transition-transform group-hover:scale-105"
              >
                <LogosBannerbear class="h-16 w-auto mx-auto mt-4 mb-6" />
                <h2 class="text-lg font-semibold mb-2">Bannerbear</h2>
                <p>API for social media images</p>
              </div>
            </a>
            <a
              class="w-full sm:w-1/2 lg:w-1/3 p-4 group cursor-pointer"
              href="https://simpleanalytics.com/ai/nomadlist.com"
              target="_blank"
            >
              <div
                class="bg-[#ffd9d8] dark:bg-gray-700 p-4 rounded-lg transform transition-transform group-hover:scale-105"
              >
                <LogosNomadList class="h-20 w-auto mx-auto mt-2 mb-4" />

                <h2 class="text-lg font-semibold mb-2">Nomad List</h2>
                <p>Find cities to live remotely</p>
              </div>
            </a>
          </div>
        </div>

        <div class="mt-20 text-center">
          <StartTrial />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, nextTick, computed } from "vue";
import BackgroundChart from "~/components/images/BackgroundChart.vue";

definePageMeta({
  title: "Simple Analytics' AI",
  description:
    "Chat with your analytics data and generate insights and beautiful charts.",
});

const tColorsRed = [`<span class='text-red-500 dark:text-red-600'>`, `</span>`];

const examples = [
  {
    id: "1",
    title: "Insights",
    description: "Get insights into your traffic",
    chat: [
      {
        type: "question",
        text: "Give me insights into my traffic last month",
      },
      {
        type: "answer",
        html: `<p>Last month (October 2023), your website simpleanalytics.com had the following traffic:</p>
<ul>
<li>Pageviews: 36,593</li>
<li>Visitors: 21,798</li>
</ul>

<p>Comparing this to the previous month (September 2023), where you had:</p>
<ul>
<li>Pageviews: 46,085</li>
<li>Visitors: 29,743</li>
</ul>

<p>There has been a decrease in traffic from September to October:</p>

<ul>
<li>Pageviews decreased by 9,492 (-20.62%)</li>
<li>Visitors decreased by 7,945 (-26.71%)</li>
</ul>

<p>Based on this data, you might want to analyze what events took place between September and October that may have influenced the drop in traffic. You could consider examining changes to your marketing strategies, any site issues, or external factors such as seasonality or industry trends. Investigating the cause and then addressing it would be beneficial to regain the traction lost.</p>

<p>Would you like to dive deeper into specifics, like page performance, traffic sources, or visitor demographics?</p>`,
      },
      {
        type: "question",
        text: "Yes, show me top 5 growing traffic sources.",
      },
      {
        type: "answer",
        html: `<p>Based on the data from Simple Analytics, here are the top 5 growing traffic sources during the period from 2023-10-29 to 2023-11-29 compared to the previous period:</p>
<ol>
<li><strong>Google</strong>:<ul>
<li>Visitors increased from 4864 to 5712 (+17.45%)</li>
</ul>
</li>
<li><strong>Twitter</strong>:<ul>
<li>Visitors increased from 1032 to 2899 (+181.01%)</li>
</ul>
</li>
<li><strong>Bing</strong>:<ul>
<li>Visitors increased from 226 to 293 (+29.65%)</li>
</ul>
</li>
<li><strong>Docs (Simple Analytics Documentation)</strong>:<ul>
<li>Visitors increased from 227 to 269 (+18.50%)</li>
</ul>
</li>
<li><strong>Reddit</strong>:<ul>
<li>Visitors increased from 211 to 259 (+22.75%)</li>
</ul>
</li>
</ol>
<p>These sources are the ones that showed the most growth in traffic when comparing the last month&#39;s data with the data from the month before. It would be beneficial for your website to focus on these sources and possibly increase marketing efforts or engage more with the audience coming from these channels.</p>`,
      },
    ],
  },
  {
    id: "2",
    title: "Comparing visitors",
    description: "Comparing visitors between weeks",
    chat: [
      {
        type: "question",
        text: "Compare my visitors between this week and last week",
      },
      {
        type: "answer",
        html: `<p>For the current week (2023-11-21 to 2023-11-27), your website simpleanalytics.com had 9,279 pageviews and 5,492 visitors. Comparing this to the previous week (2023-11-14 to 2023-11-20), there was a slight decrease with the previous week having 9,630 pageviews and 5,717 visitors.</p>

<p>Here's a summary of the comparison:</p>
<ul>
  <li>Pageviews decreased by 351 (from 9,630 to 9,279).</li>
  <li>Visitors decreased by 225 (from 5,717 to 5,492).</li>
</ul>

<p>Based on this data, you may want to investigate any recent changes that might have impacted visitor engagement or consider marketing strategies to boost traffic if this is part of a larger trend.</p>`,
      },
    ],
  },
  {
    id: "3",
    title: "Traffic sources",
    description: "Group traffic sources",
    chat: [
      {
        type: "question",
        text: "Create a Pie chart of traffic sources grouped by “organic”, “social”, and “other”",
      },
      {
        type: "answer",
        text: `Here's a pie chart showing the distribution of traffic sources categorized as "Organic," "Social," and "Other":`,
        image: "/images/pie-chart.png",
      },
    ],
  },

  // - Give me insights into my traffic last month
];

const selectedExample = ref();
const displayChats = ref([]);
const typingText = ref(""); // Holds the current state of the typing animation
const textInput = ref(null); // Ref to the text input element

const displayChatsLength = computed(() => displayChats.value.length);

const typeText = async (text) => {
  typingText.value = ""; // Reset typing text
  let delay = Math.max(40, Math.random() * 60); // Initial delay for the first word

  // Firefox does not support scrollIntoViewIfNeeded, let's fallback
  if (document.documentElement.scrollIntoViewIfNeeded) {
    textInput.value.scrollIntoViewIfNeeded(false);
  } else {
    textInput.value.scrollIntoView({ behavior: "smooth", block: "end" });
  }

  for (const [index, char] of Array.from(text).entries()) {
    typingText.value += char;

    // Check for space or start of text to set new delay
    if (char === " " || index === 0) {
      delay = Math.max(15, Math.random() * 60);
    }

    await new Promise((resolve) => setTimeout(resolve, delay));
  }

  typingText.value = ""; // Reset typing text
};

const addChatsSequentially = async () => {
  if (!selectedExample.value || !selectedExample.value.chat) return;

  displayChats.value = []; // Reset the display list

  for (const chatItem of selectedExample.value.chat) {
    if (chatItem.type === "question") {
      // Add timeout for the transition to finish
      await new Promise((resolve) => setTimeout(resolve, 210));

      await typeText(chatItem.text);
      displayChats.value.push(chatItem);
    } else {
      const delay = displayChats.value.length === 0 ? 100 : 1500;
      await new Promise((resolve) => setTimeout(resolve, delay));
      displayChats.value.push(chatItem);
    }
  }
};

watch(selectedExample, (newVal, oldVal) => {
  if (newVal !== oldVal) {
    addChatsSequentially();
  }
});

// Scroll to button of last message
watch(
  displayChatsLength,
  (newVal, oldVal) => {
    if (newVal !== oldVal && newVal) {
      nextTick(() => {
        const lastChat = document.querySelector(
          "ul.chat-list li.answer:last-child",
        );

        if (!lastChat) return;

        // Detect if the last chat is visible
        const lastChatRect = lastChat.getBoundingClientRect();
        const lastChatVisible =
          lastChatRect.top >= 0 &&
          lastChatRect.left >= 0 &&
          lastChatRect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
          lastChatRect.right <=
            (window.innerWidth || document.documentElement.clientWidth);

        if (!lastChatVisible) {
          lastChat.scrollIntoView({ behavior: "smooth", block: "end" });
        }
      });
    }
  },
  { deep: true },
);
</script>

<style>
div.prose p + ul {
  margin-top: -1rem;
}
</style>
