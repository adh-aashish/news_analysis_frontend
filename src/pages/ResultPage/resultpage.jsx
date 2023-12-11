import InputForm from "../../components/InputForm/inputform"
import Logo from "../../components/Logo/logo"
import { MdSettings } from "react-icons/md"
import "./resultpage.css"

const ResultPage = () => {
  return (
    <div className="ResultPage">
      <header className="heading">
        <Logo />
        <InputForm />
        <MdSettings />
      </header>
   </div>
  )
}

export default ResultPage 
