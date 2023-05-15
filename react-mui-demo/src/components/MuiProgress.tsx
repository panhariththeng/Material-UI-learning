import { Stack,CircularProgress ,LinearProgress} from '@mui/material'
import React from 'react'

export const MuiProgress = () => {
  return (
	<Stack spacing={2}>
		<CircularProgress/>
		<CircularProgress variant='determinate' value={60} />
		<CircularProgress color='success'/>
		
		<LinearProgress/>
		<LinearProgress variant='determinate' value={60} />
		<LinearProgress color='success'/>
	</Stack>
  )
}
