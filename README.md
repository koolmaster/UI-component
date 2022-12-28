# Common UI library

- Please navigate to [Storybook](https://ui-animation-components.netlify.app) for docs + UI components

- [How to use storybook?](https://storybook.js.org/docs/react/get-started/browse-stories)

## 1. Prerequisites

- Node >= 16.0.0
- Yarn >= 1.22.19

## 2. Usage

### 2.1. Run install script

After login to Organization success, run following command to install the `@koolmaster/animation-components-ui` package:

```sh
yarn add @koolmaster/animation-components-ui
```

Replace `latest` with appropriate version

> Note: If received error: Not have permissions, please contract koolmaster1408@gmail.com to get permission to `@koolmaster/animation-components-ui` repository

### 2.2 Import the component and start using:

For using in project:

```js
import React from 'react';
import ReactDOM from 'react-dom';
// animations
import { MovieCard } from '@koolmaster/animation-components-ui/lib/animations';
// library
import { FullCoupon } from '@koolmaster/animation-components-ui/lib/library';
// base
import { Skeleton } from '@koolmaster/animation-components-ui';
```

## 3. How to Start Contributing

To start contribute to this project, first clone the repository: `@koolmaster/animation-components-ui`. Then in the project directory, we can run these follow scripts to start development:

### 3.1. `yarn gen`

Run the auto-generating component snippet

### 3.2. `yarn storybook`

Start the Storybook for development UI Component, or view documents

### 3.3. `yarn build`

Start the build process for generating library

### 3.4. `yarn lint`

Start linting errors and auto fixing warnings

## 4. Contributing to this project

For contributing to this project

### 4.1. Clone repository

### 4.2. Start develop UI component

Run generate for create a new component and start development server:

```bash
yarn gen
...
yarn storybook
```

### 4.3. Write unit tests for UI Component

Start Jest in the watch mode and write unit tests for your components:

```bash
yarn test:watch
```

All tests must be passed before pushing to the origin

### 4.4. PR Review and merge

After push to a new feature branch, please create a new PR to `master` branch and request a review.
If the PR is fully merged, release manager will start to shipping the new feature with appropriate version.
