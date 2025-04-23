export interface Item {
  id: string
  name: string
}

let db: Item[] = []

export function getItems() {
  return db
}

export function getItemById(id: string) {
  return db.find(item => item.id === id)
}

export function createItem(data: { name: string }) {
  const newItem = { id: Date.now().toString(), name: data.name }
  db.push(newItem)
  return newItem
}

export function updateItem(id: string, data: { name: string }) {
  const item = db.find(i => i.id === id)
  if (item) item.name = data.name
  return item
}

export function deleteItem(id: string) {
  db = db.filter(item => item.id !== id)
  return true
}
