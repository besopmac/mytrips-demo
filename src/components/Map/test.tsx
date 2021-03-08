import { render, screen } from '@testing-library/react'

import Map from '.'

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />)

    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    ).toBeInTheDocument()
  })

  it('should render with the marker in correct place', () => {
    const place = {
      id: '1',
      name: 'Gramado',
      slug: 'gramado',
      location: {
        latitude: 0,
        longitude: 0
      }
    }

    const placeTwo = {
      id: '2',
      name: 'Cambará do Sul',
      slug: 'cambara',
      location: {
        latitude: 137,
        longitude: 23
      }
    }

    render(<Map places={[place, placeTwo]} />)

    expect(screen.getByTitle(/gramado/i)).toBeInTheDocument()
    expect(screen.getByTitle(/cambará do sul/i)).toBeInTheDocument()
  })
})
