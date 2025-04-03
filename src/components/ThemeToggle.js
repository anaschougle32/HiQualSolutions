import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../App';
import { FaSun, FaMoon } from 'react-icons/fa';

const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 64px;
  height: 32px;
  border-radius: 24px;
  background: ${({ theme }) => 
    theme.mode === 'dark' 
      ? 'linear-gradient(to right, #121212, #2a2a2a)' 
      : 'linear-gradient(to right, #e0e0e0, #ffffff)'
  };
  position: relative;
  border: none;
  cursor: pointer;
  padding: 4px;
  overflow: hidden;
  box-shadow: ${({ theme }) => 
    theme.mode === 'dark' 
      ? 'inset 0 1px 3px rgba(0, 0, 0, 0.4), 0 1px 3px rgba(255, 255, 255, 0.05)' 
      : 'inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.05)'
  };
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: ${({ theme }) => 
      theme.mode === 'dark' 
        ? 'inset 0 1px 3px rgba(0, 0, 0, 0.6), 0 1px 8px rgba(255, 255, 255, 0.08)' 
        : 'inset 0 1px 3px rgba(0, 0, 0, 0.15), 0 1px 8px rgba(0, 0, 0, 0.08)'
    };
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 3px;
    left: ${({ theme }) => theme.mode === 'dark' ? '33px' : '3px'};
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background: ${({ theme }) => 
      theme.mode === 'dark' 
        ? 'linear-gradient(135deg, #ffc600, #ff6b35)' 
        : 'linear-gradient(135deg, #ffffff, #f0f0f0)'
    };
    box-shadow: ${({ theme }) => 
      theme.mode === 'dark' 
        ? '0 2px 10px rgba(255, 107, 53, 0.5)' 
        : '0 2px 5px rgba(0, 0, 0, 0.15)'
    };
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    z-index: 2;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  z-index: 1;
  opacity: ${({ active }) => active ? 1 : 0.3};
  color: ${({ theme, icon }) => 
    icon === 'sun' 
      ? '#FF6B35' 
      : theme.mode === 'dark' 
        ? '#A0A0A0' 
        : '#555555'
  };
  transition: all 0.3s ease;
`;

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <ToggleWrapper>
      <ToggleButton theme={theme} onClick={toggleTheme}>
        <IconWrapper icon="sun" active={theme.mode === 'light'}>
          <FaSun size={14} />
        </IconWrapper>
        <IconWrapper icon="moon" active={theme.mode === 'dark'}>
          <FaMoon size={14} />
        </IconWrapper>
      </ToggleButton>
    </ToggleWrapper>
  );
};

export default ThemeToggle; 