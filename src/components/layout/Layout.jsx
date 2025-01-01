import React from 'react';
import styled from '@emotion/styled';
import Sidebar from './Sidebar';
import iconAddTask from '../../assets/icon-add-task-mobile.svg';
import iconVerticalEllipsis from '../../assets/icon-vertical-ellipsis.svg';

const LayoutContainer = styled.div`
  display: flex;
  min-height: 100vh;
  height: 100%;
  background-color: ${props => props.theme.colors.neutral.veryDarkGrey};
`;

const MainContent = styled.main`
  flex: 1;
  background-color: ${props => props.theme.colors.neutral.veryDarkGrey};
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  height: 96px;
  background-color: ${props => props.theme.colors.neutral.darkGrey};
  border-bottom: 1px solid ${props => props.theme.colors.neutral.linesDark};
  padding: 0 ${props => props.theme.spacing.xxl};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.xl};
`;

const HeaderTitle = styled.h1`
  ${props => props.theme.typography.heading.xl};
  color: ${props => props.theme.colors.text.dark};
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.xl};
`;

const AddTaskButton = styled.button`
  background-color: ${props => props.theme.colors.primary.purple};
  color: #FFFFFF;
  padding: ${props => props.theme.spacing.m} ${props => props.theme.spacing.xl};
  border-radius: ${props => props.theme.borderRadius.full};
  ${props => props.theme.typography.heading.m};
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.s};
  transition: background-color 0.2s ease;

  img {
    width: 12px;
    height: 12px;
  }

  &:hover {
    background-color: ${props => props.theme.colors.primary.purpleHover};
  }
`;

const OptionsButton = styled.button`
  padding: ${props => props.theme.spacing.s};
  
  img {
    width: 4px;
    height: 16px;
  }

  &:hover {
    background-color: rgba(99, 95, 199, 0.1);
    border-radius: ${props => props.theme.borderRadius.s};
  }
`;

const ContentArea = styled.div`
  flex: 1;
  padding: ${props => props.theme.spacing.xl};
  overflow-x: auto;
`;

const Layout = ({ children, theme }) => {
  return (
    <LayoutContainer theme={theme}>
      <Sidebar />
      <MainContent>
        <Header>
          <HeaderLeft>
            <HeaderTitle>Platform Launch</HeaderTitle>
          </HeaderLeft>
          <HeaderActions>
            <AddTaskButton>
              <img src={iconAddTask} alt="" />
              Add New Task
            </AddTaskButton>
            <OptionsButton>
              <img src={iconVerticalEllipsis} alt="More options" />
            </OptionsButton>
          </HeaderActions>
        </Header>
        <ContentArea>
          {children}
        </ContentArea>
      </MainContent>
    </LayoutContainer>
  );
};

export default Layout;
