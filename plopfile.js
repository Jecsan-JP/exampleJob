module.exports = function (plop) {
  // Definir el generador de componentes
  plop.setGenerator('component', {
    description: 'Crear un nuevo componente',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Nombre del componente:',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'plop-templates/Component.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.module.css',
        templateFile: 'plop-templates/Component.module.css.hbs',
      },
    ],
  });

  plop.setGenerator('feature', {
    description: 'Crear una feature',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Nombre de la feature ',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/features/{{camelCase name}}/presentation/bloc/{{pascalCase name}}Bloc.ts',
        templateFile: 'plop-templates/feature/Bloc.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/features/{{camelCase name}}/presentation/bloc/{{pascalCase name}}State.ts',
        templateFile: 'plop-templates/feature/BlocState.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/features/{{camelCase name}}/presentation/bloc/{{pascalCase name}}Provider.tsx',
        templateFile: 'plop-templates/feature/BlocProvider.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/features/{{camelCase name}}/presentation/pages/{{pascalCase name}}Page.tsx',
        templateFile: 'plop-templates/feature/BlocPage.tsx.hbs',
      },
    ],
  });

  plop.setGenerator('form', {
    description: 'Crear un nuevo formulario',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Nombre del formulario:',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/temp/forms/{{pascalCase name}}Form.tsx',
        templateFile: 'plop-templates/form/Form.tsx.hbs',
      },
    ],
  });

  plop.setGenerator('page', {
    description: 'Crea las rutas van en app/',
    prompts: [
      {
        type: 'input',
        name: 'routeName',
        message: 'Ingresa el nombre de la ruta',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/app/{{camelCase  routeName}}/page.tsx',
        templateFile: 'plop-templates/page/PageNext.tsx.hbs',
      },
    ],
  });
};
