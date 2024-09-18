'use server'

import { Task, TaskModel } from '@/models/task'
import { connectDB } from '@/utils/database'
import { redirect } from 'next/navigation'

export interface FormState {
  error: string
}

export const createTask = async (state: FormState, formDate: FormData) => {
  const newTask: Task = {
    title: formDate.get('title') as string,
    description: formDate.get('discription') as string,
    dueDate: formDate.get('dueDate') as string,
    isCompleted: false,
  }

  try {
    await connectDB()
    await TaskModel.create(newTask)
  } catch (error) {
    state.error = 'タスクの作成に失敗しました'
    return state
  }

  redirect('/')
}
