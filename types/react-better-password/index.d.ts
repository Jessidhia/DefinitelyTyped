// Type definitions for react-better-password 1.0
// Project: https://github.com/karaggeorge/react-better-password
// Definitions by: Mary Huynh <https://github.com/mhuynh1>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import * as React from 'react';
export interface PasswordProps {
    className?: string;
    mask?: '•' | string;
    onChange?: (value: string) => void;
    placeholder?: string;
    show?: boolean;
    timeout?: number;
    value?: string;
}
export default class Password extends React.Component<PasswordProps> { }
