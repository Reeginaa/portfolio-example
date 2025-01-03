import { styled, Toolbar } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import MenuItem from '@mui/material/MenuItem'

const NavBar = () => {

  const StyledToolbar = styled(Toolbar)(() => ({
    display: "flex",
    justifyContent: "space-evenly"
  }))

  return (
    <>
      <AppBar position="absolute">
        <StyledToolbar>
          <MenuItem>About</MenuItem>
          <MenuItem>Skills</MenuItem>
          <MenuItem>Projects</MenuItem>
        </StyledToolbar>
      </AppBar>
    </>
  )
}

export default NavBar
