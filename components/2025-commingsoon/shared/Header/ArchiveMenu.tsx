import { Typography } from '@mui/material'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import Grow from '@mui/material/Grow'
import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'
import Paper from '@mui/material/Paper'
import Popper from '@mui/material/Popper'
import Stack from '@mui/material/Stack'
import { SyntheticEvent, useEffect, useRef, useState } from 'react'

const ArchiveMenu = () => {
  const [open, setOpen] = useState(false)
  const anchorRef = useRef<HTMLButtonElement>(null)

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleClose = (event: Event | SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return
    }

    setOpen(false)
  }

  function handleListKeyDown(event: KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault()
      setOpen(false)
    } else if (event.key === 'Escape') {
      setOpen(false)
    }
  }

  const prevOpen = useRef(open)
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus()
    }

    prevOpen.current = open
  }, [open])

  return (
    <Stack direction="row" spacing={2}>
      <Typography
        sx={{ cursor: 'pointer' }}
        ref={anchorRef}
        onClick={handleToggle}
        className="text-white hover:opacity-80 transition-opacity text-[16px]"
      >
        역대 행사
      </Typography>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom-start' ? 'left top' : 'left bottom',
            }}
          >
            <Paper className="bg-purple-900/90 text-white backdrop-blur-sm">
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  onKeyDown={handleListKeyDown as any}
                >
                  <MenuItem
                    component="a"
                    href="/first"
                    className="hover:bg-purple-800 transition-colors"
                  >
                    테오콘 1기
                  </MenuItem>
                  <MenuItem
                    component="a"
                    href="/second"
                    className="hover:bg-purple-800 transition-colors"
                  >
                    테오콘 2기
                  </MenuItem>
                  <MenuItem
                    component="a"
                    href="/third"
                    className="hover:bg-purple-800 transition-colors"
                  >
                    테오콘 2024
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Stack>
  )
}

export default ArchiveMenu
