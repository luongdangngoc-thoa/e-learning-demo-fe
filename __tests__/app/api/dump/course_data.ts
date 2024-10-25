export const mockCourseDataSuccess = {
  data: [
    {
      id: 1,
      user_id: '97a29d3c-f394-454c-ad32-80b3a684ee52',
      category_id: 1,
      title: 'aaaa',
      cost: 10,
      sale_price: 20,
      description: 'mmmm',
      banner: 'tttt',
      duration: 1,
      discount: 2,
      has_access_all_device: true,
      has_certification: true,
      has_money_back_guarantee: true,
      created_at: '2024-07-31T08:37:12',
      updated_at: null,
      categories: {
        id: 1,
        title: 'Desing'
      }
    }
  ],
  error: null
}

export const mockCourseDataError = {
  data: null,
  error: {
    code: '42P01',
    details: null,
    hint: null,
    message: 'relation "public.course" does not exist'
  }
}

export const mockCourseDataErrorWithoutMessage = {
  data: null,
  error: {
    code: '42P01',
    details: null,
    hint: null
  }
}
