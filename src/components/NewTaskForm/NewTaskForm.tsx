const NewTaskForm = () => {
  return (
    <div className='mt-10 mx-auto w-full max-w-sm'>
      <form action=''>
        <div>
          <label htmlFor='title' className='block text-sm font-midium'>
            タイトル
          </label>
          <input
            type='text'
            id='title'
            name='title'
            required
            className='block mt-2 py-1.5 px-2 w-full rounded-md vorder-0 shadow
          hsm ring-1 ring-inset ring-gray-300'
          />
        </div>
        <div className='mt-6'>
          <label htmlFor='discription' className='block text-sm font-midium'>
            説明
          </label>
          <input
            type='text'
            id='discription'
            name='discription'
            required
            className='block mt-2 py-1.5 px-2 w-full rounded-md vorder-0 shadow
          hsm ring-1 ring-inset ring-gray-300'
          />
        </div>
        <div className='mt-6'>
          <label htmlFor='dueDate' className='block text-sm font-midium'>
            期限
          </label>
          <input
            type='date'
            id='dueDate'
            name='dueDate'
            min='2020-01-01'
            max='2999-12-31'
            required
            className='block mt-2 py-1.5 px-2 w-full rounded-md vorder-0 shadow
          hsm ring-1 ring-inset ring-gray-300'
          />
        </div>
        <button
          type='submit'
          className='mt-8 py-2 w-full rounded-md text-white bg-gray-800 hover:bd-gray-700 text-sm font-semibold shadow-sm '
        >
          Create
        </button>
      </form>
    </div>
  )
}

export default NewTaskForm
