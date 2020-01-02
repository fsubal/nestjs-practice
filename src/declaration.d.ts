import { RouteComponentProps } from '@reach/router';

declare global {
  type PageProps<P> = RouteComponentProps & P;
  type Page<P> = React.ComponentType<PageProps<P>>;
}
