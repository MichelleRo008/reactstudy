"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState, useEffect } from "react";
import About from "../components/About";
import Contact from "../components/Contact";

export default function Home() {
  const [count, setCount] = useState(0);
  const [bgColor, setBgColor] = useState('white');
  const [currentPage, setCurrentPage] = useState('home');
  const [currentTime, setCurrentTime] = useState(new Date());

  const colors = ['white', 'lightblue', 'lightgreen', 'lightcoral', 'lightyellow', 'lightpink'];
  
  const changeColor = () => {
    const currentIndex = colors.indexOf(bgColor);
    const nextIndex = (currentIndex + 1) % colors.length;
    setBgColor(colors[nextIndex]);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return (
          <>
            <Image
              className={styles.logo}
              src="/next.svg"
              alt="Next.js logo"
              width={180}
              height={38}
              priority
            />
            <ol>
              <li>
                Get started by editing <code>src/app/page.tsx</code>.
              </li>
              <li>Save and see your changes instantly.</li>
            </ol>

            <div style={{ margin: '20px 0', textAlign: 'center', backgroundColor: bgColor, padding: '20px', borderRadius: '10px', transition: 'background-color 0.3s ease' }}>
              <h2>计数器: {count}</h2>
              <button onClick={() => setCount(count + 1)} style={{ margin: '0 10px', padding: '10px 20px' }}>
                增加
              </button>
              <button onClick={() => setCount(count - 1)} style={{ margin: '0 10px', padding: '10px 20px' }}>
                减少
              </button>
              <br />
              <button onClick={changeColor} style={{ margin: '10px', padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px' }}>
                改变颜色
              </button>
            </div>

            {/* 数据表格 */}
            <div style={{ margin: '30px 0', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '10px' }}>
              <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>用户数据表格</h2>
              <table style={{ 
                width: '100%', 
                borderCollapse: 'collapse',
                backgroundColor: 'white',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}>
                <thead>
                  <tr style={{ backgroundColor: '#007bff', color: 'white' }}>
                    <th style={{ padding: '12px 15px', textAlign: 'left', fontWeight: 'bold' }}>ID</th>
                    <th style={{ padding: '12px 15px', textAlign: 'left', fontWeight: 'bold' }}>姓名</th>
                    <th style={{ padding: '12px 15px', textAlign: 'left', fontWeight: 'bold' }}>邮箱</th>
                    <th style={{ padding: '12px 15px', textAlign: 'left', fontWeight: 'bold' }}>部门</th>
                    <th style={{ padding: '12px 15px', textAlign: 'left', fontWeight: 'bold' }}>状态</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: '12px 15px' }}>001</td>
                    <td style={{ padding: '12px 15px' }}>张三</td>
                    <td style={{ padding: '12px 15px' }}>zhangsan@example.com</td>
                    <td style={{ padding: '12px 15px' }}>技术部</td>
                    <td style={{ padding: '12px 15px' }}>
                      <span style={{ 
                        padding: '4px 8px', 
                        backgroundColor: '#28a745', 
                        color: 'white', 
                        borderRadius: '4px', 
                        fontSize: '12px' 
                      }}>
                        在职
                      </span>
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #eee', backgroundColor: '#f9f9f9' }}>
                    <td style={{ padding: '12px 15px' }}>002</td>
                    <td style={{ padding: '12px 15px' }}>李四</td>
                    <td style={{ padding: '12px 15px' }}>lisi@example.com</td>
                    <td style={{ padding: '12px 15px' }}>销售部</td>
                    <td style={{ padding: '12px 15px' }}>
                      <span style={{ 
                        padding: '4px 8px', 
                        backgroundColor: '#28a745', 
                        color: 'white', 
                        borderRadius: '4px', 
                        fontSize: '12px' 
                      }}>
                        在职
                      </span>
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: '12px 15px' }}>003</td>
                    <td style={{ padding: '12px 15px' }}>王五</td>
                    <td style={{ padding: '12px 15px' }}>wangwu@example.com</td>
                    <td style={{ padding: '12px 15px' }}>财务部</td>
                    <td style={{ padding: '12px 15px' }}>
                      <span style={{ 
                        padding: '4px 8px', 
                        backgroundColor: '#ffc107', 
                        color: 'white', 
                        borderRadius: '4px', 
                        fontSize: '12px' 
                      }}>
                        请假
                      </span>
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #eee', backgroundColor: '#f9f9f9' }}>
                    <td style={{ padding: '12px 15px' }}>004</td>
                    <td style={{ padding: '12px 15px' }}>赵六</td>
                    <td style={{ padding: '12px 15px' }}>zhaoliu@example.com</td>
                    <td style={{ padding: '12px 15px' }}>人事部</td>
                    <td style={{ padding: '12px 15px' }}>
                      <span style={{ 
                        padding: '4px 8px', 
                        backgroundColor: '#28a745', 
                        color: 'white', 
                        borderRadius: '4px', 
                        fontSize: '12px' 
                      }}>
                        在职
                      </span>
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: '12px 15px' }}>005</td>
                    <td style={{ padding: '12px 15px' }}>孙七</td>
                    <td style={{ padding: '12px 15px' }}>sunqi@example.com</td>
                    <td style={{ padding: '12px 15px' }}>市场部</td>
                    <td style={{ padding: '12px 15px' }}>
                      <span style={{ 
                        padding: '4px 8px', 
                        backgroundColor: '#dc3545', 
                        color: 'white', 
                        borderRadius: '4px', 
                        fontSize: '12px' 
                      }}>
                        离职
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        );
    }
  };

  return (
    <div className={styles.page}>
      {/* 时间显示 */}
      <div style={{
        backgroundColor: '#f8f9fa',
        padding: '10px 0',
        textAlign: 'center',
        borderBottom: '1px solid #ddd',
        position: 'sticky',
        top: 0,
        zIndex: 101
      }}>
        <span style={{ 
          fontSize: '18px', 
          fontWeight: 'bold', 
          color: '#333'
        }}>
          {currentTime.toLocaleString('zh-CN', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            weekday: 'long'
          })}
        </span>
      </div>

      {/* 导航栏 */}
      <nav style={{ 
        backgroundColor: '#333', 
        padding: '15px 0', 
        marginBottom: '20px',
        position: 'sticky',
        top: '50px',
        zIndex: 100
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '20px' 
        }}>
          <button 
            onClick={() => setCurrentPage('home')} 
            style={{ 
              padding: '10px 20px', 
              backgroundColor: currentPage === 'home' ? '#007bff' : 'transparent',
              color: 'white',
              border: '2px solid #007bff',
              borderRadius: '5px',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            首页
          </button>
          <button 
            onClick={() => setCurrentPage('about')} 
            style={{ 
              padding: '10px 20px', 
              backgroundColor: currentPage === 'about' ? '#007bff' : 'transparent',
              color: 'white',
              border: '2px solid #007bff',
              borderRadius: '5px',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            关于我们
          </button>
          <button 
            onClick={() => setCurrentPage('contact')} 
            style={{ 
              padding: '10px 20px', 
              backgroundColor: currentPage === 'contact' ? '#007bff' : 'transparent',
              color: 'white',
              border: '2px solid #007bff',
              borderRadius: '5px',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            联系我们
          </button>
        </div>
      </nav>

      <main className={styles.main}>
        {renderPage()}

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
