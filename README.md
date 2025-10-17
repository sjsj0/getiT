# getiT — Local Store Web Application

A full-stack Local Store web application built with Django (REST API backend) and React (frontend). This repository contains both the backend API and the frontend single-page application used for development and testing.

## Prerequisites
- Python 3.8+ and pip
- Node.js 14+ and npm
- PostgreSQL (for production or if you want to run with the project's DB settings)
- Git (to clone the repository)

## Repository layout (important folders)
- backend/getit_be — Django backend project (apps: `account`, `product`)
- frontend/getit_fe — React frontend (Create React App)

## Quickstart (development)

### 1) Backend (Django)
- Open a terminal and change to the backend project folder:

  ```bash
  cd backend\getit_be
  ```

- Create a virtual environment and activate it (Windows example):

  ```bash
  python -m venv venv
  venv\\Scripts\\activate
  ```

- Install Python dependencies:

  ```bash
  pip install -r requirements.txt
  ```

- Environment variables

  The Django settings use environment variables read by python-decouple. Create a `.env` file inside `backend/getit_be` (same folder as `manage.py`) with at least:

  ```
  SECRET_KEY=your-secret-key
  DBPASS=your-db-password
  ```

  Notes:
  - The project settings currently point to a PostgreSQL database by default. For local development you can either set `DBPASS` for your DB credentials and ensure the other DB fields match, or modify `DATABASES` in `getit_be/settings.py` to use SQLite for quick local testing.

- Run database migrations and create a superuser:

  ```bash
  python manage.py migrate
  python manage.py createsuperuser
  ```

- Start the Django development server:

  ```bash
  python manage.py runserver
  ```

  The API will be available at http://127.0.0.1:8000/ by default.

### 2) Frontend (React)
- Open a terminal and change to the frontend folder:

  ```bash
  cd frontend\getit_fe
  ```

- Install Node dependencies:

  ```bash
  npm install
  ```

- Start the development server:

  ```bash
  npm start
  ```

  The React app runs on http://localhost:3000 and is configured (CORS) to communicate with the backend at http://127.0.0.1:8000.

## Important configuration notes
- Custom user model: The backend uses a custom user model `account.Account` (see `backend/getit_be/account/models.py`).
- Authentication: The backend uses Knox token authentication. The REST framework authentication classes are configured in settings.
- CORS: `CORS_ALLOWED_ORIGINS` includes `http://localhost:3000` so the frontend can talk to the backend in development.
- Media files: Uploaded media is stored under the `media/` directory in the backend project root. Ensure `MEDIA_ROOT` and `MEDIA_URL` are configured appropriately when deploying.

## Testing
- Backend: Add and run Django tests with:

  ```bash
  cd backend\getit_be
  python manage.py test
  ```

- Frontend: Use the React test runner:

  ```bash
  cd frontend\getit_fe
  npm test
  ```

## Deployment notes
- For production, set `DEBUG=False`, configure `ALLOWED_HOSTS` and a production-ready database. Serve static files with a web server (e.g., nginx) and use a WSGI/ASGI server (e.g., gunicorn, daphne).
- Keep secret values out of version control. Use environment variables or a secrets manager.

## Contributing
- Feel free to open issues or submit pull requests. Include a clear description of the change, and run existing tests before submitting.

## Where to look next
- Backend: `backend/getit_be/account/`, `backend/getit_be/product/`, `backend/getit_be/getit_be/` (settings and URLs).
- Frontend: `frontend/getit_fe/src/components/`, `frontend/getit_fe/src/containers/`.
