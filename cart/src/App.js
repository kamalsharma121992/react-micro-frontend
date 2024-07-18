import React from 'react'
import { faker } from '@faker-js/faker';

export default function App() {
  return (
    <div>This is faker number {faker.number.int()}</div>
  )
}
