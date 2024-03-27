import React from 'react';
import { render } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import LabelDetectorForm from '../src/forms/LabelDetectorForm'
import userEvent from '@testing-library/user-event';
import i18n from '../src/config/i18n';
import { I18nextProvider } from 'react-i18next';

describe('<LabelDetectorForm>', () => {
    const minConfidenceLevel = 60
    const maxResults = 8

    it('should be rendered with default values', () => {
    //given

    //when
        const { getByDisplayValue } = render(<LabelDetectorForm/>)
    //then
        getByDisplayValue(minConfidenceLevel)
        getByDisplayValue(maxResults)
    })

    it('should submits data', async () => {
        //given
        const newMaxResultsValue = "10"
        const newMinConfidenceLevelValue = "50"
        const mockHandleSubmit = vi.fn()
        //when
        const { getByDisplayValue, getByRole } = render(<LabelDetectorForm onSubmit={mockHandleSubmit}/>)
        const minConfidenceLevelInput = getByDisplayValue(minConfidenceLevel)
        const maxResultsInput = getByDisplayValue(maxResults)
        const analyseButton = getByRole('button')
        await userEvent.clear(maxResultsInput)
        await userEvent.type(maxResultsInput, newMaxResultsValue)
        await userEvent.clear(minConfidenceLevelInput)
        await userEvent.type(minConfidenceLevelInput, newMinConfidenceLevelValue)
        await userEvent.click(analyseButton)
        //then
        expect(mockHandleSubmit).toHaveBeenCalledWith({
            file: null,
            maxResults: newMaxResultsValue,
            minConfidenceLevel: newMinConfidenceLevelValue
        });
    })

    it('should be translatable', () => {
        //given
        //when
        i18n.changeLanguage("de")
        const { getByText  } = render(
            <I18nextProvider i18n={i18n}>
                <LabelDetectorForm/>
            </I18nextProvider>
        )
        //then
        expect(getByText('Analysieren')).toBeTruthy();
    })
})
