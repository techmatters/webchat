/**
 * Copyright (C) 2021-2023 Technology Matters
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see https://www.gnu.org/licenses/.
 */

import { RECAPTCHA_SECRET } from '../../private/secret';

export async function validateUser(token: string) {
  try {
    const response = await fetch(`http://localhost:3000/verify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${RECAPTCHA_SECRET}&response=${token}`,
    });

    const data = await response.json();
    console.log('>>> data', data);

    if (data.success) {
      return true;
    }
    return false;
  } catch (error) {
    console.log('>>> error', error);
    return false;
  }
}
