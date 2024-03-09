![](https://github.com/Valery-Abmetka/kinopoisk-for-aston/actions/workflows/github-actions.yml/badge.svg) [![Netlify Status](https://api.netlify.com/api/v1/badges/5bbd759c-9db9-42e3-8204-bd5f4941254b/deploy-status)](https://main--kinopoisk-for-aston.netlify.app/)

# <h1 align="center">Kinopoisk for Aston</h1>

> Предметная область: приложение для поиска фильмов.
> Использованное API: в приложении используется API <https://kinopoiskapiunofficial.tech>.
> Основной функционал:

1. Регистрация и авторизация: пользователи могут создать учетную запись и авторизоваться в приложении.
2. Поиск фильмов: приложение предоставляет возможность быстрого поиска фильмов по их ключевым словам.
3. Избранные фильмы: пользователи могут добавлять и удалять фильмы в список избранных для удобного доступа к ним в будущем.
4. История поиска: приложение сохраняет историю поиска, что помогает пользователю найти фильм, который они искали ранее.
5. Светлая и темная тема: приложение предоставляет пользователям выбор между светлой и темной темами интерфейса.

## **1 уровень (обязательный - необходимый минимум)**

- [x] Реализованы **Требования к функциональности.**
- [x] Для хранения учетных записей пользователей, их Избранного и Истории поиска, использовал **Firebase**. Ссылка на [код](https://github.com/Valery-Abmetka/kinopoisk-for-aston/blob/main/src/firebase.ts)
      **React**
- [x] **Пишем функциональные компоненты c хуками** в приоритете над классовыми.
- [x] Есть разделение на **умные и глупые компоненты** Ссылка на код [Глупый компонент](https://github.com/Valery-Abmetka/kinopoisk-for-aston/blob/main/src/entities/Card/ui/Card.tsx) [умный](https://github.com/Valery-Abmetka/kinopoisk-for-aston/blob/main/src/features/favorites/favoritesCard.tsx)
- [x] Есть **рендеринг списков** Ссылка на [код](https://github.com/Valery-Abmetka/kinopoisk-for-aston/blob/main/src/widgest/Main/ui/Main.tsx)
- [x] Реализована хотя бы одна **форма** Использовал [React Hook Form](https://react-hook-form.com/) Ссылка на [код](https://github.com/Valery-Abmetka/kinopoisk-for-aston/blob/main/src/shared/UI/Form/Form.tsx)
- [x] Есть применение **Контекст API** Ссылка на [код](https://github.com/Valery-Abmetka/kinopoisk-for-aston/blob/main/src/app/providers/context/themeContext.tsx)
- [x] Есть применение **предохранителя** Ссылка на [код](https://github.com/Valery-Abmetka/kinopoisk-for-aston/blob/main/src/app/App.tsx)
- [x] Есть хотя бы один **кастомный хук** Ссылка на [код](https://github.com/Valery-Abmetka/kinopoisk-for-aston/tree/main/src/shared/hooks)
- [x] Хотя бы несколько компонентов используют **PropTypes** Ссылка на [код](https://github.com/Valery-Abmetka/kinopoisk-for-aston/blob/main/src/entities/Card/ui/Card.tsx) и [второй](https://github.com/Valery-Abmetka/kinopoisk-for-aston/blob/main/src/shared/UI/navbar/authNavBar/AuthNavBar.tsx)
- [x] Поиск не должен триггерить много запросов к серверу (**debounce**) Ссылка на [код](https://github.com/Valery-Abmetka/kinopoisk-for-aston/blob/main/src/shared/hooks/useDebounce.ts)
- [x] Есть применение **lazy + Suspense** Ссылка на код [lazy](https://github.com/Valery-Abmetka/kinopoisk-for-aston/blob/main/src/app/providers/router/router.tsx) [Suspense](https://github.com/Valery-Abmetka/kinopoisk-for-aston/blob/main/src/main.tsx)

**Redux**

- [x] Используем **Modern Redux with Redux Toolkit** Ссылка на [код](https://github.com/Valery-Abmetka/kinopoisk-for-aston/blob/main/src/app/providers/store/store.tsx)
- [x] Используем **слайсы** Ссылка на [код](https://github.com/Valery-Abmetka/kinopoisk-for-aston/tree/main/src/shared/reducers/Authorization/slice)
- [x] Есть хотя бы одна **кастомная мидлвара** Ссылка на [код](https://github.com/Valery-Abmetka/kinopoisk-for-aston/tree/main/src/app/providers/store/middlewares)
- [x] Используется **RTK Query** Ссылка на [код](https://github.com/Valery-Abmetka/kinopoisk-for-aston/blob/main/src/shared/api/kinopoiskApi/kinopoiskApi.ts)
- [x] Используется **Transforming Responses** Ссылка на [код](https://github.com/Valery-Abmetka/kinopoisk-for-aston/blob/main/src/shared/api/kinopoiskApi/kinopoiskApi.ts)

### **2 уровень (необязательный)**

- [x] Использование **TypeScript** Ссылка на [код](https://github.com/Valery-Abmetka/kinopoisk-for-aston/blob/main/src/shared/api/kinopoiskApi/transformResponse/transformResponse.ts)
- [x] Использование **Firebase** Ссылка на [код](https://github.com/Valery-Abmetka/kinopoisk-for-aston/blob/main/src/firebase.ts)
- [x] Настроен **CI/CD** Бейджи в шапке Readme Ссылка на [код](https://github.com/Valery-Abmetka/kinopoisk-for-aston/tree/main/.github/workflows)
- [x] Реализована **виртуализация списков** На странице поиска по умолчанию запрашивается только 20 карточек если долистать до конца то подгрузяться еще карточки
      Ссылка на [код](https://github.com/Valery-Abmetka/kinopoisk-for-aston/blob/main/src/pages/SearchPage/ui/SearchPage.tsx) 18 строчка
- [x] Используются **мемоизированные селекторы** Использовал но не было того что можно закешировать Ссылка на [код](https://github.com/Valery-Abmetka/kinopoisk-for-aston/blob/main/src/shared/reducers/History/selectors/HistorySelectors.ts)
- [x] Связь UI и бизнес-логики построена не через команды, а через **события**
      Напрмер ButtonAddFavorites используется как событие а его хендлер как реакция на это событие
      Он не знает только то что его нажали а хендлер уже в хуке обрабатывает это событие
      Ссылка на [код](https://github.com/Valery-Abmetka/kinopoisk-for-aston/blob/main/src/entities/Card/ui/Card.tsx)

### **Дополнительно**

- [x] Проект собран при помощи Vite
- [x] Для работы с формами использовалась библиотека react-hook-form
- [x] Использовалась библиотека classnames для удобства работы с классами
- [x] При работе со стилями использовались CSS Modules
- [x] Кодовая база организована по методологи Feature-Sliced Design
- [x] Использован react-icons
- [x] Использована React-error-boundery
