import React from 'react';
import { screen,render } from '@testing-library/react';
import '@testing-library/jest-dom';
import WeatherInformation from '../components/WeatherInformation';


jest.mock('../helpers/weatherInformation', () => ({
  data: {
    forecast: [
      {
        date: "Fri 27 November",
        description: "Sunny",
        icon:'test',
        temperature: { min: "10", max: "'25" },
        wind: "10",
        humidity: 70,
      },
    ],
    current: {
      date: "Fri 27 November",
      description: "Sunny",
      icon: 'test',
      temperature: { current: "25", min: 20, max: 25 },
      wind: "10",
      humidity: 70,
    },
  }
}));

describe('WeatherInformation Component', () => {
  test('renders weather information correctly', () => {
    const { getByText } = render(<WeatherInformation />);
    
    expect(getByText('Weather Information')).toBeInTheDocument();
    expect(getByText('Fri 27 November')).toBeInTheDocument();
    expect(getByText('25 C')).toBeInTheDocument();
    expect(screen.queryAllByText('Sunny').length).toBeGreaterThan(0);
    expect(getByText('10')).toBeInTheDocument();
    expect(getByText('70')).toBeInTheDocument();
    
  });
});