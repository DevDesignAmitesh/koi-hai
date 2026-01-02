import { app } from ".";

const PORT = process.env.PORT;

if (!PORT) {
  throw new Error("PORT env not found");
}

app.listen(PORT, () => console.log("code is running at " + PORT));
