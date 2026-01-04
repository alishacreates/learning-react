# Copilot Instructions — login_logout

This file gives concise, actionable guidance for AI coding agents working in this repository.

Overview
- Architecture: a small Go backend (REST API) and a React frontend (Vite) in the same repo.
- Backend: `main.go` is the entry point. Routes are defined in `routes/routes.go`, handlers in `handlers/auth.go`, DB connection in `config/db.go`, and models in `models/user.go`.
- Frontend: source under `src/` (entry: `src/main.jsx`, app: `src/App.jsx`). UI components live in `src/components/` (e.g., `LoginForm.jsx`, `SignupForm.jsx`, `Dashboard.jsx`).

Key commands
- Start backend (development): `go run main.go` from the repo root. Ensure MongoDB is running at `mongodb://localhost:27017`.
- Start frontend (development): `npm install` then `npm run dev` in the repo root (package.json uses Vite).
- Lint frontend: `npm run lint`.

Important integration points
- HTTP endpoints: backend exposes POST `/register` and `/login` (see `routes/routes.go`).
- Frontend uses fetch to call those exact endpoints at `http://localhost:8080/register` and `/login` (see `src/components/SignupForm.jsx` and `src/components/LoginForm.jsx`). Do not change endpoint paths without updating both sides.
- Auth contract: on successful login backend returns JSON `{ "token": "..." }`. Frontend stores this as `localStorage.token` and stores the email under `localStorage.email`.

Project-specific conventions and patterns
- Local dev assumptions: MongoDB runs locally and no environment variable management is implemented. The JWT secret is hardcoded in `handlers/auth.go` (`jwtKey := []byte("my_secret_key")`) — treat this as a known shortcut and prefer adding env vars if persisting changes.
- Go module path: code imports use `go-auth-backend/...` package paths. Keep packages under the repository root to avoid module/path mismatches.
- Frontend routing pattern: `src/App.jsx` controls UI state via a `screen` string ("home", "signup", "registered", "login", "dashboard"). Components are simple props-driven, not using React Router.
- UI library: MUI is used across components. Styling primarily uses `sx` prop inline.

Files to edit for common tasks
- Add/change API routes: `routes/routes.go` and corresponding handlers in `handlers/`.
- Modify DB settings: `config/db.go` (connection URI and options).
- Change auth logic or JWT configuration: `handlers/auth.go` and `models/user.go` for schema.
- Edit frontend flows: `src/App.jsx` (navigation / auto-login), `src/components/*` for forms and dashboard.

Testing and validation tips
- Manual end-to-end dev flow: start MongoDB → `go run main.go` → `npm run dev` → open frontend (Vite URL) → sign up then login.
- Inspect network calls in browser devtools to verify POST bodies and responses; handlers return JSON and HTTP status codes.

Safety and TODOs when changing code
- Do not change backend host/port or endpoints silently — the frontend calls `http://localhost:8080` directly.
- If you introduce env-based config (recommended), update README and frontend fetch URLs accordingly.
- Avoid committing secrets. Move `jwtKey` into env vars before publishing.

Examples (from repo)
- Login fetch (frontend): `fetch("http://localhost:8080/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, password }) })` — see `src/components/LoginForm.jsx`.
- Register handler (backend): `RegisterHandler` in `handlers/auth.go` inserts a hashed password into the `users` collection — see that file for password hashing and createdAt usage.

If unclear
- Ask the maintainer which environment variables and ports they expect for production.
- If you need tests added, request guidance for the testing approach (Go tests, jest/react-testing-library) before creating them.

Please review these instructions and tell me any missing details or preferred developer workflows to include.
