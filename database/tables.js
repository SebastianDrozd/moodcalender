import db from './database';

// Create table
const createTable = () => {
  db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS mood (id INTEGER PRIMARY KEY AUTOINCREMENT, date TEXT, time TEXT, mood TEXT, note TEXT );',
      [],
      () => console.log('Table created successfully.'),
      (_, error) => console.log('Error creating table:', error)
    );
  });
};

const insertMood = (date,time,mood,note) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO mood (date, time, mood, note ) VALUES (?, ?,?,?);',
        [date,time,mood,note],
        (_, result) => console.log('Inserted todo with ID:', result.insertId),
        (_, error) => console.log('Error inserting todo:', error)
      );
    });
  };

  const getMoods = (callback) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM mood;',
        [],
        (_, { rows }) => callback(rows._array),
        (_, error) => console.log('Error getting todos:', error)
      );
    });
  };
  

  export {createTable, insertMood,getMoods}