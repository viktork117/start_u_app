//@ts-nocheck

import db from './database';

export const initializeDatabase = async () => {
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS user_course (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      course_name TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS user_group (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      group_name TEXT NOT NULL
    );
  `);
};

export const addUserCourse = async (course: string) => {
  try {
    const user = await db.getAllAsync('SELECT * FROM user_course');
    if (user.length === 0) {
      await db.runAsync(
        'INSERT INTO user_course (course_name) VALUES (?)',
        course,
      );
    }
    await db.runAsync(
      'UPDATE user_course SET course_name = ? WHERE id = ?',
      course,
      1
    )
  } catch (e) {
    console.warn(e, "==> addError")
  }
};

export const getUserCourse = async () => {
  try {
    const user = await db.getAllAsync('SELECT * FROM user_course');
  
    if (user.length === 0) return null;

    return user[0].course_name;
  } catch (e) {
    console.warn(e);
    
  }
};

export const addUserGroup = async (group: string) => {
  try {
    const user = await db.getAllAsync('SELECT * FROM user_group');
    if (user.length === 0) {
      await db.runAsync(
        'INSERT INTO user_group (group_name) VALUES (?)',
        group,
      );
    }
    await db.runAsync(
      'UPDATE user_group SET group_name = ? WHERE id = ?',
      group,
      1
    )
  } catch (e) {
    console.warn(e, "==> addError")
  }
};

export const getUserGroup = async () => {
  const user = await db.getAllAsync('SELECT * FROM user_group');

  if (user.length === 0) return null;

  return user[0].group_name;
};

export const getUserCourseAndGroup = async () => {
  const resultCourse = await getUserCourse();
  const resultGroup = await getUserGroup();

  // console.log(Boolean(resultCourse && resultGroup));

  return Boolean(resultCourse && resultGroup);
}

export const clearBD = async () => {
  await db.execAsync(`
    DROP TABLE IF EXISTS user_course;
    DROP TABLE IF EXISTS user_group;
  `)
};
