# FullStackFoundry

APP
├── /client                       # Front-end application
│   ├── /lib                      # Front-end libraries
│   ├── /src                      # Source code for client-side components
│
├── /environments                 # Environment variables
|
├── /Help
│   │   ├── /components
│   │   ├── /containers
│   │   ├── /context
│   │   ├── /hooks
│   │   ├── /services
│   │   ├── /state
│   │   ├── /styles
│   │   ├── /routes
│   │   ├── /utils
│   │   └── /App.js
│   ├── /package.json
│   └── /README.md

[/my_api_project](/APP)
|
├── [/client/src](/APP/client/)
|
├── [/server/src](/APP/server/)
│   ├── /config
│   │   └── dbConfig.js
│   ├── [/controllers](/APP/server/src/controllers/)
│   │   ├── [userController.js](/APP/server/src/controllers/PostgreSQL/usersController.js)
│   ├── [/middlewares](/APP/server/src/middleware/)
|   │   └── [authMiddleware.js](/APP/server/src/middleware/authMiddleware.js)
│   ├── [/models](/APP/server/src/models/)
│   │   ├── [user.js](/APP/server/src/models/PostgreSQL/users.js)
│   ├── [/routes](/APP/server/src/routes)
│   │   ├── [userRoutes.js](/APP/server/src/routes/PostgreSQL/usersRoutes.js)
│   │
│   ├── /services
│   │   ├── userService.js
│   │   └── chatService.js
|   |
│   ├── /utils
│   │   └── [utility files]

│   │
│   ├── /migrations
│   │   └── [migration files]
│   │

│   │
│   ├── /tests
│   │   ├── userTests.js
│   │   ├── productTests.js
│   │   └── orderTests.js
│   │
│   └── app.js
│
├── package.json
└── README.md

## Technologies Used

Full Stack technologies:

Front-end:
├── /client/src
|   ├── /frameworks
│   ├── /build-tools
│   ├── /styles
│   ├── /testing
│   ├── /utilities
│   └── /static
│
├── /client/src/vanilla
│   ├── /views
│   ├── /scripts
│   └── /styles

Back-end:
├── /server/src
│   ├── /controllers
│   ├── /models
│   ├── /routes
│   └── /utils
│
├── /env
│
├── /lib
│   ├── /middleware
│   ├── /services
│   └── /helpers
│
├── /Help
│   ├── /docs
│   ├── /tutorials
│   └── /FAQ
│
└── /res
    ├── /templates
    ├── /configs
    └── /scripts

## Full Stack Structure Examples

fullstack-app/
|   ├── client/ 
│   ├── public/                    # Publicly accessible files
│   │   ├── assets/                # Static files (images, fonts)
│   │   │   ├── css/               # Stylesheets (e.g., Bootstrap, Tailwind, etc.)
│   │   │   ├── images/            # Image files (e.g., logos, icons)
│   │   │   └── fonts/             # Font files (e.g., Open Sans, Helvetica Neue, etc.)
│   │   └── index.html             # Entry HTML file
│   ├── src/                       
│   │   ├── components/            # UI components (modularized)
│   │   ├── layout/                # Layout components (header, footer)
│   │   ├── pages/                 # Page-specific scripts (e.g., home, about, etc.)
│   │   ├── services/              # Services (API calls, external services)
│   │   ├── utils/                 # Utility functions
│   │   └── main.js                # Main JS entry point (e.g., app.js)
│   ├── tests/                     # Client-side tests
│   └── README.md                  # Client-specific documentation
│
├── server/                        # Server-side code
│   ├── src/                       # Server-side source code
│   │   ├── api/                   # API routes and handlers
│   │   │   ├── controllers/       # Business logic for handling requests
│   │   │   └── routes/            # Route definitions (e.g., GET, POST, PUT, etc.)
│   │   ├── config/                # Configuration files (e.g., database, server, etc.)
│   │   ├── lib/                   # Server-side utilities and helpers
│   │   ├── models/                # Data models for database
│   │   ├── services/              # Business services (e.g., authentication)
│   │   └── server.js              # Main server file (Node.js)
│   ├── tests/                     # Server-side tests
│   └── README.md                  # Server-specific documentation
│
├── shared/                        # Shared code between client and server
│   ├── constants/                 # Constants (e.g., API endpoints)
│   ├── utils/                     # Utility functions
│   └── README.md                  # Documentation for shared code
│
├── database/                      # Database-specific scripts and files
│   ├── migrations/                # Database migration files
│   ├── seeds/                     # Seed data for database
│   └── README.md                  # Database configuration and usage
│
├── config/                        # Global configuration files
│   ├── webpack.config.js          # Webpack configuration
│   ├── jest.config.js             # Jest configuration for testing
│   └── .env                       # Environment variables
│
├── scripts/                       # Utility scripts (build, deploy)
│
├── tests/                         # Integration tests
│
├── .gitignore                     # Specifies intentionally untracked files
├── package.json                   # NPM package and script definitions
├── docker-compose.yml             # Docker configuration for local development
└── README.md
