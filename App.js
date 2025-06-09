import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavTab } from './src/components/NavTab';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavTab />
    </SafeAreaProvider>
  );
}

