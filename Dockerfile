FROM lukechannings/deno

WORKDIR /app

COPY mht2html.ts ./
COPY deno.json ./
COPY deno.lock ./
RUN deno cache mht2html.ts