import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirige a la página de login
    router.push('/login');
  }, [router]);

  return null; // No renderiza nada, solo redirige
}
