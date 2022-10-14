import { IncomingMessage, ServerResponse } from 'http';
import DB from '@database';

const getAllUsers = async (
  request: IncomingMessage,
  response: ServerResponse
) => {
  try {
    const db = new DB();
    const allEntries = await db.getAll();
    const length = allEntries.length;

    response.statusCode = 200;
    response.setHeader('Content-type', 'application/json');
    response.end(JSON.stringify({ data: allEntries, length }));
  } catch (error) {
    console.error(error);
    response.statusCode = 500;
    response.end(
      JSON.stringify({ length: 0, data: [], error: 'Something went wrong' })
    );
  }
};

export default getAllUsers;
