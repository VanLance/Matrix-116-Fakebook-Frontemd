import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Sidebar from './Sidebar';

{
  /* <Container>
  <Stack direction="horizontal">
    <Sidebar />
    <Container>
      <Posts />
    </Container>
  </Stack>
</Container>; */
}

export default function Body({children}:{ children: JSX.Element | JSX.Element[] }) {
  return (
    <Container>
      <Stack direction="horizontal">
        <Sidebar />
        <Container>
          { children }
        </Container>
      </Stack>
    </Container>
  );
}
