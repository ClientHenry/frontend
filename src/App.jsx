// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function App() {
//   const [books, setBooks] = useState([]); // 存储图书列表
//   const [loading, setLoading] = useState(true);
  

//   // 当组件加载时执行
//   useEffect(() => {
//     // 调用后端接口
//     axios.get('http://127.0.0.1:8000/api/books/')
//       .then(response => {
//         setBooks(response.data); // 将获取到的 JSON 数据存入状态
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error("获取数据失败:", error);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <h1>加载中...</h1>;

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>图书管理系统</h1>
//       <ul>
//         {books.map(book => (
//           <li key={book.id}>
//             <strong>{book.title}</strong> - {book.author} ({book.published_date})
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

import axios from 'axios';

// 创建 axios 实例
const api = axios.create({
  // Vite 环境变量，部署到 Vercel 时会在后台配置这个值
  // baseURL: import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000', 
  baseURL: 'https://djangodrf-stil.onrender.com/api/books/',
  timeout: 5000, // 请求超时时间
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
});

export default api;