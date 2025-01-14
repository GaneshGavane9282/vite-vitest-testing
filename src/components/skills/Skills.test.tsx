import { render, screen, logRoles } from "@testing-library/react";
import { Skills } from "./Skills";

describe("Skills", () => {
  const skills = ["HTML", "CSS", "JS", "JAVA", "PYTHON"];

  test("renders correctly", () => {
    render(<Skills skills={skills} />);

    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("renders a list of skills", () => {
    render(<Skills skills={skills} />);
    const skillElements = screen.getAllByRole("listitem");
    expect(skillElements).toHaveLength(skills.length);
  });

  test("renders login button", () => {
    render(<Skills skills={skills} />);
    const loginButton = screen.getByRole("button", {
      name: /login/i,
    });
    expect(loginButton).toBeInTheDocument();
  });

  test("Start Learning button is not rendered", () => {
    render(<Skills skills={skills} />);
    const startLearningButton = screen.queryByRole("button", {
      name: /start learning/i,
    });
    expect(startLearningButton).not.toBeInTheDocument();
  });

  test("Start learning button is eventually displayed", async () => {
    render(<Skills skills={skills} />);
    const startLearningButton = await screen.findByRole(
      "button",
      {
        name: /start learning/i,
      },
      {
        timeout: 2000,
      }
    );
    expect(startLearningButton).toBeInTheDocument();
  });

  test("Skills learning button is eventually displayed", async () => {
    const view = render(<Skills skills={skills} />);
    // screen.debug();
    logRoles(view.container)
    const skillsLearningButton = await screen.findAllByRole(
      "button",
      {
        name: /start learning/i,
        // name: "start learning",
      },
      {
        timeout: 2000,
      }
    );
    expect(skillsLearningButton[0]).toBeInTheDocument();
  });
});
