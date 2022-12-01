import './footer.css'

const today = new Date();
export default function Footer() {
  return (
    <div className='footer'>
       <p className='footpage'>Copyright &copy; <b>{today.getFullYear()} </b></p>
    </div>
  )
}

  