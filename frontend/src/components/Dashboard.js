import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dashboard() {
  const [collaterals, setCollaterals] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchCollaterals = async () => {
      const response = await axios.get('/api/collateral', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setCollaterals(response.data);
    };
    fetchCollaterals();
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    const response = await axios.post('/api/collateral', { title, content }, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
    setCollaterals([...collaterals, response.data]);
    setTitle('');
    setContent('');
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <form onSubmit={handleCreate}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button type="submit">Create</button>
      </form>
      <h3>Your Collaterals</h3>
      <ul>
        {collaterals.map((collateral) => (
          <li key={collateral.id}>{collateral.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
