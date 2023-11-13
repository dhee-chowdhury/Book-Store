import "dotenv/config";
export const PORT = process.env.PORT || 5000;
export const mongoDBURL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.dayy4iq.mongodb.net/booksDB?retryWrites=true&w=majority`;
