import React from 'react'
import { describe, it, expect} from 'vitest'
import { render } from '@testing-library/react'
import LabelsDisplay from '../src/components/LabelsDisplay';
import { I18nextProvider } from 'react-i18next';
import i18n from '../src/config/i18n';

describe('<LabelsDisplay>', () => {
    const labels = [
        { id: 1, description: 'Label 1', score: 90 },
        { id: 2, description: 'Label 2', score: 80 },
    ];

    it('should be render with labels', () => {
        //given

        //when
        const { getByText } = render(<LabelsDisplay labels={labels}/>)
        //then
        expect(getByText('Label 1')).toBeTruthy();
        expect(getByText('90%')).toBeTruthy();
        expect(getByText('Label 2')).toBeTruthy();
        expect(getByText('80%')).toBeTruthy();
    })

    it('should be translatable', () => {
        //given
        
        //when
        i18n.changeLanguage("de")
        const { getByText } = render(
            <I18nextProvider i18n={i18n}>
                <LabelsDisplay labels={labels}/>
            </I18nextProvider>
        )

        //then
        expect(getByText('Punktestand')).toBeTruthy();
        expect(getByText('Beschreibung')).toBeTruthy();
    })
})