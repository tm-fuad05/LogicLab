import { Outlet, useLoaderData } from 'react-router';
import Shell from '../components/layout/Shell';

export async function rootLoader() {
  return { timestamp: new Date().toISOString() };
}

export default function RootLayout() {
  useLoaderData();
  return (
    <Shell>
      <Outlet />
    </Shell>
  );
}
