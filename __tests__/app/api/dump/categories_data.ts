// categories_data.ts
export const mockCategoriesDataSuccess = {
  data: [
    {
      id: 1,
      title: 'Design',
      logo: '',
      description: 'Design courses',
      created_at: '2024-07-17T02:33:15',
      updated_at: null
    },
    {
      id: 2,
      title: 'aaaaa',
      logo: 'EMPTY',
      description: 'bbbbb',
      created_at: '2024-07-17T09:43:26',
      updated_at: null
    }
  ],
  error: null
}

export const mockCategoriesDataError = {
  data: null,
  error: {
    code: '42P01',
    details: null,
    hint: null,
    message: 'relation "public.categories123" does not exist'
  }
}

export const mockCategoriesErrorDataWithoutMessage = {
  data: null,
  error: {
    code: '42P01',
    details: null,
    hint: null
  }
}
