import React from "react";

export const InputFields: React.FC<{ fields: any[]; }> = props => {
    return <>
        Should proof the following claims:
        {
            props.fields.map((field, i) => {
                return <div key={`field${i}`} >
                    <p className=" text-sm font-normal text-gray-500 dark:text-gray-400">
                        {
                            field.name
                        }
                        {
                            field.filter ? `must match ${JSON.stringify(field.filter)
                                }` : ``
                        }
                    </p>
                </div>;

            })
        }
    </>;
}; 