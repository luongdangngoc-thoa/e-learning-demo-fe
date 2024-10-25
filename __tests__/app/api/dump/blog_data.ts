// Mock data for get all blog api
export const mockListBlogDataSuccess = {
  data: [
    {
      id: 1,
      user_id: '91799f35-d2e7-4dc4-ab96-935d85ec6f00',
      category_id: 1,
      logo: '',
      title: 'motech',
      description: 'thoa',
      content: 'thoa123',
      view: 1,
      tags: {
        id: 1
      },
      created_at: '2024-07-17T09:46:15',
      updated_at: null,
      categories: {
        id: 1,
        title: 'Design'
      }
    }
  ],
  error: null
}

export const mockListBlogDataError = {
  data: null,
  error: {
    code: '42P01',
    details: null,
    hint: null,
    message: 'relation "public.Blog123" does not exist'
  }
}

export const mockListBlogErrorDataWithoutMessage = {
  data: null,
  error: {
    code: '42P01',
    details: null,
    hint: null
  }
}

// Mock data for get blog by id api
export const mockBlogDataSuccess = {
  data: {
    id: 1,
    user_id: '91799f35-d2e7-4dc4-ab96-935d85ec6f00',
    category_id: 1,
    logo: '',
    title: 'motech',
    description: 'thoa',
    content: 'thoa123',
    view: 1,
    tags: {
      id: 1
    },
    created_at: '2024-07-17T09:46:15',
    updated_at: null,
    categories: {
      id: 1,
      title: 'Design'
    }
  },
  error: null
}

export const mockBlogDataError = {
  data: null,
  error: {
    code: '42P01',
    details: null,
    hint: null,
    message: 'relation "public.Blog123" does not exist'
  }
}

export const mockBlogErrorDataWithoutMessage = {
  data: null,
  error: {
    code: '42P01',
    details: null,
    hint: null
  }
}
