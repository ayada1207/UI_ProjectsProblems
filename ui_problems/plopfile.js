module.exports = plop => {
    plop.setGenerator("component", {
      description: "Create a component",
      prompts: [
        {
          type: "input",
          name: "name",
          message: "What is this component's name?",
        }
      ],
      actions: [
        {
            // add a new file
          type: "add",
          //path for new file
          path: "src/Component/{{pascalCase name}}/container/{{pascalCase name}}.tsx",
          // handlebars template used to generate content of new file
          templateFile: "templates/ComponentContainer.tsx.hbs",
        },
        {
            // add a new file
          type: "add",
          //path for new file
          path: "src/Component/{{pascalCase name}}/component/{{pascalCase name}}.tsx",
          // handlebars template used to generate content of new file
          templateFile: "templates/Component.tsx.hbs",
        },
        {
            // add a new file
          type: "add",
          //path for new file
          path: "src/Component/{{pascalCase name}}/{{pascalCase name}}.css",
          // handlebars template used to generate content of new file
          templateFile: "templates/ComponentCSS.tsx.hbs",
        },
      ],
    });
  };