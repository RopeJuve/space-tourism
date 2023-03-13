import './NavModal.css'
import NavLinks from '../NavLinks/NavLinks'

const NavModal = ({display}) => {
  return (
    <div className='navModal__container' style={{display: display}}>
        <NavLinks display={display} navLinksDisplay={display === 'block'} />
    </div>
  )
}

export default NavModal