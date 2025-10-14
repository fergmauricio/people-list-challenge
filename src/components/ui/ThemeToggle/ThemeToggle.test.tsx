import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeToggle } from "./ThemeToggle";

jest.mock("@/hooks/useTheme", () => ({
  useTheme: () => ({
    theme: "dark",
    toggleTheme: jest.fn(),
  }),
}));

describe("ThemeToggle", () => {
  it("deve renderizar o botão de toggle", () => {
    render(<ThemeToggle />);

    expect(screen.getByLabelText(/mudar para tema/i)).toBeInTheDocument();
    expect(screen.getByText("🌙")).toBeInTheDocument();
  });

  it("deve chamar toggleTheme quando clicado", async () => {
    const user = userEvent.setup();
    const mockToggleTheme = jest.fn();

    jest
      .spyOn(require("@/hooks/useTheme"), "useTheme")
      .mockImplementation(() => ({
        theme: "dark",
        toggleTheme: mockToggleTheme,
      }));

    render(<ThemeToggle />);

    await user.click(screen.getByLabelText(/mudar para tema/i));
    expect(mockToggleTheme).toHaveBeenCalledTimes(1);
  });
});
