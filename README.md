# Codebase

- [Installing dependencies for all packages](#installing-dependencies-for-all-packages)
- [New package configuration](#new-package-configuration)
- [Use internal packages inside other packages:](#use-internal-packages-inside-other-packages)

### Monorepo of a codebase for personal projects, this setup uses [Turbo](https://turbo.build/).

---

## Installing dependencies for all packages

        $ npm install

## New package configuration

### When creating a new package, there are some base configurations to know:

- `.eslintrc.js` and `.prettierrc` are used in all packages, unless you create a new one in a specific package
- The new folder needs to be inside `packages` folder, or create a new workspace in the root `package.json`
- Use base tsconfig on new package:

  1.  Declare tsconfig base in the new `packages/{new-package}/package.json` file as a dependency

          {
          	"dependencies": {
          		"tsconfig": "*"
          	}
          }

  2.  Extend it inside the `packages/{new-package}/tsconfig.json`

          {
          	...
          	"extends": "tsconfig/base.json",
          	...
          }

## Use internal packages inside other packages:

1.  Check if `packages/{internal-package}/package.json` contains the fields `name` and `types`.

2.  Declare the internal package in the new `packages/{new-package}/package.json` file as a dependency

        {
        	"dependencies": {
        		"internal-package": "*"
        	}
        }

3.  Add and import from `{internal-package}` into the new package

        import * from "internal-package";
