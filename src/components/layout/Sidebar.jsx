import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../store/themeSlice';
import BoardModal from '../modals/BoardModal';
import logoDark from '../../assets/logo-dark.svg';
import logoLight from '../../assets/logo-light.svg';
import iconBoard from '../../assets/icon-board.svg';
import iconDarkTheme from '../../assets/icon-dark-theme.svg';
import iconLightTheme from '../../assets/icon-light-theme.svg';
import iconHideSidebar from '../../assets/icon-hide-sidebar.svg';
import iconShowSidebar from '../../assets/icon-show-sidebar.svg';

const SidebarContainer = styled.div`
  width: ${props => props.isVisible ? '300px' : '0'};
  height: 100vh;
  padding: ${props => props.isVisible ? `${props.theme.spacing.xxl} 0` : '0'};
  background-color: ${props => props.theme.colors.neutral.darkGrey};
  border-right: 1px solid ${props => props.theme.colors.neutral.linesDark};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: all 0.3s ease;
`;

const LogoContainer = styled.div`
  padding: 0 ${props => props.theme.spacing.xxl};
  margin-bottom: ${props => props.theme.spacing.xxl};
  display: ${props => props.isVisible ? 'block' : 'none'};
`;

const Logo = styled.img`
  height: 25px;
`;

const BoardsSection = styled.div`
  margin-bottom: ${props => props.theme.spacing.xxl};
  display: ${props => props.isVisible ? 'block' : 'none'};
`;

const BoardsTitle = styled.h2`
  ${props => props.theme.typography.body.m};
  color: ${props => props.theme.colors.text.medium};
  letter-spacing: 2.4px;
  text-transform: uppercase;
  margin-bottom: ${props => props.theme.spacing.l};
  padding: 0 ${props => props.theme.spacing.xxl};
`;

const CreateBoardButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.m};
  color: ${props => props.theme.colors.primary.purple};
  ${props => props.theme.typography.heading.m};
  padding: ${props => props.theme.spacing.m} ${props => props.theme.spacing.xl};
  margin-right: ${props => props.theme.spacing.m};
  width: 95%;
  transition: all 0.2s ease;

  img {
    width: 16px;
    height: 16px;
  }

  &:hover, &.active {
    background-color: ${props => props.theme.colors.neutral.veryDarkGrey};
    color: ${props => props.theme.colors.primary.purple};
    border-radius: 0 100px 100px 0;
  }
`;

const BoardButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.m};
  color: ${props => props.theme.colors.text.medium};
  ${props => props.theme.typography.heading.m};
  padding: ${props => props.theme.spacing.m} ${props => props.theme.spacing.xl};
  margin-right: ${props => props.theme.spacing.m};
  width: 95%;
  transition: all 0.2s ease;

  img {
    width: 16px;
    height: 16px;
  }

  &:hover {
    background-color: ${props => props.theme.colors.neutral.veryDarkGrey};
    color: ${props => props.theme.colors.primary.purple};
    border-radius: 0 100px 100px 0;
  }

  &.active {
    background-color: ${props => props.theme.colors.primary.purple};
    color: ${props => props.theme.colors.neutral.white};
    border-radius: 0 100px 100px 0;
  }
`;

const ThemeToggle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing.xl};
  margin: auto ${props => props.theme.spacing.xl} 0;
  padding: ${props => props.theme.spacing.m};
  background-color: ${props => props.theme.colors.neutral.veryDarkGrey};
  border-radius: ${props => props.theme.borderRadius.m};
`;

const ThemeIcon = styled.img`
  width: 18px;
  height: 18px;
`;

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${props => props.theme.colors.primary.purple};
    transition: .4s;
    border-radius: 34px;

    &:before {
      position: absolute;
      content: "";
      height: 14px;
      width: 14px;
      left: 3px;
      bottom: 3px;
      background-color: white;
      transition: .4s;
      border-radius: 50%;
    }
  }

  input:checked + span:before {
    transform: translateX(20px);
  }
`;

const HideButton = styled.button`
  display: ${props => props.isVisible ? 'flex' : 'none'};
  align-items: center;
  gap: ${props => props.theme.spacing.s};
  color: ${props => props.theme.colors.text.medium};
  ${props => props.theme.typography.heading.m};
  padding: ${props => props.theme.spacing.m} ${props => props.theme.spacing.xxl};
  margin-top: ${props => props.theme.spacing.s};

  img {
    width: 18px;
    height: 16px;
  }

  &:hover {
    color: ${props => props.theme.colors.primary.purple};
  }
`;

const ShowSidebarButton = styled.button`
  position: fixed;
  bottom: 32px;
  left: 0;
  display: ${props => props.isVisible ? 'none' : 'flex'};
  align-items: center;
  background-color: ${props => props.theme.colors.primary.purple};
  color: ${props => props.theme.colors.neutral.white};
  padding: ${props => props.theme.spacing.m} ${props => props.theme.spacing.l};
  border-radius: 0 100px 100px 0;
  transition: all 0.2s ease;

  img {
    width: 18px;
    height: 16px;
  }

  &:hover {
    opacity: 0.8;
  }
`;

const Sidebar = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const boards = useSelector((state) => state.boards.boards);
  const [isVisible, setIsVisible] = useState(true);
  const [isBoardModalOpen, setIsBoardModalOpen] = useState(false);

  const toggleSidebar = () => {
    setIsVisible(!isVisible);
  };

  const openBoardModal = () => {
    setIsBoardModalOpen(true);
  };

  const closeBoardModal = () => {
    setIsBoardModalOpen(false);
  };

  return (
    <>
      <SidebarContainer isVisible={isVisible}>
        <LogoContainer isVisible={isVisible}>
          <Logo src={isDarkMode ? logoLight : logoDark} alt="Kanban logo" />
        </LogoContainer>
        
        <BoardsSection isVisible={isVisible}>
          <BoardsTitle>All Boards ({boards.length})</BoardsTitle>
          {boards.map((board) => (
            <BoardButton 
              key={board.id}
              className={board.id === boards.activeBoard ? 'active' : ''}
            >
              <img src={iconBoard} alt="" />
              {board.name}
            </BoardButton>
          ))}
          
          <CreateBoardButton onClick={openBoardModal}>
            <img src={iconBoard} alt="" />
            + Create New Board
          </CreateBoardButton>
        </BoardsSection>

        <ThemeToggle>
          <ThemeIcon src={iconLightTheme} alt="Light theme" />
          <Switch>
            <input 
              type="checkbox" 
              checked={isDarkMode}
              onChange={() => dispatch(toggleTheme())}
            />
            <span></span>
          </Switch>
          <ThemeIcon src={iconDarkTheme} alt="Dark theme" />
        </ThemeToggle>

        <HideButton isVisible={isVisible} onClick={toggleSidebar}>
          <img src={iconHideSidebar} alt="" />
          Hide Sidebar
        </HideButton>
      </SidebarContainer>

      <ShowSidebarButton isVisible={isVisible} onClick={toggleSidebar}>
        <img src={iconShowSidebar} alt="Show Sidebar" />
      </ShowSidebarButton>

      <BoardModal 
        isOpen={isBoardModalOpen} 
        onClose={closeBoardModal} 
      />
    </>
  );
};

export default Sidebar;
