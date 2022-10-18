import { NextApiRequest, NextApiResponse } from 'next';
import DB from '@database';

const getOneUser = async (
  request: NextApiRequest,
  response: NextApiResponse
) => {
  try {
    const db = new DB();
    const id = request.query.id;
    const user = await db.getById(id as string);
    response.status(200).json(user);
  } catch (error) {
    console.error(error);
    response.statusCode = 500;
    response.end(
      JSON.stringify({ length: 0, data: [], error: 'Something went wrong' })
    );
  }
};

export default getOneUser;
