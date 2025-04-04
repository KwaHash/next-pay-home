import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  typography: {
    fontFamily: `-apple-system, BlinkMacSystemFont, "Helvetica Neue", "Yu Gothic",
      Verdana, Meiryo, "M+ 1p", sans-serif`,
    allVariants: {
      color: '#484848', // Default text color
    },
  },
  palette: {
    text: {
      primary: '#484848', // Default primary text color
    },
  },
  components: {
    MuiSelect: {
      styleOverrides: {
        select: {
          padding: '10px', // Reset padding for select elements
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          padding: '10px', // Reset padding for outlined input elements
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: '#4f46e5', // Default background color for "contained" buttons
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          borderRadius: '2px',
          padding: '7px',
          fontSize: '16px',
          color: '#fff', // Ensure text color is readable
          '&:hover': {
            backgroundColor: '#3f40d5', // Slightly darker on hover
          },
        },
      },
    },
    MuiPagination: {
      styleOverrides: {
        ul: {
          justifyContent: 'center', // Center align the pagination controls
        },
        root: {
          '& .MuiButtonBase-root': {
            border: '1px solid #ddd',
            color: '#4f46e5',
            fontSize: '18px',
            width: '40px',
            height: '40px',
          },
          '& .Mui-selected': {
            backgroundColor: '#4f46e5 !important',
            border: '1px solid #4f46e5',
            color: 'white',
          },
          '& .Mui-selected:hover': {
            backgroundColor: '#3f40d5 !important',
          },
        },
      },
    },
  },
})

export default theme
