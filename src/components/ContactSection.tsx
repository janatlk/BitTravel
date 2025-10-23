import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';
import { Email, Phone, LocationOn, Telegram } from '@mui/icons-material';

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

const ContactCard: React.FC<ContactCardProps> = ({ icon, title, children }) => (
  <Box sx={{
    bgcolor: 'rgba(255, 255, 255, 0.05)',
    p: 3,
    borderRadius: 2,
    transition: 'all 0.3s ease',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
      bgcolor: 'rgba(255, 255, 255, 0.08)'
    }
  }}>
    <Box sx={{
      bgcolor: 'rgba(180, 150, 80, 0.15)',
      width: 56,
      height: 56,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      mb: 2,
      '& .MuiSvgIcon-root': {
        color: '#D4AF37' // Gold color for icons
      }
    }}>
      {icon}
    </Box>
    <Typography variant="h6" color="common.white" sx={{ mb: 1 }}>
      {title}
    </Typography>
    {children}
  </Box>
);

const ContactSection: React.FC = () => {
  return (
    <Box component="section" sx={{ 
      bgcolor: '#000000',
      py: 8,
      color: 'common.white',
      width: '100%',
      borderTop: '1px solid rgba(180, 150, 80, 0.2)'
    }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" sx={{ 
          color: 'common.white', 
          mb: 6, 
          textAlign: 'center',
          fontWeight: 700,
          position: 'relative',
          '&:after': {
            content: '""',
            position: 'absolute',
            left: '50%',
            bottom: -12,
            width: 80,
            height: 4,
            bgcolor: '#D4AF37',
            borderRadius: 2,
            transform: 'translateX(-50%)'
          }
        }}>
          Contact Us
        </Typography>
        <Box sx={{ 
          display: 'grid',
          gridTemplateColumns: { 
            xs: '1fr', 
            sm: 'repeat(2, 1fr)', 
            md: 'repeat(4, 1fr)' 
          },
          gap: 3
        }}>
          {/* Phone Card */}
          <ContactCard 
            icon={<Phone color="primary" sx={{ fontSize: 32 }} />} 
            title="Phone"
          >
            <Link href="tel:+420123456789" color="#D4AF37" sx={{ display: 'block', mt: 1, '&:hover': { color: '#F5D76E', textDecoration: 'none' } }}>
              +420 123 456 789
            </Link>
          </ContactCard>

          {/* Email Card */}
          <ContactCard 
            icon={<Email color="primary" sx={{ fontSize: 32 }} />} 
            title="Email"
          >
            <Link href="mailto:info@bittravel.com" color="#D4AF37" sx={{ display: 'block', mt: 1, '&:hover': { color: '#F5D76E', textDecoration: 'none' } }}>
              info@bittravel.com
            </Link>
          </ContactCard>

          {/* Address Card */}
          <ContactCard 
            icon={<LocationOn color="primary" sx={{ fontSize: 32 }} />} 
            title="Address"
          >
            <Typography variant="body2" color="rgba(255, 255, 255, 0.8)" sx={{ mt: 1 }}>
              Václavské nám. 1,<br />
              110 00 Prague 1,<br />
              Czech Republic
            </Typography>
          </ContactCard>

          {/* Telegram Card */}
          <ContactCard 
            icon={<Telegram color="primary" sx={{ fontSize: 32 }} />} 
            title="Telegram"
          >
            <Link 
              href="https://t.me/bittravel" 
              target="_blank" 
              rel="noopener noreferrer"
              color="#D4AF37" 
              sx={{ 
                display: 'block', 
                mt: 1,
                '&:hover': {
                  color: '#F5D76E',
                  textDecoration: 'none'
                }
              }}
            >
              @bittravel
            </Link>
          </ContactCard>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactSection;
