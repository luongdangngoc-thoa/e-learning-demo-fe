import { type AuthError, type AuthResponse, type AuthTokenResponsePassword, type Session } from '@supabase/supabase-js'
import { type UploadApiResponse } from 'cloudinary'

export const loginDataSuccessMock: AuthTokenResponsePassword = {
  data: {
    session: {
      access_token: 'some-access-token',
      refresh_token: 'some-refresh-token'
    } as Session,
    user: {
      id: '9ccb80f5-3f2d-43d6-80c2-eb67268a341d',
      aud: 'authenticated',
      role: 'authenticated',
      email: 'dev.khoanguyen79@gmail.com',
      email_confirmed_at: '2024-07-22T03:47:10.382147Z',
      phone: '',
      confirmed_at: '2024-07-22T03:47:10.382147Z',
      last_sign_in_at: '2024-07-22T03:47:52.740627855Z',
      app_metadata: {
        provider: 'email',
        providers: ['email']
      },
      user_metadata: {},
      identities: [],
      created_at: '2024-07-22T03:47:10.382147Z',
      updated_at: '2024-07-22T03:47:52.742771Z',
      is_anonymous: false
    }
  },
  error: null
}

export const loginDataErrorMock: AuthTokenResponsePassword = {
  data: { user: null, session: null },
  error: {
    status: 400,
    message: 'Invalid credentials'
  } as AuthError
}

export const loginDataErrorWithoutStatusMock: AuthTokenResponsePassword = {
  data: { user: null, session: null },
  error: {
    message: 'Invalid credentials'
  } as AuthError
}

export const signUpSuccessDataMock: AuthResponse = {
  data: {
    user: {
      id: '8c0d7c1d-1ca5-439e-8eeb-9eb5e5f3980c',
      aud: 'authenticated',
      role: 'authenticated',
      email: 'khoa12342@gmail.com',
      email_confirmed_at: '2024-07-24T08:17:31.608636244Z',
      phone: '',
      last_sign_in_at: '2024-07-24T08:17:31.610385374Z',
      app_metadata: {
        provider: 'email',
        providers: ['email']
      },
      user_metadata: {
        email: 'khoa12342@gmail.com',
        email_verified: false,
        phone_verified: false,
        sub: '8c0d7c1d-1ca5-439e-8eeb-9eb5e5f3980c',
        username: 'khoadev'
      },
      identities: [
        {
          identity_id: '4439e6cc-61d2-4acd-8595-ab1bb7fa5535',
          id: '8c0d7c1d-1ca5-439e-8eeb-9eb5e5f3980c',
          user_id: '8c0d7c1d-1ca5-439e-8eeb-9eb5e5f3980c',
          identity_data: {
            email: 'khoa12342@gmail.com',
            email_verified: false,
            phone_verified: false,
            sub: '8c0d7c1d-1ca5-439e-8eeb-9eb5e5f3980c',
            username: 'khoadev'
          },
          provider: 'email',
          last_sign_in_at: '2024-07-24T08:17:31.607157021Z',
          created_at: '2024-07-24T08:17:31.607181Z',
          updated_at: '2024-07-24T08:17:31.607181Z'
        }
      ],
      created_at: '2024-07-24T08:17:31.605395Z',
      updated_at: '2024-07-24T08:17:31.611666Z',
      is_anonymous: false
    },
    session: {
      access_token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzIxODEyNjUxLCJpYXQiOjE3MjE4MDkwNTEsImlzcyI6Imh0dHA6Ly8xMjcuMC4wLjE6NTQzMjEvYXV0aC92MSIsInN1YiI6IjhjMGQ3YzFkLTFjYTUtNDM5ZS04ZWViLTllYjVlNWYzOTgwYyIsImVtYWlsIjoia2hvYTEyMzQyQGdtYWlsLmNvbSIsInBob25lIjoiIiwiYXBwX21ldGFkYXRhIjp7InByb3ZpZGVyIjoiZW1haWwiLCJwcm92aWRlcnMiOlsiZW1haWwiXX0sInVzZXJfbWV0YWRhdGEiOnsiZW1haWwiOiJraG9hMTIzNDJAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJwaG9uZV92ZXJpZmllZCI6ZmFsc2UsInN1YiI6IjhjMGQ3YzFkLTFjYTUtNDM5ZS04ZWViLTllYjVlNWYzOTgwYyIsInVzZXJuYW1lIjoia2hvYWRldiJ9LCJyb2xlIjoiYXV0aGVudGljYXRlZCIsImFhbCI6ImFhbDEiLCJhbXIiOlt7Im1ldGhvZCI6InBhc3N3b3JkIiwidGltZXN0YW1wIjoxNzIxODA5MDUxfV0sInNlc3Npb25faWQiOiIzMWI1YWUyZC1hMjc4LTRlODQtODgwMy0zMDc0YTZiNWNhN2IiLCJpc19hbm9ueW1vdXMiOmZhbHNlfQ.wVEgLifEgc2qt0qtrQZHn3Tou9pHVbzzA0vPPFHtu-I',
      token_type: 'bearer',
      expires_in: 3600,
      expires_at: 1721812651,
      refresh_token: 'A6LwdzQEz93T4_g06TZjqw',
      user: {
        id: '8c0d7c1d-1ca5-439e-8eeb-9eb5e5f3980c',
        aud: 'authenticated',
        role: 'authenticated',
        email: 'khoa12342@gmail.com',
        email_confirmed_at: '2024-07-24T08:17:31.608636244Z',
        phone: '',
        last_sign_in_at: '2024-07-24T08:17:31.610385374Z',
        app_metadata: {
          provider: 'email',
          providers: ['email']
        },
        user_metadata: {
          email: 'khoa12342@gmail.com',
          email_verified: false,
          phone_verified: false,
          sub: '8c0d7c1d-1ca5-439e-8eeb-9eb5e5f3980c',
          username: 'khoadev'
        },
        identities: [
          {
            identity_id: '4439e6cc-61d2-4acd-8595-ab1bb7fa5535',
            id: '8c0d7c1d-1ca5-439e-8eeb-9eb5e5f3980c',
            user_id: '8c0d7c1d-1ca5-439e-8eeb-9eb5e5f3980c',
            identity_data: {
              email: 'khoa12342@gmail.com',
              email_verified: false,
              phone_verified: false,
              sub: '8c0d7c1d-1ca5-439e-8eeb-9eb5e5f3980c',
              username: 'khoadev'
            },
            provider: 'email',
            last_sign_in_at: '2024-07-24T08:17:31.607157021Z',
            created_at: '2024-07-24T08:17:31.607181Z',
            updated_at: '2024-07-24T08:17:31.607181Z'
          }
        ],
        created_at: '2024-07-24T08:17:31.605395Z',
        updated_at: '2024-07-24T08:17:31.611666Z',
        is_anonymous: false
      }
    }
  },
  error: null
}

