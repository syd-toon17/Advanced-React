import PropTypes from 'prop-types';
import Header from './Header';

export default function Page({ children, cool }) {
  return (
    <div>
      <Header> </Header>
      <h2>I am the component</h2>
      <h3>{cool}</h3>
      {children}
    </div>
  );
}

Page.propType = {
  cool: PropTypes.string,
  children: PropTypes.any,
};
