# Undertone

![Alt Text](/public/demo.gif)
A simple webapp that transcribes user speech to text and translates it into code.

## Features
- Speak into your microphone and watch your speech get transcribed automatically
- Translate your speech into any (coding) language

## Installation

### Frontend

```
npm run dev
```

### Backend
```
cd server
python3 -m venv venv
. venv/bin/activate
pip install -r requirements.txt
flask run --port 8000
```