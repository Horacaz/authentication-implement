import {screen, render} from "@testing-library/react";
import Notification from "../Notification";

describe("Notification", () => {
    test("It renders correctly", () => {
        render(<Notification message="Render Test Message" />);
        screen.getByText("Render Test Message");
    });
})