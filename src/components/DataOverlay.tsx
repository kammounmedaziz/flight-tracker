import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { Flight as FlightIcon } from '@mui/icons-material';
import { IStateVectorData } from '../opensky';

interface ILocalProps {
  stateVectors: IStateVectorData;
}
type Props = ILocalProps;

const DataOverlay: React.FC<Props> = (props) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'relative',
        width: 200,
        height: 140,
        background: theme.palette.mode === 'dark' 
          ? 'rgba(30, 41, 59, 0.8)' 
          : 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)', // Safari support
        borderRadius: 3,
        border: theme.palette.mode === 'dark' 
          ? '1px solid rgba(100, 116, 139, 0.2)'
          : '1px solid rgba(203, 213, 225, 0.3)',
        boxShadow: theme.palette.mode === 'dark'
          ? '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05)'
          : '0 8px 32px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.05)',
        padding: theme.spacing(2),
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: theme.palette.mode === 'dark'
            ? '0 12px 40px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)'
            : '0 12px 40px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.1)',
        }
      }}>

      <Box
        sx={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
        }}>
        
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: 1.5,
          marginBottom: 1
        }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 32,
              height: 32,
              borderRadius: 2,
              background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
              boxShadow: `0 4px 12px ${theme.palette.primary.main}30`,
            }}
          >
            <FlightIcon 
              sx={{ 
                color: 'white', 
                fontSize: 18,
                transform: 'rotate(45deg)'
              }} 
            />
          </Box>
          <Typography
            variant='h6'
            sx={{
              fontWeight: 600,
              color: theme.palette.text.primary,
              letterSpacing: '-0.01em'
            }}>
            {'Live Flights'}
          </Typography>
        </Box>

        <Box sx={{ width: '100%' }}>
          <Typography
            variant='h3'
            sx={{
              fontWeight: 700,
              background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: 1,
              marginBottom: 0.5
            }}>
            {props.stateVectors.states.length.toLocaleString()}
          </Typography>
          
          <Typography
            variant='body2'
            sx={{
              color: theme.palette.text.secondary,
              fontWeight: 500,
              opacity: 0.8
            }}>
            {'Currently visible aircraft'}
          </Typography>
        </Box>

        {/* Animated background element */}
        <Box
          sx={{
            position: 'absolute',
            top: -2,
            right: -2,
            width: 20,
            height: 20,
            borderRadius: '50%',
            background: `linear-gradient(135deg, ${theme.palette.secondary.main}, ${theme.palette.accent?.main || theme.palette.secondary.dark})`,
            opacity: 0.6,
            animation: 'pulse 2s infinite',
            '@keyframes pulse': {
              '0%': {
                transform: 'scale(1)',
                opacity: 0.6,
              },
              '50%': {
                transform: 'scale(1.2)',
                opacity: 0.8,
              },
              '100%': {
                transform: 'scale(1)',
                opacity: 0.6,
              },
            },
          }}
        />
      </Box>
    </Box>
  );
}

export default DataOverlay;