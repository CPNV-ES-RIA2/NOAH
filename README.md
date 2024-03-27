# Dashboard Readme
## Description
This application is a modern, responsive frontend built with Vite and React. It provides a user-friendly interface for uploading images and retrieving associated labels. The application integrates with a backend service to process images and return their descriptive labels.
## Getting started
### Prerequisites
List all dependencies and their version needed by the project as :
- Node V21.1+
- Npm V10.2+
- Typescript V5.3+
- React V18.2+
- Vite V5.1+
## Deployment
### On dev environment
1. Install dependencies:
   ```
   npm i
   ```
2. Launch the application in development mode:
   ```
   npm run dev
   ```
### On integration environment
1. Build the application for production:
   ```
   npm run build
   ```
   This step creates a `dist` folder.
2. Deploy the contents of the dist folder to your preferred static hosting service (e.g., Netlify, Vercel, or an NGINX server).
## Directory structure
```console
ria2_frontend
├── Dockerfile
├── Dockerfile.dev
├── LICENSE
├── README.md
├── index.html
├── nginx.conf
├── package-lock.json
├── package.json
├── postcss.config.js
├── public                                // Contains static assets
│   └── vite.svg
├── src                                   // Main source directory for the project
│   ├── assets
│   │   └── css
│   │       └── app.css
│   ├── components                        // Contains React components
│   │   ├── LabelsDisplay.tsx
│   │   └── ui
│   │       ├── Button.tsx
│   │       ├── Dropzone.tsx
│   │       ├── Input.tsx
│   │       ├── Loader.tsx
│   │       └── Select.tsx
│   ├── config                            // Configuration files and settings for the application
│   │   └── i18n.ts
│   ├── exceptions                        // Contains custom exception classes
│   │   └── api
│   │       └── ApiServiceException.ts
│   ├── forms                             // Components related to form handling within the application
│   │   └── LabelDetectorForm.tsx
│   ├── i18n                              // Contains internationalization files
│   │   ├── de.json
│   │   ├── en.json
│   │   └── fr.json
│   ├── layouts                           // Contains layouts components
│   │   └── BaseLayout
│   │       └── BaseLayout.tsx
│   ├── main.tsx
│   ├── models                             // Contains models defining the shape of data used throughout the application
│   │   └── label.ts
│   ├── pages                              // Contains pages of the application
│   │   └── Home.tsx
│   ├── router                             // Router of the application
│   │   └── router.tsx
│   ├── services                           // Services for handling external API calls and abstracting the backend interaction logic.
│   │   └── api
│   │       ├── ApiService.ts
│   │       ├── DataObjectService.ts
│   │       └── LabelDetectorService.ts
│   └── vite-env.d.ts
├── tailwind.config.js
├── tests                                  // Contains test files
│   ├── Dropzone.test.tsx
│   ├── LabelDetectorForm.test.tsx
│   ├── LabelsDisplay.test.tsx
│   └── setup.ts
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```
## Collaborate
### Commit Message Guidelines
To maintain clarity and consistency in our repository's history, we adhere to the following commit guidelines:
- **Descriptive Messages**: Ensure each commit message clearly describes the changes made.
- **Conventional Commits**: Follow the [Conventional Commits](https://www.conventionalcommits.org/) format, using types like `feat`, `fix`, `refactor`, `style`, `docs`, `test`, `chore`, etc.
### Branching Strategy
We use [Git Flow](https://nvie.com/posts/a-successful-git-branching-model/) as our branching strategy. Please create feature, hotfix, or release branches as appropriate and merge them back into the main branches as per Git Flow guidelines.
### Pull Requests
Open a pull request with a clear title and description for your changes. Link any relevant issues in the pull request description.
## License
This project is open source and available under the [MIT License].
