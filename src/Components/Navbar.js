
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav>
      <NavLink to = '/'>Home</NavLink>
      <NavLink to='/User'>User</NavLink>
      <NavLink to='/About'>About</NavLink>
    </nav>
  )
}
 
export default Navbar
