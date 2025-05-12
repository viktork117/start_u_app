//@ts-nocheck

import db from './database';

export const initializeDatabase = async () => {
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS user (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      course_name TEXT NOT NULL,
      group_name TEXT NOT NULL
    );
  `);
};

export const addUser = async (course: string, group: string) => {
  try {
    const result = await db.runAsync(
      'INSERT INTO user (course_name, group_name) VALUES (?, ?)',
      course,
      group
    );
      console.log('Inserted:', course, group, 'ID:', result);
  } catch (e) {
    console.warn(e, "==> addError")
  }
};

export const getUsers = async () => {
  const user = await db.getAllAsync('SELECT * FROM user');
  console.log('User:', user, "==> getUser");
  return user;
};

export const clearUsersTable = () => {
  db.execSync('DELETE FROM users');
};

export const clearUsersTableAndResetId = () => {
  try {
    db.execSync('DELETE FROM user');
    db.execSync('DELETE FROM sqlite_sequence WHERE name = "user"');
  } catch (e) {
    console.warn(e);
    
  }
};

