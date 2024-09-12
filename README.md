# Using Redux and createAsyncThunk in React
> This project demonstrates the use of Redux for state management in a React app, specifically showcasing how to handle asynchronous operations like fetching data using Redux Toolkit's `createAsyncThunk` method.

### 1. Setting Up Redux:
- Redux is used to manage the global state of the application.
- We configure the Redux store in store.js and define slices of the state in slice files (e.g., postsSlice.js).

### 2. Handling Asynchronous Logic with `createAsyncThunk`:
- `createAsyncThunk` simplifies the process of writing async logic like fetching data from an API.
- In this project, we use `createAsyncThunk` to fetch a list of posts from an API, manage loading, success, and error states efficiently.
#### Example in postsSlice.js:
```js
export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
    const response = await fetch('https://api.example.com/posts');
    return response.json();
  }
);
```
- Pending: While the API request is ongoing, the status is set to 'loading'.
- Fulfilled: Once the request is successful, the response is stored in the Redux state.
- Rejected: If an error occurs, the error state is updated.
### 3. Accessing Redux State in Components:
In your React components, you can access the state and dispatch actions using useSelector and useDispatch:

```javascript
const { status, posts, error } = useSelector((state) => state.posts);
const dispatch = useDispatch();

useEffect(() => {
  dispatch(fetchPosts());
}, [dispatch]);
```
This approach keeps the components simple and the async logic organized in Redux.

