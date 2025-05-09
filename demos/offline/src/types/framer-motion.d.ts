declare module 'framer-motion' {
    import * as React from 'react';

    export type AnimatePresenceProps = {
        children: React.ReactNode;
        exitBeforeEnter?: boolean;
        initial?: boolean;
        onExitComplete?: () => void;
    };

    export const AnimatePresence: React.FunctionComponent<AnimatePresenceProps>;

    export type MotionProps = {
        initial?: any;
        animate?: any;
        exit?: any;
        transition?: any;
        className?: string;
        children?: React.ReactNode;
        [key: string]: any;
    };

    export const motion: {
        div: React.ForwardRefExoticComponent<MotionProps & React.RefAttributes<HTMLDivElement>>;
        [key: string]: React.ForwardRefExoticComponent<MotionProps & React.RefAttributes<any>>;
    };
} 