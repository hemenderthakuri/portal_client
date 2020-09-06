import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

declare module '@material-ui/core/styles/createMuiTheme' {
    interface Theme {
        button: {
            green: {
                main: string,
                hover: string
            }
        }
    }
    interface ThemeOptions {
        button: {
            green: {
                main: string,
                hover: string
            }
        }
    }
}
const theme = createMuiTheme({
    typography: {
        fontFamily: 'Roboto, sans-serif'
    },
    palette: {
        primary: {
            main: 'rgb(65, 101, 235)',
            //   contrastText: 'rgb(54, 19, 72)'
        },
        text: {
            // primary: '#6a6a6a',
            secondary: '#8a8a8a'
        },
        background: {
            default: '#f6f6f6',
            paper: '#fff',
        },
        error: {
            main: '#e74c3c',
            contrastText: '#fff'
        }
    },
    button: {
        green: {
            main: "rgba(0,173,0,1)",
            hover: "rgba(0,128,0,1)"
        },
    },

    overrides: {
        MuiCssBaseline: {
            '@global': {
            },
        },

        MuiTableCell: {
            head: {
                fontWeight: 600
            }
        },

        MuiFormLabel: {
            root: {
                color: "#3e3e3e",
                fontSize: "0.875rem"
            },

            asterisk: {
                color: "red"
            }
        },

        MuiInputLabel: {
            asterisk: {
                color: "red"
            }
        },

        MuiInputBase: {
            root: {
                background: '#f6f6f6'
            }
        },

        MuiOutlinedInput: {
            root: {
                '&$disabled $notchedOutline': {
                    border: 'none'
                },

                '&:hover $notchedOutline': {
                    borderColor: '#8a8a8a'
                },
            }
        },

        MuiStepLabel: {
            label: {
                '&$active': {
                    fontWeight: 'bold',
                    color: 'rgb(65, 101, 235)'
                },
            },
        },

        MuiStepButton: {
            root: {
                '&:hover': {
                    background: '#dce3f4'
                }
            }
        },

        MuiButton: {
            root: {
                textTransform: 'none'
            }
        },

        MuiTablePagination: {
            spacer: {
                flex: 'none'
            },

            caption: {
                color: '#3E3E3E'
            },

            select: {
                paddingTop: '10px',
                paddingBottom: '10px',
                fontSize: '14px'
            }
        },

        MuiTableSortLabel: {
            active: {
                color: '#8A8A8A !important'
            }
        }

    }
});

export default theme;
