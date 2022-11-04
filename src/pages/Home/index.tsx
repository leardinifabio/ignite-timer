import { Play } from "phosphor-react";
import {
  CountdownButton,
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separettor,
  TaskInput,
} from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <form action=''>
        <FormContainer>
          <label htmlFor='task'>Vou trabalhar em</label>
          <TaskInput
            id='task'
            list='task-suggestions'
            placeholder='Dê um nome para o seu projeto'
          />

          <datalist id='task-suggestions'>
            <option value='Projeto 1' />
            <option value='Projeto 2' />
            <option value='Projeto 3' />
            <option value='Projeto 4' />
            <option value='Projeto 5' />
          </datalist>

          <label htmlFor='minutesAmount'>durante</label>
          <MinutesAmountInput
            id='minutesAmount'
            type='number'
            placeholder='00'
            step={5}
            min={5}
            max={60}
          />
          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separettor>:</Separettor>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <CountdownButton type='submit'>
          <Play size={24} />
          Começar
        </CountdownButton>
      </form>
    </HomeContainer>
  );
}
