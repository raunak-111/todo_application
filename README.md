# Taskly - Todo Application

Taskly is a simple and intuitive todo application that helps you manage your tasks efficiently. This project is built using React, Redux, and Tailwind CSS.

## Features

- User Authentication (Login/Logout)
- Task Management (Add, Edit, Delete, Complete)
- Dark/Light Theme Toggle
- Responsive Design

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/taskly.git
   cd taskly
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

## Usage

### Login Page

The login page allows users to authenticate themselves. Use the following demo credentials to log in:

- Email: `user@example.com`
- Password: `password`

![Login Page](screenshots/login.png)

### Task Management

Once logged in, users can manage their tasks. They can add new tasks, edit existing tasks, mark tasks as complete, and delete tasks.

![Task Management](screenshots/tasks.png)

### Theme Toggle

Users can switch between dark and light themes using the theme toggle button located at the top right corner of the page.

![Theme Toggle](screenshots/theme-toggle.png)

### 404 Page

If a user tries to access a non-existent route, they will be redirected to a 404 page.

![404 Page](screenshots/404.png)

## Folder Structure

```
taskly/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── ThemeToggle.tsx
│   │   └── ...
│   ├── pages/
│   │   ├── Login.tsx
│   │   ├── NotFound.tsx
│   │   └── ...
│   ├── store/
│   │   ├── authSlice.ts
│   │   ├── themeSlice.ts
│   │   └── ...
│   ├── styles/
│   │   └── globals.css
│   ├── App.tsx
│   ├── index.tsx
│   └── ...
├── README.md
├── package.json
└── ...
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.
