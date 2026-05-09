import { InputContainer } from "./styles.js"

export default function index({ value, onChange }) {
  return (
    <InputContainer>
    <input value={value} onChange={onChange} />
    </InputContainer>
  )
}
