import { describe, it, expect } from 'vitest';
import { getAllByText, getByText, render, renderWithRouter, screen, waitFor } from '../utils/test-utils';
import App from '../App'
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ErrorFallback } from '../components/error-container';


// describe('App', () => {
//     it('renders', async () => {
//         const result = renderWithRouter(<App />)
//         // console.log(result)
//         // check that there is initial load when the app loads
//         await waitFor(() => expect(screen.findAllByText(/loading/i)).toBeInTheDocument())
//         // //check that it renders the sidebar which contains users and games
//         // await waitFor(() => expect(result.findAllByText(/user/i)).toBeInTheDocument())
//         // await waitFor(() => expect(result.findAllByText(/games/i)).toBeInTheDocument())
//         // await waitFor(() => expect(result.findAllByText(/Britannidsdsds/i)).toBeInTheDocument())

//     });
// });


describe('App', () => {
    it('renders without errors', async () => {
        const { container } = renderWithRouter(<App />)
        const sidebar = screen.getByTestId("sidebar");

        // Check if the container element is a valid HTMLElement
        if (container instanceof HTMLElement) {
            expect(sidebar).toBeInTheDocument()
            await waitFor(() => expect(ErrorFallback).not.toBeInTheDocument())
        } else {
            fail('Invalid container element')
        }
    })
})
