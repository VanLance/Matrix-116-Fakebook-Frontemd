import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Sidebar from './Sidebar';

interface BodyProps {
  sidebar: boolean;
  children: JSX.Element | JSX.Element[];
}

export default function Body({ sidebar, children }: BodyProps) {
  return (
    <Container>
      <Stack direction="horizontal">
        {sidebar && <Sidebar />}
        <Container>{children}</Container>
      </Stack>
    </Container>
  );
}
