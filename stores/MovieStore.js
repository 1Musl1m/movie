import {defineStore} from 'pinia'

export const useMovieStore = defineStore('movieStore', {
     state: () => ({
        movies: [
            {
                id: 1,
                name: 'Пассажиры',
                title: "Молодые пациенты с диагнозом фиб...",
                path: '/films__img/Passengers.jpg',
                isWatched: true
            },
            {
                id: 2,
                name: 'Забвение',
                title: 'Молодые пациенты с диагнозом фиб...',
                path: '/films__img/Zabvenie.jpg',
                isWatched: true
            },
            {
                id: 3,
                name: 'В метре друг от друга',
                title: 'Молодые пациенты с диагнозом фиб...',
                path: '/films__img/health.jpg',
                isWatched: false
            },
            {
                id: 4,
                name: 'Оно',
                title: 'Молодые пациенты с диагнозом фиб...',
                path: '/films__img/Оно.jpg',
                isWatched: false
            },
            {
                id: 5,
                name: 'Пассажиры',
                title: "Молодые пациенты с диагнозом фиб...",
                path: '/films__img/Passengers.jpg',
                isWatched: false
            },
            {
                id: 6,
                name: 'Забвение',
                title: 'Молодые пациенты с диагнозом фиб...',
                path: '/films__img/Zabvenie.jpg',
                isWatched: false
            },
            {
                id: 7,
                name: 'В метре друг от друга',
                title: 'Молодые пациенты с диагнозом фиб...',
                path: '/films__img/health.jpg',
                isWatched: false
            },
            {
                id: 8,
                name: 'Оно',
                title: 'Молодые пациенты с диагнозом фиб...',
                path: '/films__img/Оно.jpg',
                isWatched: false
            },
            {
                id: 9,
                name: 'Оно',
                title: 'Молодые пациенты с диагнозом фиб...',
                path: '/films__img/Оно.jpg',
                isWatched: false
            },
            {
                id: 10,
                name: 'Оно',
                title: 'Молодые пациенты с диагнозом фиб...',
                path: '/films__img/Оно.jpg',
                isWatched: false
            },
            {
                id: 11,
                name: 'Оно',
                title: 'Молодые пациенты с диагнозом фиб...',
                path: '/films__img/Оно.jpg',
                isWatched: false
            },
            {
                id: 12,
                name: 'Оно',
                title: 'Молодые пациенты с диагнозом фиб...',
                path: '/films__img/Оно.jpg',
                isWatched: false
            },
            {
                id: 13,
                name: 'Оно',
                title: 'Молодые пациенты с диагнозом фиб...',
                path: '/films__img/Оно.jpg',
                isWatched: false
            },
            {
                id: 14,
                name: 'Оно',
                title: 'Молодые пациенты с диагнозом фиб...',
                path: '/films__img/Оно.jpg',
                isWatched: false
            },
            {
                id: 15,
                name: 'Оно',
                title: 'Молодые пациенты с диагнозом фиб...',
                path: '/films__img/Оно.jpg',
                isWatched: false
            },
        ]
     }),
     actions: {
        //список фильмов с сервера
        async fetchMovies() {
            const response = await fetch('/api/movie')
            this.movies = await response.json()
        },

        //находим фильм по slug
        findMovieById(id) {
            return this.movies.find(movie => movie.id === id)
        },

        findMovieBySlug(slug) {
            return this.movies.find(movie => movie.slug === slug)
        }
     }
})