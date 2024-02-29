<template>
    <div>
        <nav class="bg-white border-gray-200 dark:bg-gray-900">
            <div class="flex flex-wrap items-center justify-between py-11 px-20">
                <NuxtLink to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Ashanti</span>
                </NuxtLink>
                <div>
                    <ul class="flex items-start gap-14 font-medium rtl:space-x-reverse
                                md:hidden">
                        <li>
                            <NuxtLink to="/" class="block px-3 text-2xl text-white hover:text-sky-600 active:text-sky-900 transition-colors" aria-current="page">
                                Главная
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/news" class="block px-3 text-2xl text-white hover:text-sky-600 active:text-sky-900 transition-colors">
                                Новости
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/about" class="block px-3 text-2xl text-white hover:text-sky-600 active:text-sky-900 transition-colors">
                                О нас
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <ButtonsDashboardButton/>
                </div>
            </div>
        </nav>
    </div>
</template>