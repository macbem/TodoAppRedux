import styled, { injectGlobal } from 'styled-components';

export const injectGlobalStyles = function() {
  // eslint-disable-next-line
  injectGlobal`
  button {
    margin: 0;
    padding: 0;
    border: 0;
    background: none;
    font-size: 100%;
    vertical-align: baseline;
    font-family: inherit;
    font-weight: inherit;
    color: inherit;
    appearance: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
    line-height: 1.4em;
    background: #f5f5f5;
    color: #4d4d4d;
    min-width: 230px;
    max-width: 550px;
    margin: 0 auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: 300;
  }

  :focus {
    outline: 0;
  }

  input::-webkit-input-placeholder {
    font-style: italic;
    font-weight: 300;
    color: #e6e6e6;
  }

  input::-moz-placeholder {
    font-style: italic;
    font-weight: 300;
    color: #e6e6e6;
  }

  input::input-placeholder {
    font-style: italic;
    font-weight: 300;
    color: #e6e6e6;
  }
`;
};

export const AppHeader = styled.header``;

export const AppWrapperElement = styled.main`
  background: #fff;
  margin: 130px 0 40px 0;
  position: relative;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),
              0 25px 50px 0 rgba(0, 0, 0, 0.1);
`;

export const ToggleAllButton = styled.span`
  position: absolute;
  top: -55px;
  left: -17px;
  width: 60px;
  height: 34px;
  text-align: center;
  margin: 3px 0.5ex;
  border: none;
  &::before {
    content: '❯';
    font-size: 22px;
    color: #e6e6e6;
    padding: 10px 27px 10px 27px;
  }
  @media screen and (-webkit-min-device-pixel-ratio:0) {
    transform: rotate(90deg);
    appearance: none;
  }
`;

export const TodoItemList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const MainAppSection = styled.section`
  position: relative;
  z-index: 2;
  border-top: 1px solid #e6e6e6;
`;

export const FooterContainer = styled.footer`
  color: #777;
  padding: 10px 15px;
  height: 20px;
  text-align: center;
  border-top: 1px solid #e6e6e6;
  &:before {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 50px;
    overflow: hidden;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),
                0 8px 0 -3px #f6f6f6,
                0 9px 1px -3px rgba(0, 0, 0, 0.2),
                0 16px 0 -6px #f6f6f6,
                0 17px 2px -6px rgba(0, 0, 0, 0.2);
  }
`;

export const TodoCount = styled.span`
  float: left;
  text-align: left;
`;

export const ClearCompletedButton = styled.button`
  float: right;
  position: relative;
  line-height: 20px;
  text-decoration: none;
  cursor: pointer;
  &:active {
    text-decoration: none;
  }
  &:hover { text-decoration: underline; }
`;

export const TodoItemIdle = styled.li`
  position: relative;
  font-size: 24px;
  border-bottom: 1px solid #ededed;
  &:last-child { border-bottom: none; }
  &:hover button {
    display: block;
  }
`;

export const TodoItemEditing = styled(TodoItemIdle)`
  border-bottom: none;
  padding: 0;
  &:last-child { margin-bottom: -1px; }
`;

export const TodoTextLabel = styled.label`
  word-break: break-all;
  padding: 15px 60px 15px 15px;
  margin-left: 45px;
  display: block;
  line-height: 1.2;
  transition: color 0.4s;
  ${props => props.completed ? `color: #d9d9d9;
     text-decoration: line-through;` : ''}
`;

export const TodoCheckbox = styled.input`
  text-align: center;
  width: 40px;
  height: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  border: none;
  -webkit-appearance: none;
  appearance: none;
  &:after {
    content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#ededed" stroke-width="3"/></svg>');
  }
  &:checked:after {
    content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#bddad5" stroke-width="3"/><path fill="#5dc2af" d="M72 25L42 71 27 56l-4 4 20 20 34-52z"/></svg>');
  }
  @media screen and (-webkit-min-device-pixel-ratio: 0) {
    height: 40px;
  }
`;

export const TodoRemoveButton = styled.button`
  display: none;
  position: absolute;
  top: 0;
  right: 10px;
  bottom: 0;
  width: 40px;
  height: 40px;
  margin: auto 0;
  font-size: 30px;
  color: #cc9a9a;
  margin-bottom: 11px;
  transition: color 0.2s ease-out;
  &::after { content: '×'; }
  &:hover { color: #af5b5e; }
`;

export const FiltersContainer = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  position: absolute;
  right: 0;
  left: 0;
`;

export const FilterLink = styled.li`
  display: inline;
`;

export const LinkElement = styled.a`
  color: inherit;
  margin: 3px;
  padding: 3px 7px;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 3px;
  &:hover { border-color: rgba(175, 47, 47, 0.1); }
  ${props =>
  props.selected ? 'border-color: rgba(175, 47, 47, 0.2);' : ''}
`;

export const Title = styled.h1`
  position: absolute;
  top: -140px;
  width: 100%;
  font-size: 100px;
  font-weight: 100;
  text-align: center;
  color: rgba(175, 47, 47, 0.15);
  text-rendering: optimizeLegibility;
`;

export const TodoInputElement = styled.input`
  position: relative;
  margin: 0;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  border: 0;
  color: inherit;
  padding: 6px;
  border: 1px solid #999;
  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  ${props => props.newTodoInput ? `padding: 16px 16px 16px 60px;
  border: none;
  background: rgba(0, 0, 0, 0.003);
  box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);` : `
    display: block;
    width: 506px;
    max-width: calc(100% - 44px);
    padding: 12px 16px;
    margin: 0 0 0 43px;`}
`;
