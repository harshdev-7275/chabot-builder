// store/builderStore.ts
import { create } from 'zustand';

interface Component {
  type: string;
  service: string;
}

interface BuilderState {
  selectedComponents: Component[];
  theme: 'light' | 'dark';
  sidebarColor: string;
  buttonColor: string;
  inputColor: string;
  backgroundColor: string;
  addComponent: (component: Component) => void;
  removeComponent: (index: number) => void;
  toggleTheme: () => void;
  setSidebarColor: (color: string) => void;
  setButtonColor: (color: string) => void;
  setInputColor: (color: string) => void;
  setBackgroundColor: (color: string) => void;
}

// Retrieve saved configurations from localStorage
const savedComponents = JSON.parse(localStorage.getItem('selectedComponents') || '[]');
const savedTheme = localStorage.getItem('theme') || 'light';

const useBuilderStore = create<BuilderState>((set) => ({
  selectedComponents: savedComponents,
  theme: savedTheme,
  sidebarColor: '#f8f9fa',
  buttonColor: '#007bff',
  inputColor: '#ffffff',
  backgroundColor: '#f1f3f5',
  addComponent: (component) => {
    set((state) => {
      const updatedComponents = [...state.selectedComponents, component];
      localStorage.setItem('selectedComponents', JSON.stringify(updatedComponents));
      return { selectedComponents: updatedComponents };
    });
  },
  removeComponent: (index) => {
    set((state) => {
      const updatedComponents = state.selectedComponents.filter((_, i) => i !== index);
      localStorage.setItem('selectedComponents', JSON.stringify(updatedComponents));
      return { selectedComponents: updatedComponents };
    });
  },
  toggleTheme: () =>
    set((state) => {
      const newTheme = state.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      document.documentElement.classList.toggle('dark', newTheme === 'dark');
      return { theme: newTheme };
    }),
  setSidebarColor: (color) => set({ sidebarColor: color }),
  setButtonColor: (color) => set({ buttonColor: color }),
  setInputColor: (color) => set({ inputColor: color }),
  setBackgroundColor: (color) => set({ backgroundColor: color }),
}));

export default useBuilderStore;
