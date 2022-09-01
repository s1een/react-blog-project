### About

- This web application was created in the process of learning the React library and using it with the Redux state manager
- The application can be tested from the [link](https://s1een.github.io/react-blog-project/ "link")

# Simple Blog Project

![](https://itproger.com/img/courses/1648997560.png)

## Technologies used in the development:

- [![React][React.js]][React-url]
- [![Redux][Redux.js]][Redux-url]
- [![Bootstrap][Bootstrap.com]][Bootstrap-url]
- [![npm][npm.com]][npm-url]

## React

The app was built in React v.18.2.0.

`$ npx create-react-app react-blog-project`

## Redux + Async Redux library

Creating a store:

```javascript
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
```
Async Redux:

```javascript
// Fetch Posts
export function postsLoad() {
  return async (dispatch) => {
    dispatch(loaderOn());
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=10"
      );
      const data = await response.json();
      const newData = data.map((el, index) => {
        return {
          ...el,
          avatar: `https://robohash.org/${index + 1}`,
        };
      });
      setTimeout(() => {
        dispatch({
          type: POSTS_LOAD,
          data: newData,
        });
        dispatch(loaderOff());
      }, 2000);
    } catch (error) {
      console.log(error);
      dispatch(loaderOff());
    }
  };
}

```

## React Navigation

```javascript
function AppRouter() {
  const login = useSelector((state) => state.appReducer.user.login);
  return (
    <Routes>
      <Route
        path="/react-blog-project"
        element={login ? <MainPage /> : <PostsPage />}
      />
      {!login && (
        <>
          <Route path="posts">
            <Route path=":id" element={<PostPage />} />
            <Route path="" element={<PostsPage />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </>
      )}
      <Route path="/about" element={<About />} />
      <Route path="*" element={<MainPage />} />
    </Routes>
  );
}
```

## Reducers

rootReducer: 

```javascript
export const rootReducer = combineReducers({
  postsReducer,
  appReducer,
});
```
postReducer: 

```javascript
const initialState = {
  posts: [],
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_CREATE:
      return {
        ...state,
        posts: [...state.posts, action.data],
      };
    case POST_EDIT:
      return {
        ...state,
        posts: [
          ...state.posts.map((el) =>
            el.id == action.data.id
              ? { ...el, title: action.data.title, body: action.data.body }
              : el
          ),
        ],
      };
    case POST_DELETE:
      const id = action.data;
      const { posts } = state;
      const itemIndex = posts.findIndex((res) => res.id === id);
      const nextPost = [
        ...posts.slice(0, itemIndex),
        ...posts.slice(itemIndex + 1),
      ];
      return { ...state, posts: nextPost };
    case POSTS_LOAD:
      const newPosts = action.data.map((el, index) => {
        return {
          id: el.id,
          userId: index,
          title: el.title,
          body: el.body,
          avatar: el.avatar,
        };
      });
      return {
        ...state,
        posts: newPosts,
      };
    default:
      return state;
  }
};

```
appReducer: 

```javascript
const initialState = {
  loading: false,
  modal: false,
  edit: false,
  user: {
    email: localStorage.getItem("email") || "",
    password: localStorage.getItem("password") || "",
    login: localStorage.getItem("email") ? false : true,
  },
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ON:
      localStorage.setItem("email", action.data.email);
      localStorage.setItem("password", action.data.password);
      return {
        ...state,
        user: {
          ...state.user,
          email: action.data.email,
          password: action.data.password,
          login: false,
        },
      };
    case LOGIN_OFF:
      localStorage.removeItem("email");
      localStorage.removeItem("password");
      return {
        ...state,
        user: {
          ...state.user,
          email: "",
          password: "",
          login: true,
        },
      };
    case LOADER_DISPLAY_ON:
      return {
        ...state,
        loading: true,
      };
    case LOADER_DISPLAY_OFF:
      return {
        ...state,
        loading: false,
      };
    case MODAL_DISPLAY_OFF:
      return {
        ...state,
        modal: false,
      };
    case MODAL_DISPLAY_ON:
      return {
        ...state,
        modal: true,
      };
    case MODAL_EDIT_ON:
      return {
        ...state,
        edit: true,
      };
    case MODAL_EDIT_OFF:
      return {
        ...state,
        edit: false,
      };
    default:
      return state;
  }
};

```

## Acknowledgments
Resources that helped me in development.

* [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
* [Malven's Grid Cheatsheet](https://grid.malven.co/)
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)
* [React Icons](https://react-icons.github.io/react-icons/search)
* [JSON PlaceHolder](https://jsonplaceholder.typicode.com/)
* [RoboHash](https://robohash.org/)

## My Links
- [![linkedin][linkedin.com]][linkedin-url]
- [![telegram][telegram.com]][telegram-url]
- [![portfolio][portfolio.com]][portfolio-url]
<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[product-screenshot]: images/main.png
[React.js]: https://img.shields.io/badge/React_18.2.0-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-20232A?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[Redux.js]: https://img.shields.io/badge/Redux_4.2.0-20232A?style=for-the-badge&logo=redux&logoColor=764abc
[Redux-url]: https://redux.js.org/
[npm.com]: https://img.shields.io/badge/NPM-20232A?style=for-the-badge&logo=npm&logoColor=764abc
[npm-url]: https://www.npmjs.com/
[linkedin.com]: https://img.shields.io/badge/LinkedIn-20232A?style=for-the-badge&logo=linkedin&logoColor=wgute
[linkedin-url]: https://www.linkedin.com/in/dmitry-morozov-082288228/
[telegram.com]: https://img.shields.io/badge/Telegram-20232A?style=for-the-badge&logo=telegram&logoColor=white
[telegram-url]: https://t.me/r3ason_why
[portfolio.com]: https://img.shields.io/badge/Portfolio-20232A?style=for-the-badge&logo=github&logoColor=white
[portfolio-url]: https://s1een.github.io/my_cv_site/

