import React from 'react';
import { DrizzleContext } from 'drizzle-react';

// two nest functions that receive the respective parameters
const Container = Component => props => (
    <DrizzleContext.Consumer>
        {drizzleContext => {
            const { initialized, drizzleState, drizzle } = drizzleContext;
            return (
                <Component
                    {...props}
                    initialized={initialized}
                    drizzleState={drizzleState}
                    drizzle={drizzle}
                />
            );
        }}
    </DrizzleContext.Consumer>
);

export default Container;