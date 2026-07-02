import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, test } from 'vitest'
import { BrowserRouter } from 'react-router-dom'

import Blog from './Blog'

describe('Blog', () => {
  const blog = {
    title: 'Testing the testing',
    url: 'http://example.com',
    author: 'Ted Tester',
    likes: 10,
  }

  test('renders only title and author by default', () => {
    render(
      <BrowserRouter>
        <Blog blog={blog} />
      </BrowserRouter>
    )

    expect(
      screen.getByText('Testing the testing', { exact: false })
    ).toBeDefined()
    expect(
      screen.getByText('Ted Tester', { exact: false })
    ).toBeDefined()
  })
})