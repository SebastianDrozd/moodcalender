import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('wellnessplus.db');

export default db;