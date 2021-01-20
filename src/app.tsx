import React, { FC } from "react";

export const App: FC = () => {
    return (
        <main className="p-3">
            <h1 className="text-2xl font-title">{"Hello React!"}</h1>

            <p className="text-md font-text">
                {"(React + Typescript + Tailwind) ---> Snowpack ---> Cool, cool cool cool"}
            </p>
        </main>
    );
};
