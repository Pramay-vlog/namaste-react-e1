import { render, screen } from '@testing-library/react';
import Contact from '../components/Contact';
import "@testing-library/jest-dom"

describe('Contact', () => {
    test('Render contact page component', () => {
        render(<Contact />);

        expect(screen.getByText('Contact')).toBeInTheDocument();
    })
})