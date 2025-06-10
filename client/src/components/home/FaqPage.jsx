import React, { useState } from 'react'
import "./FaqPage.css";
import { Accordion, AccordionSummary, AccordionDetails, IconButton } from '@mui/material';

import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import HomeIcon from "@mui/icons-material/Home";

import {
    Box,
    Typography,
    Link,
    Breadcrumbs,
    Stack,
    Button, TextField, Grid,
} from "@mui/material";


const FaqPage = () => {
    const handleClick = (event) => {
        event.preventDefault();
        console.log("Breadcrumb clicked!");
    };

    const breadcrumbs = [
        <Link
            underline="hover"
            key="1"
            color="inherit"
            href="/"
            onClick={handleClick}
        >
            <HomeIcon sx={{ mr: 0.6 }} fontSize="small" />
            Home
        </Link>,
        <Typography key="1" className="product-breadcrumb-particular-page">
            FAQ
        </Typography>,
    ];

    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ email, subject, message });
    };

    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Grid>
            <Box>
                <Stack spacing={2} className="product-breadcrumb">
                    <Breadcrumbs
                        separator={<NavigateNextIcon fontSize="small" />}
                        aria-label="breadcrumb"
                    >
                        {breadcrumbs}
                    </Breadcrumbs>
                </Stack>

                <Grid container spacing={4} sx={{ padding: '4rem' }} className='faq_container'>
                    <Grid item xs={12} sm={6} className='faq_section'>
                        <Typography
                            variant="h4"
                            gutterBottom
                            sx={{
                                color: 'var(--Gray-900, #191C1F)',
                                fontSize: '32px',
                                fontStyle: 'normal',
                                fontWeight: 600,
                                lineHeight: '40px',
                                marginBottom: "30px",
                            }}
                        >
                            Frequently Asked Questions
                        </Typography>

                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{

                        }}>
                            <AccordionSummary
                                expandIcon={<IconButton sx={{
                                    color: expanded === 'panel1' ? '#fff' : 'inherit'
                                }} >{expanded === 'panel1' ? '-' : '+'}</IconButton>}
                                aria-controls="panel1-content"
                                id="panel3-header"
                                sx={{
                                    background: expanded === 'panel1' ? '#0712B7' : 'transparent',
                                    color: expanded === 'panel1' ? '#fff' : 'inherit',
                                    '&:hover': {
                                        background: expanded === 'panel1' ? '#0712B7' : 'rgba(7, 18, 183, 0.1)',
                                    }, borderRadius: "4px 4px 0px 0px"
                                }}
                            >
                                <Typography variant="h6" sx={{
                                    color: expanded === 'panel1' ? '#fff' : 'inherit', fontSize: "18px", fontWeight: "500"
                                }}>Can I return a product if it is defective or not working properly?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={{
                                    fontSize: "14px",
                                    fontWeight: "500"
                                }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                            <AccordionSummary
                                expandIcon={<IconButton sx={{
                                    color: expanded === 'panel2' ? '#fff' : 'inherit'
                                }}>{expanded === 'panel2' ? '-' : '+'}</IconButton>}
                                aria-controls="panel2-content"
                                id="panel2-header"
                                sx={{
                                    background: expanded === 'panel2' ? '#0712B7' : 'transparent',
                                    color: expanded === 'panel2' ? '#fff' : 'inherit',
                                    '&:hover': {
                                        background: expanded === 'panel2' ? '#0712B7' : 'rgba(7, 18, 183, 0.1)',
                                    }, borderRadius: "4px 4px 0px 0px"
                                }}
                            >
                                <Typography variant="h6" sx={{
                                    color: expanded === 'panel2' ? '#fff' : 'inherit', fontSize: "18px", fontWeight: "500"
                                }}>How long does delivery take after I place an order?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={{
                                    fontSize: "14px",
                                    fontWeight: "500"
                                }}>
                                    Delivery typically takes 3–7 business days, depending on your location. For exact delivery timelines, you can check the estimated delivery date displayed on the product page or in your order confirmation email.
                                </Typography>
                                <Typography sx={{
                                    fontSize: "14px",
                                    fontWeight: "500"
                                }}>
                                    <ul>
                                        <li>We offer fast and reliable delivery options to suit your needs</li>
                                        <li>Track your order easily through your account or the tracking link provided via email.</li>
                                        <li>Standard delivery takes 3–7 business days, while express shipping is available for select locations.</li>
                                        <li>Delivery charges and estimated timelines are shown during checkout.</li>
                                    </ul>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                            <AccordionSummary
                                expandIcon={<IconButton sx={{
                                    color: expanded === 'panel3' ? '#fff' : 'inherit'
                                }}>{expanded === 'panel3' ? '-' : '+'}</IconButton>}
                                aria-controls="panel3-content"
                                id="panel3-header"
                                sx={{
                                    background: expanded === 'panel3' ? '#0712B7' : 'transparent',
                                    color: expanded === 'panel3' ? '#fff' : 'inherit',
                                    '&:hover': {
                                        background: expanded === 'panel3' ? '#0712B7' : 'rgba(7, 18, 183, 0.1)',
                                    }, borderRadius: "4px 4px 0px 0px"
                                }}
                            >
                                <Typography variant="h6" sx={{
                                    color: expanded === 'panel3' ? '#fff' : 'inherit', fontSize: "18px", fontWeight: "500"
                                }}>What is the warranty period for products purchased on your website?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={{
                                    fontSize: "14px",
                                    fontWeight: "500"
                                }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                            <AccordionSummary
                                expandIcon={<IconButton sx={{
                                    color: expanded === 'panel4' ? '#fff' : 'inherit'
                                }}>{expanded === 'panel4' ? '-' : '+'}</IconButton>}
                                aria-controls="panel4-content"
                                id="panel4-header"
                                sx={{
                                    background: expanded === 'panel4' ? '#0712B7' : 'transparent',
                                    color: expanded === 'panel4' ? '#fff' : 'inherit',
                                    '&:hover': {
                                        background: expanded === 'panel4' ? '#0712B7' : 'rgba(7, 18, 183, 0.1)',
                                    }, borderRadius: "4px 4px 0px 0px"
                                }}
                            >
                                <Typography variant="h6" sx={{
                                    color: expanded === 'panel4' ? '#fff' : 'inherit', fontSize: "18px", fontWeight: "500"
                                }}>Can I cancel my order after it has been placed?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={{
                                    fontSize: "14px",
                                    fontWeight: "500"
                                }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                            <AccordionSummary
                                expandIcon={<IconButton sx={{
                                    color: expanded === 'panel5' ? '#fff' : 'inherit'
                                }}>{expanded === 'panel5' ? '-' : '+'}</IconButton>}
                                aria-controls="panel5-content"
                                id="panel5-header"
                                sx={{
                                    background: expanded === 'panel5' ? '#0712B7' : 'transparent',
                                    color: expanded === 'panel5' ? '#fff' : 'inherit',
                                    '&:hover': {
                                        background: expanded === 'panel5' ? '#0712B7' : 'rgba(7, 18, 183, 0.1)',
                                    }, borderRadius: "4px 4px 0px 0px"
                                }}
                            >
                                <Typography variant="h6" sx={{
                                    color: expanded === 'panel5' ? '#fff' : 'inherit', fontSize: "18px", fontWeight: "500"
                                }}>Do you provide installation services for large appliances or electronics?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={{
                                    fontSize: "14px",
                                    fontWeight: "500"
                                }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>

                    <Grid item xs={12} sm={6} >
                        <Box
                            sx={{
                                padding: '20px',
                                border: '1px solid #ccc',
                                borderRadius: '4px',
                                background: 'var(--Warning-100, #FBF4CE)',
                                width: "55%",
                                marginLeft: "10rem",
                                width: "424px",
                            }}
                        >
                            <Grid sx={{
                                padding: "10px 8px 0px 8px"
                            }}>
                                <Typography variant="h5" gutterBottom sx={{
                                    color: "var(--Gray-900, #191C1F)",
                                    fontSize: "20px",
                                    fontStyle: "normal",
                                    fontWeight: "500",
                                    lineHeight: "24px",
                                }}>
                                    Don’t find your answer, Ask for support.
                                </Typography>

                                <Typography variant="body1" mb={2} sx={{
                                    fontSize: "15px",
                                    fontWeight: "500"
                                }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </Typography>
                            </Grid>

                            <form onSubmit={handleSubmit} className="faq_form">
                                <TextField
                                    label="Email Address"
                                    margin="normal"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    variant="outlined"
                                    InputProps={{
                                        style: {
                                            height: '45px',
                                            padding: '5px 16px',
                                            borderRadius: '4px',
                                            background: '#fff',
                                            fontSize: '14px',
                                        },
                                    }}
                                    InputLabelProps={{
                                        style: { fontSize: '14px' },
                                    }}
                                    className="faq_fild"
                                    sx={{
                                        width: '360px',
                                        fontSize: '14px',
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': {
                                                border: 'none',
                                            },
                                            '&:hover fieldset': {
                                                border: 'none',
                                            },
                                            '&.Mui-focused fieldset': {
                                                border: 'none',
                                            },
                                        },
                                    }}
                                />

                                <TextField
                                    label="Subject"
                                    margin="normal"
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    variant="outlined"
                                    InputProps={{
                                        style: {
                                            height: '45px',
                                            padding: '5px 16px',
                                            borderRadius: '4px',
                                            background: '#fff',
                                        },
                                    }}
                                    InputLabelProps={{
                                        style: { fontSize: '14px' },
                                    }}
                                    className="faq_fild"
                                    sx={{
                                        width: '360px',
                                        fontSize: '14px',
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': {
                                                border: 'none',
                                            },
                                            '&:hover fieldset': {
                                                border: 'none',
                                            },
                                            '&.Mui-focused fieldset': {
                                                border: 'none',
                                            },
                                        },
                                    }}
                                />


                                <TextField
                                    label="Message (Optional)"
                                    margin="normal"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    variant="outlined"
                                    multiline
                                    rows={5}
                                    InputProps={{
                                        // disableUnderline: true,
                                        style: {
                                            padding: '10px 16px',
                                            borderRadius: '4px',
                                            background: '#fff',
                                        },
                                    }}
                                    InputLabelProps={{
                                        style: { fontSize: '14px' },
                                    }}
                                    className="faq_fild1"
                                    sx={{
                                        width: '360px',
                                        fontSize: '14px',
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': {
                                                border: 'none',
                                            },
                                            '&:hover fieldset': {
                                                border: 'none',
                                            },
                                            '&.Mui-focused fieldset': {
                                                border: 'none',
                                            },
                                        },
                                    }}
                                />

                                <Button
                                    type="submit"
                                    variant="contained"
                                    sx={{
                                        marginTop: '16px',
                                        width: '60%',
                                        backgroundColor: '#0712B7',
                                        gap: '8px',
                                        '&:hover': {
                                            backgroundColor: '#050B8F',
                                        },
                                    }}
                                >
                                    Send Message <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20" fill="none">
                                        <path d="M3.125 10H16.875" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M11.25 4.375L16.875 10L11.25 15.625" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </Button>
                            </form>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Grid>
    )
}


export default FaqPage