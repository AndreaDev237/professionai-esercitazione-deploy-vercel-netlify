'use client'
import { useState } from 'react'

type Item = {
  id: string
  name: string
}

export default function Home() {
  const [name, setName] = useState('')
  const [items, setItems] = useState<Item[]>([])

  const API_URL = '/URL/DELLA/API' // <-- INSERISCI QUI IL PERCORSO GIUSTO

  const getItems = async () => {
    const res = await fetch(`${API_URL}`)
    const data = await res.json()
    setItems(data)
  }

  const addItem = async () => {
    const res = await fetch(`${API_URL}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name })
    })
    const data = await res.json()
    setItems(prev => [...prev, data])
    setName('')
  }

  const updateItem = async (id: string) => {
    const newName = prompt("Nuovo nome:")
    if (!newName) return
    const res = await fetch(`${API_URL}?id=${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: newName })
    })
    const data = await res.json()
    setItems(prev => prev.map(item => item.id === id ? data : item))
  }

  const deleteItem = async (id: string) => {
    await fetch(`${API_URL}?id=${id}`, { method: 'DELETE' })
    setItems(prev => prev.filter(item => item.id !== id))
  }

  return (
    <main style={{
      padding: '2rem',
      fontFamily: 'system-ui, sans-serif',
      maxWidth: '700px',
      margin: '0 auto',
      backgroundColor: '#111',
      color: '#f1f1f1',
      minHeight: '100vh'
    }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem', color: '#f9f871' }}>
        Gestione Items
      </h1>

      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
        <input 
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome item"
          style={{
            flex: 1,
            padding: '0.75rem',
            borderRadius: '8px',
            border: '1px solid #666',
            backgroundColor: '#1c1c1c',
            color: '#fff'
          }}
        />
        <button onClick={addItem} style={{
          padding: '0.75rem 1rem',
          backgroundColor: '#00c896',
          color: '#111',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer'
        }}>➕</button>
        <button onClick={getItems} style={{
          padding: '0.75rem 1rem',
          backgroundColor: '#3399ff',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer'
        }}>🔄</button>
      </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {items.map(item => (
          <li key={item.id} style={{
            background: '#222',
            marginBottom: '0.75rem',
            padding: '1rem',
            borderRadius: '10px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxShadow: '0 0 5px #000'
          }}>
            <span style={{ fontSize: '1.1rem' }}>{item.name}</span>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button onClick={() => updateItem(item.id)} style={{
                cursor: 'pointer',
                background: 'transparent',
                border: 'none',
                fontSize: '1.2rem',
                color: '#facc15'
              }}>✏️</button>
              <button onClick={() => deleteItem(item.id)} style={{
                cursor: 'pointer',
                background: 'transparent',
                border: 'none',
                fontSize: '1.2rem',
                color: '#f87171'
              }}>🗑</button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}
