import {screen, render} from "@testing-library/react";
import Login from "../Login";

describe("Login", () => {
    test("It renders correctly", () => {
        render(<Login />);
        screen.getByRole("heading", {name: "You must be logged in to proceed"});
    })
})