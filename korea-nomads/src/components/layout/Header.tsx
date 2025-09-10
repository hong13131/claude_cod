import HeaderClient from './HeaderClient';
import AuthButtonWrapper from './AuthButtonWrapper';

export default function Header() {
  return <HeaderClient authButton={<AuthButtonWrapper />} />;
}