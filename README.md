BACKEND:

1. cd backend
2. npm init
3. crear archivo llamada server.ts
4. instalar ts-node: npm install ts-node
5. npm install express cors
6. npm install @types/cors -D
   6.1 npm install @types/express -D
7. en package.json: "scripts": {
   "dev": "cross-env PORT=3000 ts-node server.ts",
   "start": "cross-env PORT=3000 ts-node server.ts", }
8. npm install --save-dev cross-env // cross-env es una herramienta que permite establecer variables de entorno de manera que funcione en Windows, macOS y Linux
9. npm run dev // comprobar que funcione

COMMIT

1. npm install multer // Manejar subido de archivos
2. npm install convert-csv-to-json
3. npm install @types/multer -D

4. Crear los dos endpoint en server.ts: post ("/api/files") get("/api/users")

FRONTEND:

1. volver a la raiz y npm create vite@latest
2. cd frontend
3. npm install
4. Solo para este caso cambiar el puerto al 4000, en el package "scripts": {
   "dev": "vite --port=4000",}
5. Limpiar el frontend predeterminado por vite

---

1. instalar sonner en el frontend para mostrar errores de forma amigable
   npm install sonner

---

1. instalar useDebounce hook: Delay the execution of function or state update with useDebounce.
   npm i @uidotdev/usehooks
   The useDebounce hook is useful for delaying the execution of functions or state updates until a specified time period has passed without any further changes to the input value. This is especially useful in scenarios such as handling user input or triggering network requests, where it effectively reduces unnecessary computations and ensures that resource-intensive operations are only performed after a pause in the input activity.
