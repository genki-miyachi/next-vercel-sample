'use client'

import { FormState, updateTask } from '@/actions/task'
import { TaskDocument } from '@/models/task'
import { useState } from 'react'
import { useFormState, useFormStatus } from 'react-dom'

interface EditTaskFormProps {
  task: TaskDocument
}

const EditTaskForm: React.FC<EditTaskFormProps> = ({ task }) => {
  const [title, setTitle] = useState(task.title)
  const [discription, setDescription] = useState(task.description)
  const [dueDate, setDueDate] = useState(task.dueDate)
  const [isCompleted, setIsCompleted] = useState(task.isCompleted)

  const updateTaskWithId = updateTask.bind(null, task._id)
  const initialState: FormState = { error: '' }
  const [state, formAction] = useFormState(updateTaskWithId, initialState)

  const SubmitButton = () => {
    const { pending } = useFormStatus()

    return (
      <button
        type='submit'
        className='mt-8 py-2 w-full rounded-md text-white bg-gray-800 hover:bd-gray-700 text-sm font-semibold shadow-sm disabled: bg-gray-400'
        disabled={pending}
      >
        Edit
      </button>
    )
  }

  return (
    <div className='mt-10 mx-auto w-full max-w-sm'>
      <form action={formAction}>
        <div>
          <label htmlFor='title' className='block text-sm font-midium'>
            タイトル
          </label>
          <input
            type='text'
            id='title'
            name='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
            value={discription}
            onChange={(e) => setDescription(e.target.value)}
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
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            min='2020-01-01'
            max='2999-12-31'
            required
            className='block mt-2 py-1.5 px-2 w-full rounded-md vorder-0 shadow
          hsm ring-1 ring-inset ring-gray-300'
          />
        </div>
        <div className='mt-6 flex iterms-center'>
          <input
            type='checkbox'
            id='isCompleted'
            name='isCompleted'
            className='mr-2 w-4 h-4'
            checked={isCompleted}
            onChange={(e) => setIsCompleted(e.target.checked)}
          />
          <label htmlFor='isCompleted' className='text-sm'>
            タスクを完了にする
          </label>
        </div>
        <SubmitButton />
        {state.error !== '' && <p className='mt-2 text-red-500 text-sm'>{state.error}</p>}
      </form>
    </div>
  )
}

export default EditTaskForm
