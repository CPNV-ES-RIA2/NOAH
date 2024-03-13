import React from 'react';
import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Dropzone from '../src/components/ui/Dropzone';
import userEvent from '@testing-library/user-event';
import i18n from '../src/config/i18n';
import { I18nextProvider } from 'react-i18next';

describe('<Dropzone>', () => {
    it('should call onChange with the dropped file', async () => {
        // Given
        const file = new File(['hello'], 'hello.png', { type: 'image/png' });
        const handleChange = vi.fn();

        // When
        const { container } = render(<Dropzone onChange={handleChange} />);
        const fileInput = container.querySelector('input') as HTMLInputElement
        await userEvent.upload(fileInput, file)
        // Then
        expect(handleChange).toHaveBeenCalledWith(file);
    });

    it('should display file name when a file is uploaded', async() => {
        // Given
        const file = new File(['hello'], 'hello.png', { type: 'image/png' });
        const handleChange = vi.fn();

        // When
        const { container, getByText } = render(<Dropzone onChange={handleChange} />);
        const fileInput = container.querySelector('input') as HTMLInputElement
        await userEvent.upload(fileInput, file)
        // Then
        expect(getByText("hello.png")).toBeDefined();
    })

    it('should be translatable', () => {
        //given
        //when
        i18n.changeLanguage("de")
        const { getByText  } = render(
            <I18nextProvider i18n={i18n}>
                <Dropzone>{i18n.t('Drag and drop some file here, or click to select file')}</Dropzone>
            </I18nextProvider>
        )
        //then
        expect(getByText('Ziehen Sie eine Datei hierher oder klicken Sie, um eine Datei auszuwählen')).toBeTruthy();
    })
});
