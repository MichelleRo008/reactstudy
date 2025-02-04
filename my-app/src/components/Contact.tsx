"use client";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`消息已发送！\n姓名: ${formData.name}\n邮箱: ${formData.email}\n消息: ${formData.message}`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center' }}>联系我们</h1>
      
      <div style={{ 
        marginBottom: '30px', 
        padding: '20px', 
        backgroundColor: 'lightgreen', 
        borderRadius: '10px' 
      }}>
        <h3>联系信息</h3>
        <p><strong>电话:</strong> +86 138-0000-0000</p>
        <p><strong>邮箱:</strong> contact@example.com</p>
        <p><strong>地址:</strong> 北京市朝阳区某某街道123号</p>
      </div>

      <form onSubmit={handleSubmit} style={{ 
        backgroundColor: 'lightyellow', 
        padding: '20px', 
        borderRadius: '10px' 
      }}>
        <h3>发送消息</h3>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>
            姓名:
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
            required
          />
        </div>
        
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>
            邮箱:
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
            required
          />
        </div>
        
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="message" style={{ display: 'block', marginBottom: '5px' }}>
            消息:
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            rows={4}
            style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc', resize: 'vertical' }}
            required
          />
        </div>
        
        <button type="submit" style={{ 
          backgroundColor: '#007bff', 
          color: 'white', 
          padding: '10px 20px', 
          border: 'none', 
          borderRadius: '5px',
          cursor: 'pointer'
        }}>
          发送消息
        </button>
      </form>
    </div>
  );
}