import { render, RenderOptions } from "@testing-library/react";
import { ReactElement } from "react";
import AppProvider from "./providers/AppProvider";

const CustomRender = (
  ui: ReactElement,
  option?: Omit<RenderOptions, "wrapper">
) => {
  return render(ui, {
    wrapper: AppProvider,
    ...option,
  });
};

export default CustomRender;
