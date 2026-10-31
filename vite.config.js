import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative assets keep the static build portable, including GitHub project Pages.
export default defineConfig({ base: './', plugins: [react()] });
