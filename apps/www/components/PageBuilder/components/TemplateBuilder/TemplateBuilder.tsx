import { ComponentPreview } from "@/components/component-preview";
import { Key } from "react";
import Selector from "../TemplateSelector/Selector";


export const TemplateBuilder = ({ project }) => {

  const components = project.components.navbar;

  return (
    <div className="relative mr-5 max-w-full">
      <div className="grid grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-3">
        {components.map((projects: any, id:number ) => (
          <div
            key={id}
            className="group block h-full w-full cursor-pointer p-2 duration-300 ease-in-out"
          >
            <ComponentPreview
              name={`alert-demo`}
              className="[&_.preview>[data-orientation=vertical]]:sm:max-w-[70%]"
            />
          </div>
        ))}
        <Selector/>
      </div>
    </div>
  );
};
