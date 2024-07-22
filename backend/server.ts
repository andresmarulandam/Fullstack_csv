import express from 'express';
import cors from 'cors';
import multer from 'multer';
import csvToJson from 'convert-csv-to-json';

const app = express();
const port = process.env.PORT ?? 3000;

//Guardar el archivo en memoria
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

let userData: Array<Record<string, string>> = [];

app.use(cors());

app.post('/api/files', upload.single('file'), async (req, res) => {
  //1. Extract file from request
  const { file } = req;

  //2. Validate that we have the file
  if (!file) {
    return res.status(500).json({ message: 'File is required' });
  }

  //3. Validate the mimetype (csv)
  if (file.mimetype !== 'text/csv') {
    return res.status(500).json({ message: 'File must be CSV' });
  }

  //4. Transform the file to String

  let json: Array<Record<string, string>> = [];
  try {
    const rawCsv = Buffer.from(file.buffer).toString('utf-8');
    console.log(rawCsv);
    // 5. Transform string(csv) to JSON
    json = csvToJson.csvStringToJson(rawCsv);
  } catch (error) {
    return res.status(500).json({ message: 'Error parsing the file' });
  }

  //6. Save the JSON to db
  userData = json;
  // 7. Return 200 with the message and the JSON
  return res
    .status(200)
    .json({ data: json, message: 'El archivo se cargó correctamente' });
});

app.get('api/users', async (req, res) => {
  // 1. Extract the query param "q" from the request
  const { q } = req.query;
  // 2. Validate that we have the query param
  if (!q) {
    return res.status(500).json({
      message: "Query param 'q' is required",
    });
  }
  //3. Filter the data from the db with the query param
  const search = q.toString().toLowerCase();

  const filteredDta = userData.filter((row) => {
    return Object.values(row).some((value) =>
      value.toLowerCase().includes(search),
    );
  });

  return res.status(200).json({ data: [] });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
