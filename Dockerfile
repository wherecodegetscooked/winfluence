# 1. Bau-Phase: Wir nutzen Node, um die App zu bauen
FROM node:20-alpine as builder

WORKDIR /app

# Kopiere die Abhängigkeits-Listen
COPY package*.json ./

# Installiere Abhängigkeiten
RUN npm install

# Kopiere den restlichen Code
COPY . .

# Baue die statischen Dateien (landet im Ordner /dist)
RUN npm run build

# 2. Run-Phase: Wir nutzen einen leichten Webserver
FROM node:20-alpine as runner

WORKDIR /app

# Installiere einen einfachen Webserver global
RUN npm install -g serve

# Kopiere nur die gebauten Dateien aus der Bau-Phase (spart Platz)
COPY --from=builder /app/dist ./dist

# Cloud Run gibt den Port via Environment Variable $PORT vor (Standard 8080)
# Wir starten den Server auf diesem Port
CMD serve -s dist -l $PORT