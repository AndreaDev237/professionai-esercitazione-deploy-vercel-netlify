import { Handler } from '@netlify/functions'
import { getItems, createItem, updateItem, deleteItem } from '../base_api/api'

/* Inserisci la struttura della funzione di Netlify =>*/ {
  const headers = { 'Access-Control-Allow-Origin': '*' }
  const method = event.httpMethod

  if (method === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        ...headers,
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      },
      body: ''
    }
  }

  if (method === 'GET') {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(getItems())
    }
  }

 // implementa il resto dei metodi!
}

export { /*ESPORTA LA FUNZIONE*/ }