export const signUpFailedDataMock: AuthResponse = {
  data: {
    user: null,
    session: null
  },
  error: {
    status: 401,
    message: 'User already registered'
  } as AuthError
}

export const signUpFailedWithoutStatusDataMock: AuthResponse = {
  data: {
    user: null,
    session: null
  },
  error: {
    message: 'User already registered'
  } as AuthError
}

export const cloudinaryUploadResponseSuccessMock: UploadApiResponse = {
  asset_id: '21d6558f8ee8a564966a6832fd1d914e',
  public_id: 'elearning/447845941_800457788843764_5159217167137250725_n.jpg_rfek3i',
  version: 1721723388,
  version_id: 'ed48ac772859c94b31853172cab5506f',
  signature: 'a8c91e4a5f743157d9d11923532722e657b2ce26',
  width: 1041,
  height: 890,
  format: 'jpg',
  resource_type: 'image',
  created_at: '2024-07-23T08:29:48Z',
  tags: [],
  bytes: 74494,
  type: 'upload',
  etag: '58d95e7861e359508efc994ca4bbf7f2',
  placeholder: false,
  url: 'http://example.com/test.png',
  secure_url: 'http://example.com/test.png',
  folder: 'elearning',
  access_mode: 'public',
  original_filename: '447845941_800457788843764_5159217167137250725_n',
  api_key: '414913691857737',
  pages: 0,
  moderation: [],
  access_control: [],
  context: {},
  metadata: []
}

export const cloudinaryUploadResponseErrorMock = {
  http_code: 500,
  name: 'Error',
  message: 'Cloudinary error'
}
