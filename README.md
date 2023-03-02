## Requirements

- Python 3.11.2
- pip 23.0.1
- node v19.6.0

## Stack

### FE

- React 18.2
- Next.js 13.1
- TypeScript
- Tailwind

### BE

- Python 3.11.2
- Django 4.1.7
- pipenv
- Django REST framework 3.14

### Getting Started

## Running Django Commands

Make sure you are in the right directory

```bash
cd api
```

Create virtual environment (can be outside of the project folder), run:

```bash
python -m venv sph-lms-venv
```

Note. Make sure that the sph-lms-venv has activate.bat (sph-lms-venv/Scripts/activate.bat)

Activate the virtual environment, run:

```bash
sph-lms-venv\Scripts\activate
```

After activation, install venv requirements, run:

```bash
pip install -r venv_requirements.txt
```

Run

```bash
python manage.py runserver
```

## Running NextJS Commands

Make sure you are in the right directory

```bash
cd client
```

Install Packages

```bash
npm install
```

Run

```bash
npm run dev
```

## Checking ESLint Standard

```
npm run lint
``

Once you finish the setup, you can access the following:
### FE Server URL
 - localhost:3000
### BE Server URL
 - localhost:8000
```
