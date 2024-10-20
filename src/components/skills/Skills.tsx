import { useEffect, useState } from "react";
import { SkillsProps } from "./Skills.types";

export const Skills = (props: SkillsProps) => {
  const { skills } = props || {};
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 1001);
  }, []);

  return (
    <>
      <ul>
        {skills?.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      {isLoggedIn ? (
        <button type="button" onClick={() => setIsLoggedIn(false)}>
          Start Learning
        </button>
      ) : (
        <button type="button" onClick={() => setIsLoggedIn(true)}>
          Login
        </button>
      )}
    </>
  );
};

export default Skills;
