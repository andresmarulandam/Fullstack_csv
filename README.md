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
