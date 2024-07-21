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
9.
