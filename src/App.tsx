import React, { ChangeEvent, FC, FormEvent } from "react"
import { InputField, useInput } from "./components/Common/InputField/InputField"

const App: React.FC = () => {
  const addressInput = useInput('')
  const lSdInput = useInput('')
  const fioInput = useInput('')
  const kadastrovyNumberInput = useInput('')
  const documentInput = useInput('')
  const snilsInput = useInput('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    validateInput(addressInput)
    validateInput(lSdInput)
    validateInput(fioInput)
    validateInput(kadastrovyNumberInput)
    validateInput(documentInput)
    validateInput(snilsInput)
    console.log('Адрес:', addressInput.value, 'ЛС:', lSdInput.value, 'Кадастровый номер:', kadastrovyNumberInput.value)
  }

  const validateInput = (input: { value: string; setError: (value: boolean) => void; setErrorMessage: (value: string) => void }) => {
    const forbiddenCharacters = ['!', '@', '#', '$', '%'];
    console.log(input)
    if (!input.value.trim()) {
      input.setError(true)
      input.setErrorMessage("Поле не может быть пустым")
    } else if (forbiddenCharacters.some(char => input.value.includes(char))) {
      input.setError(true)
      input.setErrorMessage("Недопустимые символы");
    } else {
      input.setError(false)
    }
  }

  return (
    <div className="page-center">
      <form onSubmit={handleSubmit}>
        <h3 className="form-title">Form</h3>
        <InputField
          label="Адрес"
          mask=""
          type="text"
          name="address"
          placeholder="г. Тюмень, ул. Профсоюзная, д. 88, кв. 19"
          {...addressInput}
        />
        <InputField
          label="Лицевой счет"
          mask=""
          type="number"
          name="password"
          placeholder="0506 372737 37538 3934"
          {...lSdInput}
        />
        <InputField
          label="ФИО"
          mask=""
          type="text"
          name="fio"
          placeholder="Иванов Иван Иванович"
          {...fioInput}
        />
        <InputField
          label="Кадастровый номер"
          mask="99.99.9999999:9999"
          type="text"
          name="kadastrovyNumber"
          placeholder="99.99.9999999:9999"
          {...kadastrovyNumberInput}
        />
        <InputField
          label="Докумет"
          mask=""
          type="text"
          name="document"
          placeholder="Серия номер"
          {...documentInput}
        />
        <InputField
          label="СНИЛС"
          mask="999-999-999 99"
          type="text"
          name="snils"
          placeholder="999-999-999 99"
          {...snilsInput}
        />
        <button className="submit-btn">Отправить</button>
      </form>
    </div>
  )
}

export default App;
