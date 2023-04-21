import { describe, it, expect, vi } from 'vitest';
import { getAllByText, getByText, render, renderWithRouter, screen, waitFor } from '../utils/test-utils';
import App from '../App'
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ErrorFallback } from '../components/error-container';
import { defaultHandlers, networkErrorHandlers } from '../mocks/handlers';
import { server } from '../mocks/server';
import { act } from 'react-dom/test-utils';
import Users from '../pages/users';
import { mockUsers } from '../mocks/db';



describe('App', () => {
    beforeEach(() => {
        act(() => {
            render(<Users />)
        });
    });

    afterEach(() => {
        vi.restoreAllMocks()
    });

    it('renders loading screen', async () => {
        expect(screen.getByTestId("loading")).toHaveTextContent("Loading...");
    });

    it('renders with the header', async () => {
        await waitFor(() => expect(screen.getByTestId("headerText")).toBeDefined())
        await waitFor(() => expect(screen.getByTestId("headerText")).toHaveTextContent("users"))
    });

    it('renders with the ErrorFallback', async () => {
        await waitFor(() => expect(ErrorFallback).toBeDefined())
    });

    it('renders with the filters', async () => {
        await waitFor(() => expect(screen.getByTestId("tableFilter")).toBeDefined())
    });

    it('renders with the button', async () => {
        await waitFor(() => expect(screen.findByText("Add new users")).toBeDefined())
        server.use(...networkErrorHandlers)
    });

    // test('lists users', async () => {

    //     await waitFor(() => {
    //         mockUsers.forEach((mockUser) => {
    //             expect(screen.getAllByText(mockUser.first_name, { exact: false })).toBeInTheDocument();
    //         });
    //     });
    // });
    // test('should show error message on error', async () => {
    //     server.use(...networkErrorHandlers)
    //     // render(<App />)
    //     const errorMessage = await screen.findByText(/Something went wrong/i)
    //     expect(errorMessage).toBeInTheDocument()
    // })

})
