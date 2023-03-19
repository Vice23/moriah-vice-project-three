
import { render, fireEvent, screen } from "@testing-library/react";
import Form from "./Form";
import React from "react";



const eventMockObject = {
    target: {
        form: [
            {
                value: "HI BOB"
            }
        ]
    }
}

// describe("handleChange", () => {
//     it('should set the state value when set', () => {
//         <Form searchValue="HI BOB"/>
//         Form().handleChange(eventMockObject);
//         expect(Form().searchValue).toEqual("HI BOB");
//     });
// })

it('should test what goes into the state', () => {
  const setState = jest.fn();
  jest
    .spyOn(React, 'useState')
    .mockImplementationOnce(initState => [initState, setState]);
  render(<Form />);
});