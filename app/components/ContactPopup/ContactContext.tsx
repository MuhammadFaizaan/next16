'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';

interface ContactContextType {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const ContactContext = createContext<ContactContextType | undefined>(undefined);

export function ContactProvider({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    const onOpen = useCallback(() => setIsOpen(true), []);
    const onClose = useCallback(() => setIsOpen(false), []);

    return (
        <ContactContext.Provider value={{ isOpen, onOpen, onClose }}>
            {children}
        </ContactContext.Provider>
    );
}

export function useContactPopup() {
    const context = useContext(ContactContext);
    if (context === undefined) {
        throw new Error('useContactPopup must be used within a ContactProvider');
    }
    return context;
}
