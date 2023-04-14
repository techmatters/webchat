import axios from 'axios';

import { RECAPTCHA_SECRET } from '../../private/secret';

export async function validateUser(token: string) {
  /*
   * try {
   *   const response = await fetch(`http://localhost:3000/verify`, {
   *     method: 'POST',
   *     headers: {
   *       'Content-Type': 'application/x-www-form-urlencoded',
   *     },
   *     body: `secret=${RECAPTCHA_SECRET}&response=${token}`,
   *   });
   */

  /*
   *   const data = await response.json();
   *   console.log('>>> data', data);
   */

  /*
   *   if (data.success) {
   *     return true;
   *   }
   *   return false;
   * } catch (error) {
   *   console.log('>>> error', error);
   *   return false;
   * }
   */

  // const APIResponse = [];

  try {
    const response = await axios.post(`http://localhost:3000/verify`, {
      response: token,
      secret: RECAPTCHA_SECRET,
    });
    console.log('>>> respomce', response);
    /*
     *       APIResponse.push(response['data']);
     * return APIResponse;
     */

    return true;
  } catch (error) {
    console.log(error);
  }
}
