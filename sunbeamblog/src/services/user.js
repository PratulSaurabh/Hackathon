import axios from 'axios'
// import { config } from './config'

export async function registerUser(
  fullName,
  email,
  password,
  phone_no
) { console.log('fn: ' + fullName+ ' e: ' + email + ' pas: ' + password + ' pho: ' + phone_no)
  try {
    // create url
    // const url = `${config.serverUrl}/user/register`
    const url = 'http://localhost:4000/user/register'
    // create the body
    const body = {
      fullName,
      email,
      password,
      phone_no,
    }

    // make the API call
    const response = await axios.post(url, body)

    // return response body
    return response.data
  } catch (ex) {
    console.error('exception: ', ex)
  }
}

export async function loginUser(email, password) {
    console.log('em: ' + email + ' pas: ' + password)
    return {
        status: 'success',
        data: email + password + "okay"
    }
  try {
    // create url
    // const url = `${config.serverUrl}/user/login`
    const url = 'http://localhost:4000/user/login'

    // create the body
    const body = {
      email,
      password,
    }

    // make the API call
    // const response = await axios.post(url, body)

    // return response body
    const response = {
        status: 'success',
        data: email + password + "okay"
    }

    return response.data
  } catch (ex) {
    console.error('exception: ', ex)
  }
}
