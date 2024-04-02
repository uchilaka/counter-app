import React from 'react'
import { act, waitFor, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import App from './App'

describe('<App />', () => {
  xit('should render App component', () => {
    render(<App />)
    expect(screen.getByText('Items')).toBeInTheDocument()
  })

  xit('should increment the counter', () => {
    render(<App />)
    userEvent.click(screen.getByText('+'))
    expect(screen.getByText('1')).toBeInTheDocument()
  })

  xit('should decrement the counter', () => {
    render(<App />)
    userEvent.click(screen.getByText('-'))
    expect(screen.getByText('Zero')).toBeInTheDocument()
  })

  it('should reset the counter', async () => {
    render(<App />)
    const cartRows = screen.queryAllByRole('row')
    const totalCounters = screen.getByTestId('total-counters')
    expect(totalCounters).toHaveTextContent('0')

    act(() => userEvent.click(cartRows[0].querySelector('.increment-btn')))

    // await waitFor(() => expect(totalCounters).toHaveTextContent('1'))
    expect(totalCounters).toHaveTextContent('1')

    act(() => userEvent.click(screen.getByTestId('refresh-button')))

    // await waitFor(() => expect(totalCounters).toHaveTextContent('0'))
    expect(totalCounters).toHaveTextContent('0')
  })

  xit('should delete the counter', () => {
    render(<App />)
    userEvent.click(screen.getByText('Delete'))
    expect(screen.queryByText('Zero')).not.toBeInTheDocument()
  })

  xit('should restart the counter', () => {
    render(<App />)
    userEvent.click(screen.getByText('Restart'))
    expect(screen.getByText('Items')).toBeInTheDocument()
  })
})