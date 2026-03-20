import Database from 'better-sqlite3';
import path from 'path';

// Connect to SQLite database
const dbPath = path.resolve(__dirname, '../../database.sqlite');
console.log(`Connecting to SQLite database at: ${dbPath}`);

export const db = new Database(dbPath, { verbose: console.log });

// Better-sqlite3 is synchronous, enabling WAL mode for better performance
db.pragma('journal_mode = WAL');
