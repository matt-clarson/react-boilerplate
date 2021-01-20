import React from "react";
import { cleanup, render } from "@testing-library/react";
import { App } from "../app";

describe("<App />", () => {
    beforeEach(cleanup);
    it("should render", () => {
        const testDOM = render(<App />);
        expect(testDOM.container).toMatchInlineSnapshot(`
            <div>
              <main
                class="p-3"
              >
                <h1
                  class="text-2xl font-title"
                >
                  Hello React!
                </h1>
                <p
                  class="text-md font-text"
                >
                  (React + Typescript + Tailwind) ---&gt; Snowpack ---&gt; Cool, cool cool cool
                </p>
              </main>
            </div>
        `);
    });
});
