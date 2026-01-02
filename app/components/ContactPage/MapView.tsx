'use client';

import { Box } from '@chakra-ui/react';

export default function MapView() {
    return (
        <Box w="100%" h={{ base: "400px", md: "600px" }} bg="gray.100" overflow="hidden">
            <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Silver%20Square,%20G-11%20Markaz,%20Islamabad+(NextChainX)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                style={{ filter: "grayscale(1) invert(0.9) contrast(1.2)" }}
            >
                <a href="https://www.gps.ie/">gps tracker sport</a>
            </iframe>
        </Box>
    );
}
