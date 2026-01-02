'use client';

import { useContactPopup } from './ContactContext';
import ContactPopup from './ContactPopup';

export default function ContactPopupWrapper() {
    const { isOpen, onClose } = useContactPopup();

    return <ContactPopup isOpen={isOpen} onClose={onClose} />;
}
