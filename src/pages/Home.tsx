import UiButton from 'Uikit/UiButton'

import {
  useDeleteExampleMutation,
  useExampleQuery,
  useExamplesQuery,
  usePostExampleMutation,
  usePutExampleMutation,
} from 'hooks/request/exampleQuery'
import { IExample } from 'models/IExample'

import HomeDetail from 'components/Home/HomeDetail'
const body = { id: 123, title: 'New example' }

const Home = () => {
  const { data: examples } = useExamplesQuery()
  const { data: example } = useExampleQuery('1')
  const createExample = usePostExampleMutation()
  const updateExample = usePutExampleMutation()
  const deleteExample = useDeleteExampleMutation()

  const createNewExample = () => {
    createExample.mutate(
      { body },
      {
        onSuccess: (resp) => console.info(resp),
      }
    )
  }

  const updateCurrentExample = () => {
    updateExample.mutate(
      { body, id: '123' },
      {
        onSuccess: (resp) => console.info(resp),
      }
    )
  }

  const deleteCurrentExample = () => {
    deleteExample.mutate(
      { id: '123' },
      {
        onSuccess: (resp) => console.info(resp),
      }
    )
  }

  return (
    <div>
      <h4>Lista de ejemplos</h4>
      {examples &&
        examples.map((example: IExample, index: number) => {
          return (
            <p key={index} className='subtitle1'>
              {example.title}
            </p>
          )
        })}
      <h4>Detalle de ejemplo: {example?.id}</h4>
      <UiButton onClick={createNewExample}> Create example</UiButton>
      <UiButton onClick={updateCurrentExample}> Update example</UiButton>
      <UiButton onClick={deleteCurrentExample}> Delete example</UiButton>
      <HomeDetail />
    </div>
  )
}

export default Home
