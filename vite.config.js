import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  console.log('Loaded env:', env); // 🧠 Debugging output

  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
     server: {
     port: 3000,
      },
      build: {
        outDir: 'dist',
      },
<<<<<<< HEAD
     
=======
>>>>>>> 913186bdb32d44339277b90b71ecb9f21bf8441d
  };
});
