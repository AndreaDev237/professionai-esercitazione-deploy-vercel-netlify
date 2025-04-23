  

import { NextRequest, NextResponse } from 'next/server'
import { getItems, createItem, updateItem, deleteItem } from '../base_api/api'

export async function GET(req: NextRequest) {
  return NextResponse.json(getItems())
}

// IMPLEMENTA LE ALTRE FUNZIONI (POST, UPDATE, DELETE)


export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  })
}
