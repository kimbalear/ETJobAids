# Creating a new app

```
npx create-react-app my-app
cd my-app
```

# Adding dependecies

```
npm install @dhis2/ui-core
npm install @dhis2/cli-style -D
```

# Building

```
npm run build
```

# Structure

___node_modules/___
This is where the dependencies are installed.

___public/___
public/index.html can access all the files in this directory.

___src/___
This is where source files reside. Files inside this directory are processed to make the build faster.

___package.json___
This file defines dependencies, scripts, and other properties.