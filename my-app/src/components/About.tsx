export default function About() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>关于我们</h1>
      <p>这是关于页面的内容。</p>
      <div style={{ 
        margin: '20px 0', 
        padding: '20px', 
        backgroundColor: 'lightblue', 
        borderRadius: '10px' 
      }}>
        <h3>公司信息</h3>
        <p>我们是一家专注于技术创新的公司。</p>
        <ul style={{ textAlign: 'left', display: 'inline-block' }}>
          <li>成立时间：2024年</li>
          <li>团队规模：10+人</li>
          <li>主要业务：Web开发</li>
        </ul>
      </div>
    </div>
  );
}